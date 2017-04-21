import ajax from 'es-ajax';
import secret from './secret';
import { returnHotspots } from '../models/hotspots';

module.exports = {
  ajaxFoursquare
}

var hotspots = returnHotspots();

function ajaxFoursquare(lat, lng){
  var foursquareUrl = `https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}
                       &client_id=${secret.client_id}&client_secret=${secret.client_secret}
                       &v=20170421&limit=10`;

   ajax(foursquareUrl)
   .get()
   .then(function (response) {
     let res = JSON.parse(response.response);
     return res.response.venues[0];
   })
}
