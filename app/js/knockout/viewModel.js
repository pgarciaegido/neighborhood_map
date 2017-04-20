import ko from 'knockout';
import { markers, makeMarkerIcon } from '../map/markers';
import hotspots from '../models/hotspots';
import { setInfowindow } from '../map/infowindow';

// Knockout view model
function AppViewModel(){
  // Initial value for markers. Shown or hidden.
  this.shown = ko.observable(true);
  this.clicked = ko.observable(true, this);

  var infoWindowOpen = false;

  // Models
  this.hotspots = hotspots;

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

  this.selectLocation = function(){
    var highlightedIcon = makeMarkerIcon('FFFF24');

    for (var i in markers) {
      if (markers[i].title === this.title){
        markers[i].setIcon(highlightedIcon)
        this.clicked(false, this)
      }
    }
  };
}



ko.applyBindings(new AppViewModel());
