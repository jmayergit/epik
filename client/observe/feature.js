function updateMap() {
  var geodata = [];

  MarkersCollection.find().forEach( function(marker) {
    // console.log(marker);
    geodata.push(marker);
  });

  markerLayer.setGeoJSON(geodata);
}

MarkersCollection.find().observe({
  added: function(document) {
    updateMap();
    // console.log("ADDED");
  },
  changed: function(newdoc, olddoc) {
    updateMap();
    // console.log("CHANGED");
  },
  removed: function(olddoc) {
    updateMap();
  },

});

CommentsCollection.find().observe({
  added: function(document){
    // console.log('Added');
    // console.log(document);
  },

  changed: function(document){
    // console.log('Changed');
    // console.log(document);
  },

  removed: function(document){
    // console.log('Removed');
    // console.log(document);
  }
})
