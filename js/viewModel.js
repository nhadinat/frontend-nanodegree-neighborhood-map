// VIEWMODEL
//////////////////////////////////////////////////////////////////////

// Google Map API key: AIzaSyCFRFOiufsaKBMx3jmskWF1KEiEwZCudcs

// A Class of the ViewModel
var ViewModel = function () {
  // Save ViewModel into self
  var self = this;
  var list;

  // Store results into a KO array
  self.list = ko.observableArray([]);

  // Push results collection into the list
  self.createList = function() {
    placesResults.forEach(function(item){
      self.list.push( new ResultsList(item) );
    });
  };

  // Detect textInput from view
  self.filter = ko.observable("");

  // Update the list with a filter function
  self.filterUpdate = function(value) {
    // Clear the list first
    self.list.removeAll();

    // Cycle through list collection placesResults, than push back the filtered list
    for(var x in placesResults) {
      if(placesResults[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
        self.list.push( new ResultsList(placesResults[x]));
      }
    }
  };

  // Have self.filter run filterUpdate on change
  self.filter.subscribe(self.filterUpdate);


  // Show Hide List
  self.showList = ko.observable(true);

  // Set current results as the first item
  //self.currentResults = ko.observable(self.list()[0]);

  // Init Google Places Map
  initialize();
};

  // bind a new instance of our view model to the page
  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);