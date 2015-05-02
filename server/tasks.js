Meteor.startup( function() {

  console.log('clearing images..');
  var ids = []
  Images.find().forEach(function(image){
    ids.push(image._id)
  });
  var length = ids.length
  for(var i = 0; i < length; i++){
    Images.remove({_id:ids[i]});
  };
  console.log('Images cleared.');

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
        var _marker = marker
        // console.log('Marker Color:' + marker_color);
        MarkersCollection.update({_id: marker._id}, {$set:{countdown : newCountdown}}, function(error, num){
          // console.log(error);
          // console.log(num);
          if( num ){
            MarkersCollection.update({_id:_marker._id}, {$set:{'properties.marker-color': marker_color}}, function(error, num){
              // console.log(error);
              // console.log(num);
            });
          }
        });
      }
    })
    console.log('TASK');


  }, 60000)

});
