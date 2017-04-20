import ko from 'knockout';
import { markers, makeMarkerIcon } from '../map/markers';
import hotspots from '../models/hotspots';
import { setInfowindow } from '../map/infowindow';

// Knockout view model
function AppViewModel(){
  // Initial value for markers. Shown or hidden.
  this.shown = ko.observable(true);

  // Models
  this.hotspots = hotspots;

  this.hotspotsFood = function () {
    var food = []
    for (var i in this.hotspots) {
      if (this.hotspots[i].service === 'food') {
        food.push(this.hotspots[i])
      }
    }
    return food;
  }

  // Hides all markers
  this.hideListings = function(){
    for (var i in markers) {
      markers[i].setMap(null);
    }

    this.shown(false)
  };

  // Shows all markers and centers the map
  this.showListings = function(){
    var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map for each marker and display the marker
    for (var i in markers) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);

    this.shown(true);
  };

  this.checkboxes = ko.observableArray(['nightlife', 'food'])
}



ko.applyBindings(new AppViewModel());
