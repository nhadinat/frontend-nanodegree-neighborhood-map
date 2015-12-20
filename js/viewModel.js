// VIEWMODEL: Map and Markers
// Google Map API key: AIzaSyCFRFOiufsaKBMx3jmskWF1KEiEwZCudcs

var ViewModel = function () {
  // Save ViewModel into self
  var self = this;

  // Store results into a KO array
  this.resultsList = ko.observableArray([]);

  // Push results collection into the list
  initialResults.forEach(function(resultsItem){
    self.resultsList.push( new Results(resultsItem) );
  });

  // Set curent results as the first item
  this.currentResults = ko.observable(this.resultsList()[0]);

  // Init Google Places Map
  initialize();
};

ko.applyBindings(new ViewModel());