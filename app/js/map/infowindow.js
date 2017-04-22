import ajax from 'es-ajax';
import secret from '../ajax/secret';

export {
  setInfowindow
}

// Displays infowindow, sets marker and template.
function setInfowindow(marker, infoWindow) {
  setLoader();

  var lat = marker.internalPosition.lat();
  var lng = marker.internalPosition.lng();

  var foursquareUrl = `https://api.foursquare.com/v2/venues/search?ll=${lat},${lng}
                       &client_id=${secret.client_id}&client_secret=${secret.client_secret}
                       &v=20170421&limit=10`;

   // Ajax call to Foursquare URL. Handle with promises.
   ajax(foursquareUrl)
   .get()
   .then(function (response) {
     console.log(response)
     // If everything went alright
     if (response.status === 200){
       let res = JSON.parse(response.response);
       var place = res.response.venues[0];

       var template = setTemplate(marker, place);

       removeLoader();

       infoWindow.marker = marker;
       infoWindow.setContent(template);
       infoWindow.open(map, marker);
     }
   })
   .catch(function (error) {
     removeLoader();

     var template = setTemplateError(marker)

     infoWindow.marker = marker;
     infoWindow.setContent(template);
     infoWindow.open(map, marker);

   })
}

function setLoader (template) {
  var body = document.getElementById('body');
  var loaderBg = document.createElement('div');
  var loader = document.createElement('div');

  loaderBg.id = 'loader-bg';
  loader.id = 'loader';

  var screenSize = getScreenSize();

  loader.style.top = screenSize[0] / 3 + 'px';
  loader.style.left = screenSize[1] / 2 + 'px';

  body.appendChild(loaderBg);
  body.appendChild(loader);
}

function removeLoader () {
  document.getElementById('loader').remove();
  document.getElementById('loader-bg').remove();
}

// Returns screen size in an array, to place the loader properly in the center
function getScreenSize () {
  var arr = [];
  arr.push(window.innerHeight)
  arr.push(window.innerWidth)

  return arr;
}

function setTemplate (marker, place) {

  if (!place.url)
    place.url = 'Website not available';

  if (!place.contact.formattedPhone)
    place.contact.formattedPhone = 'Phone number not available';

  return `
    <h3 class="title">${marker.title}</h3>
    <p class="iw-web">${place.contact.formattedPhone}</p>
    <p class="iw-web">${place.url}</p>
  `;
}

function setTemplateError (marker) {
  return `
  <h3 class="title">${marker.title}</h3>
  <p class="iw-web">There is been an error connecting with Foursquare api. Try again later.</p>
  `
}
