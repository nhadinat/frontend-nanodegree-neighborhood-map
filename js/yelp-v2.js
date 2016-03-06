/* Yelp API v2.0
  =============================================================== */

getYelp = function(place) {
  // Nonce generate makes a random number to prevent spammy reruns
  function nonce_generate() {
    return (Math.floor(Math.random() * 1e12).toString());
  }

  // The beginning of the url string
  var yelpUrl = 'https://api.yelp.com/v2/search?';

    // Pieces of strign to add to the yelpUrl
    var parameters = {
      term: place,
      location: '2700-2750 Alton Pkwy, Irvine, CA 92606',
      limit: '1', // I only need the one exact result
      oauth_consumer_key: 'JCbcP0_u5uV1yCNrebeyYg',
      oauth_token: 'g4L44cDIfmNMd8EL4gIyDvEACIpC7VMr',
      oauth_nonce: nonce_generate(),
      oauth_timestamp: Math.floor(Date.now()/1000),
      oauth_signature_method: 'HMAC-SHA1',
      callback: 'cb' /* This is crucial to include for jsonp implementation
        in AJAX or else the oauth-signature will be wrong.*/
    };

    var consumer_secret = 'dxq8IhhDfhvh1Gq6SN5x111b2B0',
        token_secret = '7an2putBy0h-OstuQ2P-dzesaNw';

    // Handshake process
    var encodedSignature = oauthSignature.generate(
        'GET',
        yelpUrl,
        parameters,
        consumer_secret,
        token_secret
      );
    parameters.oauth_signature = encodedSignature;

    // Putting it all together for ajax
    var settings = {
      url: yelpUrl,
      data: parameters,
      cache: true, /* This is crucial to include as well to prevent jQuery from
        adding on a cache-buster parameter "_=23489489749837", invalidating our oauth-signature */
      dataType: 'jsonp',
      jsonpCallback: 'cb',
      success: function(results) {
        // Do stuff with results
        console.log("SUCCESS!: " + results);
        place.api(results);
      },
      error: function(error) {
        // Do stuff on fail
        console.log('FAIL: ' + error);
      }
    };

  // Send AJAX query via jQuery library. Use settings from above.
  $.ajax(settings);
};