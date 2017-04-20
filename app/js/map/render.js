module.exports = function renderMap () {
  // Creates map located in Orense Street, Madrid.
  var orenseSt = {lat: 40.4492770, lng: -3.6950890};
  var mapDom = document.getElementById('map');

  // Map is a global variable.
  window.map = new google.maps.Map(mapDom, {
    center: orenseSt,
    // Removes the styling options on top left corner.
    mapTypeControl: false,
    zoom: 15
  });

  return map;
}
