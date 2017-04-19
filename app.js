// Models
var models = [
  {
    location: { lat: 40.4492770, lng: -3.6950890 },
    title: 'Orense 14',
    description: 'Home'
  },
  {
    location: { lat: 40.453054, lng: -3.688359 },
    title: 'Santiago Bernabeu Stadium',
    description: 'Real Madrid Football Stadium'
  },
  {
    location: { lat: 40.446776, lng: -3.693649 },
    title: 'El Corte Inglés',
    description: 'Shopping center'
  },
  {
    location: { lat: 40.450082, lng: -3.691642 },
    title: 'New York Burger',
    description: 'Best burgers in town!'
  },
  {
    location: { lat: 40.448939, lng: -3.696191 },
    title: 'Taxi a Manhatan',
    description: 'Cool place to have a few drinks'
  }
]

function initMap() {
  // Renders map and keeps object in 'map' variable
  var map = renderMap();

  // Creates infowindow.
  var infoWindow = new google.maps.InfoWindow();

  // Set markers.
  setMarkers(map, infoWindow);
}

function renderMap () {
  // Creates map located in Orense Street, Madrid.
  var orenseSt = {lat: 40.4492770, lng: -3.6950890};
  var mapDom = document.getElementById('map');

  var map = new google.maps.Map(mapDom, {
    center: orenseSt,
    // Removes the styling options on top left corner.
    mapTypeControl: false,
    zoom: 15
  });

  return map;
}

function setMarkers (map, infoWindow) {
  // Creates marker.
  for (let i = 0; i < models.length; i++) {
    var marker = new google.maps.Marker({
      position: models[i].location,
      map: map,
      title: models[i].title,
      id: i
    });

    // Event listener to display infowindow. Watch out: if arrow function, this
    // becomes 'window'.
    marker.addListener('click', function () {
      setInfowindow(this, infoWindow);
    });
  }
}

// Displays infowindow, sets marker and template.
function setInfowindow(marker, infoWindow) {
  infoWindow.marker = marker;
  infoWindow.setContent('<div>' + marker.title + '</div>');
  infoWindow.open(map, marker);
}
