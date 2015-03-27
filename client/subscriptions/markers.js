Meteor.subscribe('markers');

// when Collection.find() changes this code is run
Deps.autorun(function() {
  console.log(Tracker.active);
  console.log("grabbed " + MarkersCollection.find().count() + " markers");
  // setGeoJSON expects an array of features
  if( typeof markerLayer === 'object') {
    geoJsonArr = []
    MarkersCollection.find().forEach(function (marker) {
      geoJsonArr.push(marker);
    });
    markerLayer.setGeoJSON(geoJsonArr);
  }
})
