export {
  setInfowindow
}

// Displays infowindow, sets marker and template.
function setInfowindow(marker, infoWindow) {
  infoWindow.marker = marker;
  infoWindow.setContent('<div>' + marker.title + '</div>');
  infoWindow.open(map, marker);
}
