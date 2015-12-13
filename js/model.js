// Make a Location Class
var Location = function (data) {
  var self = this;

  // For each Location in the collection, create markers as observables
  this.marker = new google.maps.Marker({
    position: self.latLng,
    map: map,
    title: self.title
  });