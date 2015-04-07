Meteor.startup( function() {

  var colors = ["#FF0000","#FF0080","#E600FF","#5D00FF","#0033FF","#00E1FF","#00E1FF","#00FF1E","#99FF00","#FFBB00"]

  Meteor.setInterval( function() {


    // markers have a finite life, removed after expiration
    var currentTime = new Date;

    MarkersCollection.find().forEach( function(marker) {
      elapsed = currentTime.getTime() - marker.createdAt.getTime();
      // console.log('Elapsed time: ' + elapsed);
      if( elapsed > 590000 ) {
        var photo_id = marker.photo_id;
        // console.log(photo_id);
        MarkersCollection.remove(marker);
        Images.remove( { _id: photo_id } )
      }else {
        var newCountdown = marker.countdown -1;
        var marker_color = colors[newCountdown];
        // console.log('Marker Color:' + marker_color);
        MarkersCollection.update(marker, {$set:{'properties.marker-color': marker_color}});
        MarkersCollection.update(marker, {$set:{countdown : newCountdown}});

      }
    })
    console.log('TASK');


  }, 60000)

});
