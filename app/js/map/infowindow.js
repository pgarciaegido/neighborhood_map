import ajax from 'es-ajax';
import secret from '../secret/secret';
import { setLoader, removeLoader, getScreenSize } from './loader';
import { setTemplate, setTemplateError } from './infowindow_templates';

export {
  setInfowindow
}

// Displays infowindow, sets marker and template.
function setInfowindow(marker, infoWindow) {

  setLoader();
  // Gets marker coordinates
  var lat = marker.internalPosition.lat();
  var lng = marker.internalPosition.lng();
  var title = formatNames(marker.title);

  var foursquareUrl = `https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}
                       &client_id=${secret.foursquare.client_id}
                       &client_secret=${secret.foursquare.client_secret}
                       &v=20170421&limit=10&query=${title}`;

  var googleStreetPicsUrl = `https://maps.googleapis.com/maps/api/streetview?size=200x100
                             &location=${lat},${lng}
                             &fov=90&pitch=10
                             &key=${secret.google.api_key}`;

  // Ajax call to Foursquare URL. Handled with promises.
  ajax(foursquareUrl)
  .get()
  .then(function (response) {
   // If everything went alright
   if (response.status === 200){
     let res = JSON.parse(response.response);
     var place = res.response.venues[0];

     var template = setTemplate(marker, place, googleStreetPicsUrl);

     removeLoader();

     infoWindow.marker = marker;
     infoWindow.setContent(template);
     infoWindow.open(map, marker);
   }
  })
  .catch(function (error) {
   removeLoader();

   var template = setTemplateError(marker, googleStreetPicsUrl);

   infoWindow.marker = marker;
   infoWindow.setContent(template);
   infoWindow.open(map, marker);

  })
}

function formatNames (name) {
  // Replaces whitespaces with '+'
  name = name.replace(/\s/g, "+");
  return name;
}
