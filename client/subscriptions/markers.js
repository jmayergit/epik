Meteor.subscribe('markers');

// when Collection.find() changes this code is run
Deps.autorun(function() {
  console.log(Tracker.active);
  console.log("grabbed " + MarkersCollection.find().count() + " markers");
  // setGeoJSON expects an array of features
  if( typeof markerLayer === 'object') {
    var geoJsonArr = []
    MarkersCollection.find().forEach(function (marker) {
      geoJsonArr.push(marker);
    });
    markerLayer.setGeoJSON(geoJsonArr);
  }else {
    /// have to set timeout :( otherwise don't always load
    setTimeout( function(){
      var geoJsonArr = []
      MarkersCollection.find().forEach(function (marker) {
        geoJsonArr.push(marker);
      });
      markerLayer.setGeoJSON(geoJsonArr);
    },
      1000
    );
  }
})
