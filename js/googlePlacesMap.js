var map;
var infowindow;

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

// Create markers based on the PlacesService search data collection
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

// Marker model
function createMarker(place) {
  // Store place geolocation
  var placeLoc = place.geometry.location;
  console.dir(place);
  var marker = new google.maps.Marker({
    map: map,
    position: placeLoc
  });

  // Infowindow on click
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name + ', ♥: ' + place.rating + '/5');
    infowindow.open(map, this);
  });
}

/*
// Autocomplete bounds
var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(33.687422, -117.835076),
  new google.maps.LatLng(33.689502, -117.832276)
);
// Store into options
var options = {
  bounds: defaultBounds
};
// Get the input for the autocomplete search box
var input = document.getElementById('search-field');
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); // ERR: can't read controls of undefined
// Create the autocomplete object
var autocomplete = new google.maps.places.Autocomplete(input, options);

*/





