/*
  var markerLollicup = new google.maps.Marker({
    position: initialLocations[i].latLng,
    map: map,
    title: initialLocations[i].title
  });
*/

var Cat = function (data) {
  var self = this;
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);

  this.title = ko.computed(function(){
    var title;
    var clicks = self.clickCount();
    if (clicks < 10) {
      title = "Lil'";
    } else if (clicks < 50) {
      title = 'Sir';
    } else if (clicks < 100) {
      title = 'Lord';
    } else if (clicks < 150) {
      title = 'Prince';
    } else if (clicks < 200) {
      title = 'King';
    } else if (clicks < 250) {
      title = 'Emperor';
    } else if (clicks < 300) {
      title = 'Ultra';
    } else if (clicks < 350) {
      title = 'MegaMecha';
    } else if (clicks < 400) {
      title = 'GigaTron';
    } else {
      title = 'Mr. Worldwide';
    }
    return title;
  });

  this.titleName = ko.computed(function(){
    return self.title() + " " + self.name();
  });
};