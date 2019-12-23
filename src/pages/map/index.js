import React, { Component } from 'react'
import * as esriLoader from './util/esriLoader.js'
import { Subscribe } from './util/subscribe.js'
import { initBaseMap, addBasemapToggle, addBasemapGallery, addFeatureLayer, addCoordsWidget, drawGraphics } from "./util/methods.js"

export default class ArcGISMap extends Component {
  constructor(props) {
    super(props)
    this.id = 'mapDiv' // 容器id
    this.view = null // 地图视图
    this.handles = {} // 用于'button'触发 this.subscribe.emit('type')
    this.subscribe = this.initSubscribe() // 注册'订阅事件'
  }
  componentDidMount() {
    this.getEsriComponent.apply(this)
  }
  initSubscribe() { // 订阅事件
    let subscribe = new Subscribe()
    subscribe.on('initBaseMap', initBaseMap)
    subscribe.on('addBasemapToggle', addBasemapToggle)
    subscribe.on('addBasemapGallery', addBasemapGallery)
    subscribe.on('addFeatureLayer', addFeatureLayer)
    subscribe.on('addCoordsWidget', addCoordsWidget)
    subscribe.on('drawGraphics', drawGraphics)
    return subscribe
  }
  async getEsriComponent() { // 加载 esri-loader 组件
    let that = this
    let [Map, MapView, Basemap, TileLayer, BasemapToggle, BasemapGallery, FeatureLayer, 
      GraphicsLayer, Sketch] = await esriLoader.load([
      "esri/Map", "esri/views/MapView", "esri/Basemap", "esri/layers/TileLayer",
      "esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery",
      "esri/layers/FeatureLayer", 
      "esri/layers/GraphicsLayer", "esri/widgets/Sketch",
    ]);

    that.handles.initBaseMap = () => { that.subscribe.emit('initBaseMap', Map, MapView, Basemap, TileLayer, that.id, that) }
    that.handles.addBasemapToggle = () => { console.log('that', that);that.subscribe.emit('addBasemapToggle', BasemapToggle, that.view) }
    that.handles.addBasemapGallery = () => { that.subscribe.emit('addBasemapGallery', BasemapGallery, that.view) }
    that.handles.addFeatureLayer = () => { that.subscribe.emit('addFeatureLayer', FeatureLayer, that.view.map) }
    that.handles.addCoordsWidget = () => { that.subscribe.emit('addCoordsWidget', that.view) }
    that.handles.drawGraphics = () => { that.subscribe.emit('drawGraphics', GraphicsLayer, Sketch, that.view) }
  }
  render() {
    return (
      <div>
        <div style={{display: 'flex', flexFlow: 'row wrap', marginBottom: '10px'}}>
          <div>依次点击:</div>
          <button style={{ marginRight: '2px' }} onClick={() => { this.handles.initBaseMap() }}>initBaseMap</button>
          <button style={{ marginRight: '2px' }} onClick={() => { this.handles.addBasemapToggle() }}>addBasemapToggle</button>
          <button style={{ marginRight: '2px' }} onClick={() => { this.handles.addBasemapGallery() }}>addBasemapGallery</button>
          <button style={{ marginRight: '2px' }} onClick={() => { this.handles.addFeatureLayer() }}>addFeatureLayer</button>
          <button style={{ marginRight: '2px' }} onClick={() => { this.handles.addCoordsWidget() }}>addCoordsWidget</button>
          <button style={{ marginRight: '2px' }} onClick={() => { this.handles.drawGraphics() }}>drawGraphics</button>
        </div>
        <div id={this.id} style={{width: '900px',height: '600px'}}></div>
      </div>
    )
  }
}