// MODEL: Location Class
var Location = function (data) {
  var self = this;

  // Name of location and coordinates
  this.title = ko.observable(data.name);
  this.latLng = ko.observable(data.latLng);
  this.marker = ko.observable(data.latLng);
  }