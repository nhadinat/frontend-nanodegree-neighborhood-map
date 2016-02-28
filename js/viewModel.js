/* VIEWMODEL
  =============================================================== */

// Google Map API key: AIzaSyCFRFOiufsaKBMx3jmskWF1KEiEwZCudcs

// A Class of the ViewModel
var ViewModel = function() {
  // Save ViewModel into self
  var self = this;

  // Store results into a KO array
  self.list = ko.observableArray([]);
  self.markers = [];

  // Push results collection into the list and create markers
  self.createPlaces = function() {
    placesResults.forEach(function(place) {
      self.list.push( new ResultsModel(place) );
      //self.markers.push( new MarkersModel(place) );
      //addMarker(place);
    });
  };

  // Sets the map on all markers in the array.
  self.setMapOnAll = function(map) {
    for (var i = 0; i < self.markers.length; i++) {
      self.markers[i].setMap(map);
      console.log('viewModel.setMapOnAll');
    }
  };

  // Deletes all markers in the array by removing references to them.
  self.deleteMarkers = function() {
    self.setMapOnAll(null);
    self.markers = [];
    console.log('viewModel.deleteMarkers');
  };


  // Detect textInput from view
  self.filter = ko.observable("");

  // Update the list with a filter function
  self.filterUpdate = function(input) {
    // Clear the list and markers first
    self.list.removeAll();
    self.deleteMarkers(); // This removes the markers that don't apply
    // Cycle through list collection placesResults, then push back the filtered list
    // based on indexOf results
    for(var place in placesResults) {
      if(placesResults[place].name.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
        self.list.push( new ResultsModel(placesResults[place]));
      }
    }
    console.log(viewModel.markers);
  };



  // Have self.filter run filterUpdate on change
  self.filter.subscribe(self.filterUpdate);


  // Show Hide List
  self.showList = ko.observable(true);

  // Set current results as the first item
  //self.currentResults = ko.observable(self.places()[0]);

  // Init Google Places Map
  initialize();
};

  // bind a new instance of our view model to the page
  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);