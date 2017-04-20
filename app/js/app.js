import _ from 'lodash';
import render from './map/render';
import { setMarkers, showListings, hideListings } from './map/markers';
import ko from 'knockout';

/* google.maps is a GLOBAL variable, and its called directly on the HTML */

// Makes initMap global, so the callback on the Google script catch it
window.initMap = function() {
  // Renders map and keeps object in 'map' variable
  var map = render();

  // Creates infowindow.
  var infoWindow = new google.maps.InfoWindow();

  // Set markers.
  setMarkers(map, infoWindow);

  document.getElementById('show').addEventListener('click', function() {
    showListings(map)
  });
  document.getElementById('hide').addEventListener('click', hideListings);
}
