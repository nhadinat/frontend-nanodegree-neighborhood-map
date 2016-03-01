/* MODEL
  =============================================================== */


/* SuperClasses */

// ResultsModel CLASS
var ResultsModel = function(place) {
  var self = this;
  self.name = place.name;
  self.id = place.place_id;
  // Current place recognition by computed ko
  self.isCurrent = ko.computed(function() {
      return viewModel.currentPlace() === self;
  });

  //Adds a marker to the map and pushes to the array.
  var marker = new google.maps.Marker({
    position: place.geometry.location,
    map: map
  });
  viewModel.markers.push(marker);
  // Infowindow on click. ADD marker buttonBounce here v^.
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name + ', ♥: ' + place.rating + '/5');
    infowindow.open(map, this);
    viewModel.markerSetPlace(self);
  });
};


/* Collections */

// Places Service Collection
var placesResults = [];
// Yelp API Collection
var yelpResults = [];


/* Google Places Map */

var map; // google map constructor
var infowindow; // google marker's pop-up infowindow constructor

function initialize() {
  // Store location where I'll center the map
  var lollicup = new google.maps.LatLng(33.6879372, -117.8341776);

  // Create the map, set to Hybrid view
  map = new google.maps.Map(document.getElementById('map'), {
    center: lollicup,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  // The info that pops up with the tapered stem
  infowindow = new google.maps.InfoWindow();

  // PlacesService collects info from a radius by type
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: lollicup,
    radius: 250,
    types: ['restaurant']
  }, callback);
}
// Collect PlacesService data on callback
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      // Store PlacesService into a collection
      placesResults.push(results[i]);
    }
    viewModel.createPlaces();
  }
}