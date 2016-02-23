// VIEWMODEL
//////////////////////////////////////////////////////////////////////

// Google Map API key: AIzaSyCFRFOiufsaKBMx3jmskWF1KEiEwZCudcs

// A Class of the ViewModel
var ViewModel = function () {
  // Save ViewModel into self
  var self = this;

  // Store results into a KO array
  self.list = ko.observableArray([]);

  // Push results collection into the list
  self.createList = function() {
    console.log(placesResults);
    placesResults.forEach(function(item){
      self.list.push( new ResultsList(item) );
    });
  }

  // Set current results as the first item
  //self.currentResults = ko.observable(self.list()[0]);

  // Init Google Places Map
  initialize();
};

  // bind a new instance of our view model to the page
  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);