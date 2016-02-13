// MODEL: Search Results Class
var Results = function (data) {
  var self = this;

  // Name of location and coordinates
  self.name = ko.observable(data.name);
  self.latLng = ko.observable(data.latLng);
  self.marker = ko.observable(data.marker);
}