import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Text from '../pages/text/index.js'
import Map from '../pages/map/index.js'

const BasicRoute = () => (
  <BrowserRouter>
    <Route exact path="/text" component={Text} />
    <Route exact path="/" component={Map} />
    <Route exact path="/map" component={Map} />
  </BrowserRouter>
)

export default BasicRoute