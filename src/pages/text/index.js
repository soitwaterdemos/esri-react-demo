import React, { Component } from 'react';

export default class ArcGISMap extends Component {
  handleRouteTo(route) {
    this.props.history.push(route)
  }
  render() {
    return (
      <button onClick={this.handleRouteTo.bind(this, "/map")}>click to map</button>
    )
  }
}