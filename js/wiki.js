/* MediaWiki API
  =============================================================== */
var wikiUrl;

// Select target for error message
var $wikiElem = $('.results');

var getWiki = function(place) {
  console.log('getWiki: ' + place);

  placeName = place.name;

  // MediaWiki URL
  wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' +
    placeName + '&format=json&callback=wikicallback';

  // AJAX Request
  $.ajax({
    url: wikiUrl,
    dataType: 'jsonp',
    success: function (response) {
      console.log('success: ' + response + webUrl.length);

      var articles = response[1];
      var webUrl = response[3];

      if (webUrl.length > 0) {
        place.api("<p>" + "<a href='" + webUrl[0] +
          "'>" + articles[0] + "</a></p>");
      } else {
        place.api('No Wikipedia Articles');
      }

    },
    error: function (data, status, error) {
      console.log(error);
      $wikiElem.append('<p>MediaWiki Could Not Be Loaded</p>');
    }
  });
};