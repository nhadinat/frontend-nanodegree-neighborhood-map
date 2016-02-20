"use strict";
// VIEWMODEL: Map and Markers
// Google Map API key: AIzaSyCFRFOiufsaKBMx3jmskWF1KEiEwZCudcs

var ViewModel = function () {
  // Save ViewModel into self
  var self = this;

  // Store results into a KO array
  self.resultsList = ko.observableArray([]);

  // Push results collection into the list
  initialResults.forEach(function(resultsItem){
    self.resultsList.push( new Results(resultsItem) );
  });

  // Set current results as the first item
  self.currentResults = ko.observable(self.resultsList()[0]);

  // Init Google Places Map
  initialize();
};

ko.applyBindings(new ViewModel());