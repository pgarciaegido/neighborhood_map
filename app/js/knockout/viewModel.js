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
    self.services.forEach(function (service) {
      self.checkboxes.push(service);
    });
  };
  this.populateCheckboxes();

  this.checkVisibility = function (service) {
    // If checkboxes array contains service, return true (make it visible),
    // otherwise return false (hide it).
    if (this.checkboxes().indexOf(service) === -1){ return false; }
    else{ return true; }
  };


  this.handleMarkers = function (data, event) {
    // Hides or show markers when clicking
    var service = event.target.getAttribute('value');
    markers.forEach(function (marker) {
      if (marker.service === service) {
        self.checkboxes().indexOf(service) === -1 ? marker.setMap(null)
                                                  : marker.setMap(map);
      }
    });
    // UI does not work if those dealing with checkboxes do not return true
    return true;
  };

  this.openInfowindow = function (data, event) {
    // Opens infowindow from list
    var title = event.target.getAttribute('datatitle');
    markers.forEach(function (marker) {
      if (marker.title === title) {
        setInfowindow(marker, window.infoWindow);
      }
    });
  };


  // HIDES / SHOWS ALL
  // Hides all markers and empty observable array
  this.hideListings = function(){
    markers.forEach(function (marker) {
      marker.setMap(null);
    });

    this.checkboxes.removeAll();
  };


  // Shows all markers, centers the map and populates observable array.
  this.showListings = function(){
    var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map for each marker and display the marker
    markers.forEach(function (marker) {
      marker.setMap(map);
      bounds.extend(marker.position);
    });

    map.fitBounds(bounds);
    this.populateCheckboxes();
  };

  // Open/close mobile menu.
  this.toggleMenu = function(){
    var interaction = document.getElementById('interaction');
    interaction.classList.toggle('interaction_mobile_on');
  };
}

ko.applyBindings(new AppViewModel());
