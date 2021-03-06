// INITIALIZE MAP //

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
// Create markers based on the PlacesService search data collection
// This is where the markers will bind to the list collection
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      // Convert PlacesService data into markers
      createMarker(results[i]);
      // Store PlacesService into a collection
      initialResults.push(results[i]);
    }
    viewModel.createList();
  }
}



// MARKER AND INFOWINDOW //

// Marker model
function createMarker(place) {
  // Store place geolocation
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: placeLoc
  });

  // Infowindow on click. I can edit the infowindow here.
  // I can add marker buttonBounce here v^.
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name + ', ♥: ' + place.rating + '/5');
    infowindow.open(map, this);
  });
}