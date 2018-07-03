import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Slider from './carousel';
import Cards from './cards';
 class HomePage extends Component {
  render() {
    return (
      <div>
          <Slider />
          <Cards />
      </div>
    )
  }
}
export default HomePage;