import hotspots from '../models/hotspots.js';
import { setInfowindow } from './infowindow';
import map from './render';


export {
  setMarkers,
  showListings,
  hideListings
}

var markers = [];

function setMarkers (map, infoWindow) {
  // Creates marker.
  for (let i = 0; i < hotspots.length; i++) {
    var marker = new google.maps.Marker({
      position: hotspots[i].location,
      map: map,
      title: hotspots[i].title,
      id: i
    });

    // Event listener to display infowindow. Watch out: if arrow function, this
    // becomes 'window'.
    marker.addListener('click', function () {
      setInfowindow(this, infoWindow);
    });

    markers.push(marker)
  }
}



function hideListings() {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}

function showListings(map) {
  var bounds = new google.maps.LatLngBounds();
  // Extend the boundaries of the map for each marker and display the marker
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
    bounds.extend(markers[i].position);
  }
  map.fitBounds(bounds);
}
