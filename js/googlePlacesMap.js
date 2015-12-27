var map;
var infowindow;

function initialize() {
  var lollicup = new google.maps.LatLng(33.6879372, -117.8341776);

  map = new google.maps.Map(document.getElementById('map'), {
    center: lollicup,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });

  infowindow = new google.maps.InfoWindow();

  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: lollicup,
    radius: 250,
    types: ['restaurant']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}