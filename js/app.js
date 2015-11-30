var map;
function initMap() {
  var lollicup = {lat: 33.6879372, lng:-117.8341776};
  var parkingStructure = {lat: 33.688131,  lng:-117.834479};

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.688428, lng: -117.833741},
    zoom: 18
  });

  var markerLollicup = new google.maps.Marker({
    position: lollicup,
    map: map,
    title: 'Lollicup'
  });

  var markerParkingStructure = new google.maps.Marker({
    position: parkingStructure,
    map: map,
    title: 'DJ Parking Structure'
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