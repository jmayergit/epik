// markers have a finite life, removed after expiration

Meteor.startup( function() {
  Meteor.setInterval( function() {
    var currentTime = new Date;
    MarkersCollection.find().forEach( function(marker) {
      elapsed = currentTime.getTime() - marker.createdAt.getTime();
      // console.log('Elapsed time: ' + elapsed);
      if( elapsed > 120000 ) {
        MarkersCollection.remove(marker);
      }else {
        console.log("marker's countdown: " + marker.countdown);
        var count = marker.countdown;
        count -= 10;
        count.toString();
        MarkersCollection.update({_id:marker._id}, {$set:{countdown:count}})
      }
    })
  }, 10000)

});
