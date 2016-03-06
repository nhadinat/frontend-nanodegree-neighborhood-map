// Yelp API v2.0

  /* String Reference
  'https://api.yelp.com/v2/search/?term='
  + viewModel.list[place].name +
  '&location=2700-2750 Alton Pkwy, Irvine, CA 92606&limit=1'
  */
var getYelp = function (place) {
  console.log('got yelp');
  // Auth credentials
  var auth = {
    consumerKey: "JCbcP0_u5uV1yCNrebeyYg",
    consumerSecret: "dxq8IhhDfhvh1Gq6SN5x111b2B0",
    accessToken: "g4L44cDIfmNMd8EL4gIyDvEACIpC7VMr",
    accessTokenSecret: "7an2putBy0h-OstuQ2P-dzesaNw",
  };

  // Specifications for query
  var terms = place;
  var near = '2700-2750 Alton Pkwy, Irvine, CA 92606';

  // Based on auth
  var accessor = {
    consumerSecret: auth.consumerSecret,
    tokenSecret: auth.accessTokenSecret
  };

  // Based on specs and auth
  var parameters = [];
  parameters.push(['term', terms]);
  parameters.push(['location', near]);
  parameters.push(['oauth_consumer_key', auth.consumerKey]);
  parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
  parameters.push(['oauth_token', auth.accessToken]);

  // OAuth gets this message (stuff + parameters (based on specs and auth))
  var message = {
    'action': 'http://api.yelp.com/v2/search',
    'method': 'GET',
    'parameters': parameters
  };

  // Timestamp and unique random number (nonce)
  OAuth.setTimestampAndNonce(message);

  // Signs the message and accessor (based on auth), a handshake process
  OAuth.SignatureMethod.sign(message, accessor);

  // parameterMap contains strings of specs and auth
  var parameterMap = OAuth.getParameterMap(message.parameters);
  parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature);

  // Complete the string, and handle response
  var url = OAuth.addToURL(message.action,parameterMap);
  var response = UrlFetchApp.fetch(url).getContentText();
  var responseObject = Utilities.jsonParse(response);
  console.log(responseObject);
};