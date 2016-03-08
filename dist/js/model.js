/* MODEL
  =============================================================== */

/* SuperClasses */

// ResultsModel CLASS
var ResultsModel = function(place) {
  var self = this;

  self.name = place.name;
  self.id = place.place_id;
  self.rating = place.rating;
  self.location = place.geometry.location;
  // Put API results in here in an observable,
  // so that it'll populate correctly upon API success, instead of being undefined
  self.api = ko.observable('');

  // Gather API results for this place
  getWiki(self);

  // Adds a marker to the map and pushes to the markers array.
  self.marker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.DROP,
    position: self.location
  });
  viewModel.markers.push(self.marker); // uda:no need see viewmodel

  // Bounces Markers
  self.toggleBounce = function() {
    self.marker.setAnimation(google.maps.Animation.BOUNCE);
    // Limits the bounce animation time
    setTimeout(function(){ self.marker.setAnimation(null); }, 1400);
  };

  // Infowindow on list click. Just like the marker listener, but with ko
  self.infoPop = function() {
    self.toggleBounce();
    infowindow.setContent(
        '<strong>' + self.name + '</strong>' +
        '<br>♥ : ' + self.rating + '/5' +
        '<br><em>Wikipedia Articles:</em>' +
        '<br>' + self.api()
      );
    infowindow.open(map, self.marker);
    viewModel.setPlace(self);
  };

  // Infowindow on marker click.
  self.marker.addListener('click', function() {
    self.infoPop();
  });


  // Current place recognition by computed ko
  self.isCurrent = ko.computed(function() {
      return viewModel.currentPlace() === self;
  });
};


/* Collections */
// Places Service Collection
var placesResults = [];


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
    types: ['restaurant', 'cafe']
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
  } else { // In case of errors, log them
    console.log(error_message);
  }
}