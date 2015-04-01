function setGeoJson() {
  var geoJson = []
  var id = Meteor.userId();
  MarkersCollection.find({'user_id': id}).forEach(function (marker) {
    geoJson.push(marker);
  })
  markerLayer.setGeoJSON(geoJson)
}

// when Collection.find() changes this code is run
Deps.autorun(function(comp) {
  console.log("grabbed " + MarkersCollection.find().count() + " markers");

  if( typeof markerLayer === 'object') {
    console.log('Markerlayer defined');
    setGeoJson();
  }else {
    console.log('Timeout');
    setTimeout( function(){
      setGeoJson();
    },
      1000
    );
  }
})
