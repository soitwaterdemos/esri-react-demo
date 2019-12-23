// 对 esri-loader 的简单封装
import esriLoader from 'esri-loader';

window.apiRoot = 'https://js.arcgis.com/4.14/'
//可以写在项目的配置文件里
window.dojoConfig = {
  async: true,
  deps: ['@dojo/framework/shim/main'],
  packages: [],
  has: {
    'esri-promise-compatibility': 1, // Use native Promises by default
    'esri-featurelayer-webgl': 1, // Enable FeatureLayer WebGL capabilities
  }
};

function configEsriLoader() {
  esriLoader.utils.Promise = Promise;
}

export function load(modules) {
  configEsriLoader();
  return esriLoader.loadModules(modules, {
    dojoConfig: window.dojoConfig,
    url: window.apiRoot,
  });
}