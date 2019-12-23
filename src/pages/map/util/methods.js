export function initBaseMap(Map, MapView, Basemap, TileLayer, id, that) { // that, 直接传递了 作用域...
  // let layer = new TileLayer({
  //   url: "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer"
  // })
  // let baseMap = new Basemap({
  //   baseLayers: [layer],
  //   title: "Custom Basemap",
  //   id: "myBasemap"
  // });
  let map = new Map({
    basemap: 'topo-vector'
  });
  that.view = new MapView({
    center: [-118.805, 34.027],
    map: map,
    container: id,
    zoom: 11
  })
}

export function addBasemapToggle(BasemapToggle, view) {
  var basemapToggle = new BasemapToggle({
    view: view,
    nextBasemap: "satellite"
  })
  console.log('view: ', view)
  view.ui.add(basemapToggle, "bottom-right");
}

export function addBasemapGallery(BasemapGallery, view) {
  var basemapGallery = new BasemapGallery({
    view: view,
    source: {
      portal: {
        url: "https://www.arcgis.com",
        useVectorBasemaps: true 
      }
    }
  })
  view.ui.add(basemapGallery, "top-right");
}

export function addFeatureLayer(FeatureLayer, map) {
  var popupTrails = {
    "title": "Trail Information",
    "content": function () {
      return "This is {TRL_NAME} with {ELEV_GAIN} ft of climbing.";
    }
  }

  var trails = new FeatureLayer({
    url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0",
    outFields: ["TRL_NAME", "ELEV_GAIN"],
    popupTemplate: popupTrails
  });

  map.add(trails, 0);
}

export function addCoordsWidget (view) {
  var coordsWidget = document.createElement("div");
  coordsWidget.id = "coordsWidget";
  coordsWidget.className = "esri-widget esri-component";
  coordsWidget.style.padding = "7px 15px 5px";

  view.ui.add(coordsWidget, "bottom-right");
  view.watch("stationary", function (isStationary) {
    showCoordinates(view.center);
  });

  view.on("pointer-move", function (evt) {
    showCoordinates(view.toMap({ x: evt.x, y: evt.y }));
  });

  function showCoordinates(pt) {
    var coords = "Lat/Lon " + pt.latitude.toFixed(3) + " " + pt.longitude.toFixed(3) +
      " | Scale 1:" + Math.round(view.scale * 1) / 1 +
      " | Zoom " + view.zoom;
    coordsWidget.innerHTML = coords;
  }
}

export function drawGraphics(GraphicsLayer, Sketch, view) {
  var graphicsLayer = new GraphicsLayer();

  view.map.add(graphicsLayer)
  var sketch = new Sketch({
    view: view,
    layer: graphicsLayer
  });
  var stroke = {
    color: [255, 0, 0],
    width: 1
  }

  var fillColor = [255, 255, 255, .5];

  var pointSymbol = sketch.viewModel.pointSymbol;
  pointSymbol.color = fillColor;
  pointSymbol.outline = stroke;
  pointSymbol.size = 8;

  var polylineSymbol = sketch.viewModel.polylineSymbol;
  polylineSymbol.color = stroke.color;
  polylineSymbol.width = stroke.width;

  var polygonSymbol = sketch.viewModel.polygonSymbol;
  polygonSymbol.color = fillColor;
  polygonSymbol.outline = stroke;

  sketch.on("create", function (event) {
    if (event.state === "complete") {
      var attributes = {
        name: "My Graphic",
        type: event.graphic.geometry.type
      }
      event.graphic.attributes = attributes;

      var popupTemplate = {
        title: "{name}",
        content: "I am a {type}."
      }
      event.graphic.popupTemplate = popupTemplate;
    }
  });

  view.ui.add(sketch, "top-right");
}
