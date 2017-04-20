import ko from 'knockout';
import { markers } from '../map/markers';

// Knockout view model
function AppViewModel(){

  // Hides all markers
  this.hideListings = function(){
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  };

  // Shows all markers and centers the map
  this.showListings = function(){
    var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map for each marker and display the marker
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
  }
}

ko.applyBindings(new AppViewModel())
