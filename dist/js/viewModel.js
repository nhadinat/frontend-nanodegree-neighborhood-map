/* VIEWMODEL
  =============================================================== */

// A Class of the ViewModel
var ViewModel = function() {
  // Save ViewModel into self
  var self = this;


  /* List and Markers */

  // Store results into a KO array
  self.list = ko.observableArray([]);
  self.markers = [];

  // Push results collection into the list and create markers
  self.createPlaces = function() {
    placesResults.forEach(function(place) {
      self.list.push( new ResultsModel(place) );
    });
    console.log(self.list());
    console.log('console.log(self.list()[0].name); = ' + self.list()[0].name);
  };

  // Sets the map on all markers in the array.
  self.setMapOnAll = function(map) {
    for (var i = 0; i < self.markers.length; i++) {
      self.markers[i].setMap(map); // allows the map to recognize the markers
    }
  };

  // Deletes all markers in the array by removing references to them.
  self.deleteMarkers = function() {
    self.setMapOnAll(null);
    self.markers = [];
  };


  /* Input Detection */

  // Detect text input from view
  self.filter = ko.observable("");

  // Update the list with a filter function
  self.filterUpdate = function(input) {
    // Clear the list and markers first
    self.list.removeAll();
    self.deleteMarkers(); // This removes the markers that don't apply
    // Cycle through list collection placesResults, then push back the filtered list
    // based on indexOf results
    for (var place in placesResults) {
      if (placesResults[place].name.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
        self.list.push( new ResultsModel(placesResults[place]));
      }
    }
  };

  // Have self.filter run filterUpdate on change
  self.filter.subscribe(self.filterUpdate);


  /* Active States */

  // Show Hide List
  self.visibleList = ko.observable(false);
  self.hideList = function() {
    self.visibleList(false);
  };
  self.showList = function() {
    self.visibleList(true);
  };

  // Create current place
  self.currentPlace = ko.observable();

  // Set current place to the clicked marker or list-item
  self.setPlace = function(clicked) {
    self.currentPlace(clicked);
    console.log('current place is ' + self.currentPlace().name);
  };


  /* Initialize */

  // Init Google Places Map
  initialize();
};

  // bind a new instance of our view model to the page
  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);