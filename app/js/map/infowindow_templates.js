module.exports = {
  setTemplate,
  setTemplateError
}

function setTemplate (marker, place, imgUrl) {
  // If there is no url or phone.
  if (!place.url)
    place.url = 'Website not available';

  if (!place.contact.formattedPhone)
    place.contact.formattedPhone = 'Phone number not available';

  return `
    <h3 class="title">${marker.title}</h3>
    <img class="iw-image" src="${imgUrl}" />
    <p class="iw-phone">${place.contact.formattedPhone}</p>
    <p class="iw-web">${place.url}</p>
    <h6>Provided by Foursquare</h6>
  `;
}

// Template appended when catching api error
function setTemplateError (marker, imgUrl) {
  return `
  <h3 class="title">${marker.title}</h3>
  <img class="iw-image" src="${imgUrl}" />
  <p class="iw-error">There is been an error. Most likely this place has not been found by Foursquare.</p>
  `;
}
