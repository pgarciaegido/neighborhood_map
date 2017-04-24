import ko from 'knockout';
import { markers } from '../map/markers';
import { returnHotspots, getServices } from '../models/hotspots';
import { setInfowindow } from '../map/infowindow';
import { infoWindow } from '../app';

// Knockout view model
function AppViewModel(){
  var self = this;

  // Models
  this.hotspots = returnHotspots();
  this.services = getServices();

  // Observable array to modify UI
  this.checkboxes = ko.observableArray();

  // Fill checkboxes with services.
  this.populateCheckboxes = function () {
    for (let i in self.services) {
      self.checkboxes.push(self.services[i]);
    }
  }
  this.populateCheckboxes()


  this.checkVisibility = function (service) {
    // If checkboxes array contains service, return true (make it visible),
    // otherwise return false (hide it).
    if (this.checkboxes().indexOf(service) === -1){ return false; }
    else{ return true; }
  };


  this.handleMarkers = function (data, event) {
    // Hides or show markers when clicking
    var service = event.target.getAttribute('value');
    for (let i in markers) {
      if (markers[i].service === service) {
        self.checkboxes().indexOf(service) === -1 ? markers[i].setMap(null)
                                                  : markers[i].setMap(map)
      }
    }
    // UI does not work if those dealing with checkboxes do not return true
    return true;
  };

  this.openInfowindow = function (data, event) {
    // Opens infowindow from list
    var title = event.target.getAttribute('datatitle');
    console.log(markers)
    for (let i in markers) {
      if (markers[i].title === title) {
        setInfowindow(markers[i], window.infoWindow);
      }
    }
  }


  // HIDES / SHOWS ALL =========================================================
  // Hides all markers and empty observable array
  this.hideListings = function(){
    for (var i in markers) {
      markers[i].setMap(null);
    }

    this.checkboxes.removeAll();
  };


  // Shows all markers, centers the map and populates observable array.
  this.showListings = function(){
    var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map for each marker and display the marker
    for (var i in markers) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);

    this.populateCheckboxes();
  };
}

ko.applyBindings(new AppViewModel());
