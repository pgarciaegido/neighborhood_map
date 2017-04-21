import ko from 'knockout';
import { markers, makeMarkerIcon } from '../map/markers';
import hotspots from '../models/hotspots';
import { setInfowindow } from '../map/infowindow';

// Knockout view model
function AppViewModel(){
  // Initial value for markers. Shown or hidden.
  this.shown = ko.observable(true);

  this.hotspots = hotspots;
  this.services = ['food', 'enterteinment', 'nightlife', 'shops'];

  this.checkboxes = ko.observableArray(['food', 'enterteinment', 'nightlife', 'shops']);

  this.checkVisibility = function (service) {
    // If checkboxes array contains service, return true (make it visible),
    // otherwise return false (hide it).
    if (this.checkboxes().indexOf(service) === -1){ return false; }
    else{ return true; }
  };


  // HIDES / SHOWS ALL =========================================================
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
}



ko.applyBindings(new AppViewModel());
