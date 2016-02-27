/* VIEWMODEL
  =============================================================== */

// Google Map API key: AIzaSyCFRFOiufsaKBMx3jmskWF1KEiEwZCudcs

// A Class of the ViewModel
var ViewModel = function() {
  // Save ViewModel into self
  var self = this;

  // Store results into a KO array
  self.list = ko.observableArray([]);
  self.markers = ko.observableArray([]);

  // Push results collection into the list
  self.createPlaces = function() {
    placesResults.forEach(function(place) {
      self.list.push( new ResultsModel(place) );
      self.markers.push( new MarkersModel(place) );
    });
  };

  // Detect textInput from view
  self.filter = ko.observable("");

  // Update the list with a filter function
  self.filterUpdate = function(input) {
    // Clear the list and markers first
    self.list.removeAll();
    self.markers.removeAll();
    // Cycle through list collection placesResults, then push back the filtered list
    // based on indexOf results
    for(var place in placesResults) {
      if(placesResults[place].name.toLowerCase().indexOf(input.toLowerCase()) >= 0) {
        self.list.push( new ResultsModel(placesResults[place]));
        self.markers.push( new MarkersModel(placesResults[place]));
      }
    }
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