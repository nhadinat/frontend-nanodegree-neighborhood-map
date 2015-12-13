// Model: Location Class
var Location = function (data) {
  var self = this;

  // Name of location and coordinates
  this.title = ko.observable(data.name);
  this.latLng = ko.observable(data.latLng);

  // For each Location in the collection, create markers as observables
  this.marker = new google.maps.Marker({
    position: self.latLng,
    map: map,
    title: self.title
  });