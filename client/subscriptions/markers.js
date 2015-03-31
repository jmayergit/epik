Meteor.subscribe('markers');

// when Collection.find() changes this code is run
Deps.autorun(function(comp) {
  // console.log(Tracker.active);
  console.log("grabbed " + MarkersCollection.find().count() + " markers");
  if( comp.firstRun ) {
    console.log('first run');
  }
  // setGeoJSON expects an array of features
  if( typeof markerLayer === 'object') {
    console.log('Markerlayer defined');
    var geoJsonArr = []
    MarkersCollection.find().forEach(function (marker) {
      geoJsonArr.push(marker);
    });
    markerLayer.setGeoJSON(geoJsonArr);
  }else {
    console.log('Timeout enacted');
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

// Deps.autorun(function(comp) {
//   if( comp.firstRun ) {
//     setTimeout( function() {
//       var geoJsonArr = []
//       MarkersCollection.find().forEach(function (marker) {
//         geoJsonArr.push(marker);
//       });
//       markerLayer.setGeoJSON(geoJsonArr);
//     }, 1000);
//   }else {
//     var geoJsonArr = []
//     MarkersCollection.find().forEach(function (marker) {
//       geoJsonArr.push(marker);
//     });
//     markerLayer.setGeoJSON(geoJsonArr);
//   }
// });
