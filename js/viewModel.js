// VIEWMODEL: Map and Markers
// Google Map API key: AIzaSyCFRFOiufsaKBMx3jmskWF1KEiEwZCudcs

var ViewModel = function () {
  var self = this;

  // Declare and initiate the fullscreen Google map
  var map;
  function initMap() {
    // Center map on location and zoom to 18th degree
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 33.688428, lng: -117.833741},
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.HYBRID
    });

    // For each Location in the collection,
    // create markers as observables
    /*
    this.locList = ko.observableArray([]);

    initialLocs.forEach(function(locItem){
      self.locList.push new google.maps.Marker({
        position: self.latLng,
        map: map,
        title: self.title
      });
    });

    this.marker = new google.maps.Marker({
      position: self.latLng,
      map: map,
      title: self.title
    });
    */
  }

};

ko.applyBindings(new ViewModel());