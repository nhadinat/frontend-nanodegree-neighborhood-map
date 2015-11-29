var initialCats = [
  {
    clickCount: 0,
    name: 'Buttons',
    imgSrc: 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
    nicknames: ['Butt-butt', 'Tons', "Buns"]
  },
  {
    clickCount: 0,
    name: 'Chewie',
    imgSrc : 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
    nicknames: ['Chewbacca']
  },
  {
    clickCount: 0,
    name: 'Pumpkin',
    imgSrc : 'http://s3.amazonaws.com/readers/2012/01/25/320pxredcat8727_1.jpg',
    nicknames: ['Pumps']
  },
  {
    clickCount: 0,
    name: 'Metoo',
    imgSrc : 'http://purrfectcatbreeds.com/wp-content/uploads/2014/06/snowshoe-cat3.jpg',
    nicknames: ['U2']
  },
  {
    clickCount: 0,
    name: 'Tootsie',
    imgSrc : 'http://4hdwallpapers.com/wp-content/uploads/2013/04/Funny-Little-Brown-Cat-1024x768.jpg',
    nicknames: ['Toot-toot']
  }
];


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