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
    placesResults.forEach(function(item){
      self.list.push( new ResultsList(item) );
    });
  };

  // Detect textInput from view
  self.filter = ko.observable("");
  // We have a connection here, now what? indexOf(filter), toLowerCase()
  self.filterChange = function () {
      console.log('ey filterChange');
    if (self.filter() !== "") {
      console.log('ey filterValue');
    }
  };
  /* COULD THIS BE THE ANSWERS!??!?!?
  var viewModel = {
    // …

    search: function(value) {
      // remove all the current beers, which removes them from the view
      viewModel.beers.removeAll();

      for(var x in beers) {
        if(beers[x].name.toLowerCase().indexOf(value.toLowerCase()) >= 0) {
          viewModel.beers.push(beers[x]);
        }
      }
    }
  };

  viewModel.query.subscribe(viewModel.search);
  */

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