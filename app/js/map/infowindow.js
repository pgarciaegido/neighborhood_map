import ajax from 'es-ajax';
import { returnHotspots } from '../models/hotspots';
import secret from '../ajax/secret';

export {
  setInfowindow
}

// Displays infowindow, sets marker and template.
function setInfowindow(marker, infoWindow) {
  var lat = marker.internalPosition.lat();
  var lng = marker.internalPosition.lng();

  var foursquareUrl = `https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}
                       &client_id=${secret.client_id}&client_secret=${secret.client_secret}
                       &v=20170421&limit=10`;

   ajax(foursquareUrl)
   .get()
   .then(function (response) {
     let res = JSON.parse(response.response);
     var place = res.response.venues[0];

     var template = setTemplate(marker, place);

     infoWindow.marker = marker;
     infoWindow.setContent(template);
     infoWindow.open(map, marker);
   })

}



function setTemplate (marker, place) {
  return `
    <h3 class="title">${marker.title}</h3>
    <p class="iw-web">${place.url}</p>
  `;
}

var hotspots = returnHotspots();

function ajaxFoursquare(lat, lng){

}
