import { returnHotspots } from '../models/hotspots.js';
import { setInfowindow } from './infowindow';
import map from './render';

export {
  setMarkers,
  bounceMarker,
  markers
}

var markers = [];
var hotspots = returnHotspots();

function setMarkers (map, infoWindow) {
  // Creates marker.
  for (let i = 0; i < hotspots.length; i++) {
    var marker = new google.maps.Marker({
      position: hotspots[i].location,
      map: map,
      title: hotspots[i].title,
      animation: google.maps.Animation.DROP,
      service: hotspots[i].service,
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

setTimeout(function () { console.log(markers)}, 2000);

function bounceMarker (marker) {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}
