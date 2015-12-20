// MODEL: Location Class
var Results = function (data) {
  var self = this;

  // Name of location and coordinates
  this.name = ko.observable(data.name);
  this.latLng = ko.observable(data.latLng);
  this.marker = ko.observable(data.marker);
}