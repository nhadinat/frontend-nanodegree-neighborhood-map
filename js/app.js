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

//Google Map API key: AIzaSyCFRFOiufsaKBMx3jmskWF1KEiEwZCudcs