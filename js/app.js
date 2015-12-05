// Declare and initiate the fullscreen Google map
var map;
function initMap() {

  // Locations, to be in collection
  var lollicup = {lat: 33.6879372, lng:-117.8341776};
  var tokyoTable = {lat: 33.687387, lng:-117.833752};
  var theKickingCrab = {lat: 33.688507, lng:-117.832728};
  var balconyGrillBar = {lat: 33.687824, lng:-117.834221};
  var ajisenRamen = {lat: 33.688856, lng:-117.833937};

  // Center map on location and zoom to 18th degree
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.688428, lng: -117.833741},
    zoom: 18
  });

  var markerLollicup = new google.maps.Marker({
    position: lollicup,
    map: map,
    title: 'Lollicup'
  });

  var markerBalconyGrillBar = new google.maps.Marker({
    position: balconyGrillBar,
    map: map,
    title: 'Balcony Grill & Bar'
  });

  var markerTokyoTable = new google.maps.Marker({
    position: tokyoTable,
    map: map,
    title: 'Tokyo Table'
  });

  var markerTheKickinCrab = new google.maps.Marker({
    position: theKickingCrab,
    map: map,
    title: 'The Kicking Crab'
  });

  var markerAjisenRamen = new google.maps.Marker({
    position: ajisenRamen,
    map: map,
    title: 'Ajisen Ramen'
  });
}

/* Cat reference
var ViewModel = function () {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem){
    self.catList.push( new Cat(catItem) );
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  };

};

ko.applyBindings(new ViewModel());
*/

//Google Map API key: AIzaSyCFRFOiufsaKBMx3jmskWF1KEiEwZCudcs