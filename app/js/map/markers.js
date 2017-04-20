import hotspots from '../models/hotspots.js';
import { setInfowindow } from './infowindow';
import map from './render';


export {
  setMarkers,
  showListings,
  hideListings,
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
