/* Foursquare API
  =============================================================== */

var foursquareUrl;

var client_id = 'WPY0O20U3TSFLSCYNXIZCRL435XRJ0VQB4BZB5255S1NZ00B';
var client_secret = '4D2JN3VMOBXENOBI5N11L53RJQTWASBEAULNCH335WRE35U0';

var getFour = function(place) {
  console.log('getFour: ' + place.name);

  // Foursquare URL string
  foursquareUrl = 'https://api.foursquare.com/v2/venues/search' +
    client_id +
    client_secret +
    '&v=20131016' +
    '&m=foursquare'
    '&ll=' + place.location.lat() + ',' + place.location.lng() +
    '&query=' + place.name;

  // AJAX Request
  $.ajax({
    url: foursquareUrl,
    dataType: 'jsonp',
    success: function (response) {
      console.log('success: ' + response);
      place.api(response);
    },
    // Error feedback
    error: function (data, status, error) {
      console.log(error);
      $('.results').append('<p>MediaWiki Could Not Be Loaded</p>');
    }
  });
};