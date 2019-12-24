(this["webpackJsonpesri-react-demo"]=this["webpackJsonpesri-react-demo"]||[]).push([[0],{25:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(20),r=a.n(o),s=a(21),c=a(5),l=a(7),d=a(8),u=a(11),p=a(10),h=a(12),m=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"handleRouteTo",value:function(e){this.props.history.push(e)}},{key:"render",value:function(){return i.a.createElement("button",{onClick:this.handleRouteTo.bind(this,"/map")},"click to map")}}]),t}(n.Component),w=a(14),g=a.n(w),y=a(24),f=a(15),v=a.n(f);function b(e){return v.a.utils.Promise=Promise,v.a.loadModules(e,{dojoConfig:window.dojoConfig,url:window.apiRoot})}window.apiRoot="https://js.arcgis.com/4.14/",window.dojoConfig={async:!0,deps:["@dojo/framework/shim/main"],packages:[],has:{"esri-promise-compatibility":1,"esri-featurelayer-webgl":1}};var E=function(){function e(){Object(l.a)(this,e),this.handles={}}return Object(d.a)(e,[{key:"on",value:function(e,t){if(this.handles.hasOwnProperty(e)||(this.handles[e]=[]),"function"!=typeof t)throw new Error("\u7f3a\u5c11\u56de\u8c03\u51fd\u6570");return this.handles[e].push(t),this}},{key:"emit",value:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];if(!this.handles.hasOwnProperty(e))throw new Error('"'.concat(e,'"\u4e8b\u4ef6\u672a\u6ce8\u518c'));return this.handles[e].forEach((function(e,t,n){e.apply(null,a)})),this}}]),e}();function x(e,t,a,n,i,o){var r=new e({basemap:"topo-vector"});o.view=new t({center:[-118.805,34.027],map:r,container:i,zoom:11})}function B(e,t){var a=new e({view:t,nextBasemap:"satellite"});console.log("view: ",t),t.ui.add(a,"bottom-right")}function k(e,t){var a=new e({view:t,source:{portal:{url:"https://www.arcgis.com",useVectorBasemaps:!0}}});t.ui.add(a,"top-right")}function C(e,t){var a=new e({url:"https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails_Styled/FeatureServer/0",outFields:["TRL_NAME","ELEV_GAIN"],popupTemplate:{title:"Trail Information",content:function(){return"This is {TRL_NAME} with {ELEV_GAIN} ft of climbing."}}});t.add(a,0)}function j(e){var t=document.createElement("div");function a(a){var n="Lat/Lon "+a.latitude.toFixed(3)+" "+a.longitude.toFixed(3)+" | Scale 1:"+Math.round(1*e.scale)/1+" | Zoom "+e.zoom;t.innerHTML=n}t.id="coordsWidget",t.className="esri-widget esri-component",t.style.padding="7px 15px 5px",e.ui.add(t,"bottom-right"),e.watch("stationary",(function(t){a(e.center)})),e.on("pointer-move",(function(t){a(e.toMap({x:t.x,y:t.y}))}))}function M(e,t,a){var n=new e;a.map.add(n);var i=new t({view:a,layer:n}),o={color:[255,0,0],width:1},r=[255,255,255,.5],s=i.viewModel.pointSymbol;s.color=r,s.outline=o,s.size=8;var c=i.viewModel.polylineSymbol;c.color=o.color,c.width=o.width;var l=i.viewModel.polygonSymbol;l.color=r,l.outline=o,i.on("create",(function(e){if("complete"===e.state){var t={name:"My Graphic",type:e.graphic.geometry.type};e.graphic.attributes=t;e.graphic.popupTemplate={title:"{name}",content:"I am a {type}."}}})),a.ui.add(i,"top-right")}var T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).id="mapDiv",a.view=null,a.handles={},a.subscribe=a.initSubscribe(),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getEsriComponent.apply(this)}},{key:"initSubscribe",value:function(){var e=new E;return e.on("initBaseMap",x),e.on("addBasemapToggle",B),e.on("addBasemapGallery",k),e.on("addFeatureLayer",C),e.on("addCoordsWidget",j),e.on("drawGraphics",M),e}},{key:"getEsriComponent",value:function(){var e,t,a,n,i,o,r,s,c,l,d,u;return g.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return e=this,p.next=3,g.a.awrap(b(["esri/Map","esri/views/MapView","esri/Basemap","esri/layers/TileLayer","esri/widgets/BasemapToggle","esri/widgets/BasemapGallery","esri/layers/FeatureLayer","esri/layers/GraphicsLayer","esri/widgets/Sketch"]));case 3:t=p.sent,a=Object(y.a)(t,9),n=a[0],i=a[1],o=a[2],r=a[3],s=a[4],c=a[5],l=a[6],d=a[7],u=a[8],e.handles.initBaseMap=function(){e.subscribe.emit("initBaseMap",n,i,o,r,e.id,e)},e.handles.addBasemapToggle=function(){console.log("that",e),e.subscribe.emit("addBasemapToggle",s,e.view)},e.handles.addBasemapGallery=function(){e.subscribe.emit("addBasemapGallery",c,e.view)},e.handles.addFeatureLayer=function(){e.subscribe.emit("addFeatureLayer",l,e.view.map)},e.handles.addCoordsWidget=function(){e.subscribe.emit("addCoordsWidget",e.view)},e.handles.drawGraphics=function(){e.subscribe.emit("drawGraphics",d,u,e.view)};case 20:case"end":return p.stop()}}),null,this)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{style:{display:"flex",flexFlow:"row wrap",marginBottom:"10px"}},i.a.createElement("div",null,"\u4f9d\u6b21\u70b9\u51fb:"),i.a.createElement("button",{style:{marginRight:"2px"},onClick:function(){e.handles.initBaseMap()}},"initBaseMap"),i.a.createElement("button",{style:{marginRight:"2px"},onClick:function(){e.handles.addBasemapToggle()}},"addBasemapToggle"),i.a.createElement("button",{style:{marginRight:"2px"},onClick:function(){e.handles.addBasemapGallery()}},"addBasemapGallery"),i.a.createElement("button",{style:{marginRight:"2px"},onClick:function(){e.handles.addFeatureLayer()}},"addFeatureLayer"),i.a.createElement("button",{style:{marginRight:"2px"},onClick:function(){e.handles.addCoordsWidget()}},"addCoordsWidget"),i.a.createElement("button",{style:{marginRight:"2px"},onClick:function(){e.handles.drawGraphics()}},"drawGraphics")),i.a.createElement("div",{id:this.id,style:{width:"900px",height:"600px"}}))}}]),t}(n.Component),G=function(){return i.a.createElement(s.a,null,i.a.createElement(c.a,{exact:!0,path:"/text",component:m}),i.a.createElement(c.a,{exact:!0,path:"/",component:T}),i.a.createElement(c.a,{exact:!0,path:"/map",component:T}))};r.a.render(i.a.createElement(G,null),document.getElementById("root"))}},[[25,1,2]]]);