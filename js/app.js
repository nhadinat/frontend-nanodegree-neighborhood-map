

  // Locations, to be in collection
  var lollicup = {lat: 33.6879372, lng:-117.8341776};
  var tokyoTable = {lat: 33.687387, lng:-117.833752};
  var theKickingCrab = {lat: 33.688507, lng:-117.832728};
  var balconyGrillBar = {lat: 33.687824, lng:-117.834221};
  var ajisenRamen = {lat: 33.688856, lng:-117.833937};

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

//Google Map API key: AIzaSyCFRFOiufsaKBMx3jmskWF1KEiEwZCudcs