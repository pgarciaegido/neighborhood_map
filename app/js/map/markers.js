import hotspots from '../models/hotspots.js';
import { setInfowindow } from './infowindow';
import map from './render';


export {
  setMarkers,
  makeMarkerIcon,
  markers
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

function makeMarkerIcon(markerColor) {
  var markerImage = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(21, 34),
    new google.maps.Point(0, 0),
    new google.maps.Point(10, 34),
    new google.maps.Size(21,34));
  return markerImage;
}
