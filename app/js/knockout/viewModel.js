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

  // Hides food elements
  this.hideFood = function () {
    // Gets all dom elements with author-place class
    var places = document.getElementsByClassName('author-place');
    var title;
    // Loop through all places looking for the kind of place they are
    for (var i = 0; i<places.length -1; i++) {
      title = places[i].childNodes[1].innerHTML
      // if dataservice === food, remove
      if (places[i].getAttribute('dataservice') === 'food') {
        places[i].remove()
        // Loops though markers and sets them to null
        for (var j in markers) {
          if (markers[j].title === title) {
            markers[j].setMap(null)
          }
        }
      }
    }
  };

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
      console.log(markers[i].title)
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);

    this.shown(true);
  };

  this.checkboxes = ko.observableArray(['nightlife', 'food'])
}



ko.applyBindings(new AppViewModel());
