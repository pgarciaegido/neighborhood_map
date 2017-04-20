import _ from 'lodash';
import render from './map/render';
import { setMarkers } from './map/markers';
import * as viewModel from './knockout/viewModel.js'

/* google.maps is a GLOBAL variable, and its called directly on the HTML */

// Makes initMap global, so the callback on the Google script catch it
window.initMap = function() {
  // Renders map and keeps object in 'map' variable
  var map = render();

  // Creates infowindow.
  var infoWindow = new google.maps.InfoWindow();

  // Set markers.
  setMarkers(map, infoWindow);
}
