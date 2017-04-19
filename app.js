function initMap() {
  // Creates map located in Orense Street, Madrid.
  var orenseSt = {lat: 40.4492770, lng: -3.6950890};
  var mapDom = document.getElementById('map');
  var map = new google.maps.Map(mapDom, {
    center: orenseSt,
    zoom: 15
  });

  // Creates marker.
  var marker = new google.maps.Marker({
    position: orenseSt,
    map: map,
    title: 'Orense 14'
  })
  // Opens infoWindow on click
  marker.addListener('click', () => {
    infoWindow.open(map, marker)
  })

  // Creates infowindow.
  var infoWindow = new google.maps.InfoWindow({
    content: 'Mi kel'
  })
}
