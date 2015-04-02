Meteor.startup( function() {
  Meteor.setInterval( function() {


    // markers have a finite life, removed after expiration
    var currentTime = new Date;

    MarkersCollection.find().forEach( function(marker) {
      elapsed = currentTime.getTime() - marker.createdAt.getTime();
      // console.log('Elapsed time: ' + elapsed);
      if( elapsed > 590000 ) {
        var photo_id = marker.photo_id;
        console.log(photo_id);
        MarkersCollection.remove(marker);
        Images.remove( { _id: photo_id } )
      }else {
        var newCountdown = marker.countdown;
        newCountdown -= 1;
        newCountdown.toString();
        MarkersCollection.update({_id:marker._id}, {$set:{countdown:newCountdown}})
      }
    })


  }, 60000)

});
