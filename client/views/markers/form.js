Template.markerform.events({
  'submit .add-marker-form': function(event, template) {
    event.preventDefault();

    var files = event.target[2].files;
    var title = $(event.target).find('input[name=title]').val();
    var description = $(event.target).find('input[name=description]').val();
    var serverTime = null
    var user_id = Meteor.userId();

    for( var i = 0; i < files.length; i ++) {
      var image = Images.insert(files[i], function(err, fileObj) {

      })
    }

    // console.log(image._id);
    console.log('Get file record: ');
    console.log(image.getFileRecord());
    console.log('Image: ');
    console.log(image);


    // Meteor.call("getServerTime", function(error, result) {
    //   serverTime = result
    // });
    //
    // // console.log(title);
    // // console.log(description);
    //
    // navigator.geolocation.getCurrentPosition(function(position){
    //
    //   var markerId = MarkersCollection.insert({
    //     type: "Feature",
    //     geometry: {
    //       type: "Point",
    //       coordinates: [position.coords.longitude, position.coords.latitude]
    //     },
    //     properties: {
    //       title: title,
    //       description: description,
    //       "marker-color": "#fc4353",
    //       "marker-size": "large",
    //       "marker-symbol": "pitch",
    //       url: ""
    //     },
    //     user_id: user_id,
    //     comments: [],
    //     createdAt: serverTime,
    //     //   ------ changes to countdown must reflect changes in server startup
    //     countdown: "10"
    //   })
    //
    //   // need to retroactively add show page since it is dependant on id
    //
    //   MarkersCollection.update({_id: markerId}, {$set: {'properties.url': '/epic/' + markerId}} )
    //
    // })
    //
    //
    //
    event.target.reset();
  }

})
