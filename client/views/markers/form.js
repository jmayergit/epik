Template.markerform.events({
  'submit .add-marker-form': function(event, template) {

    event.preventDefault();

    var title = $(event.target).find('input[name=title]').val();
    var description = $(event.target).find('input[name=description]').val();
    var user_id = Meteor.userId();
    // set on login
    var location = Session.get('user_location');
    // arbitrarily reset coords here, probably needs elsewhere
    navigator.geolocation.getCurrentPosition(function(position){
      var user_location = [position.coords.longitude, position.coords.latitude]
      Session.set('user_location', user_location);
    })


    Meteor.call("getServerTime", function(error, result) {
      var markerId = MarkersCollection.insert({

        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: location
        },

        properties: {
          title: title,
          description: description,
          "marker-color": "#fc4353",
          "marker-size": "large",
          "marker-symbol": "pitch",
          url: ""
        },

        user_id: user_id,
        comments: [],
        createdAt: result,
        // createdAt: new Date(),
        //   ------ changes to countdown must reflect changes in server startup
        //   1. Server runs task every 60000 milsec ( 1 minute )
        //   2. Countdown expressed in minutes ( 10000 milsec)
        //   3. Countdown decremented by 1 every task ( 1 minute = 60000)
        countdown: "10"
      })

      // need to retroactively add show page url since it is dependant on id

      MarkersCollection.update({_id: markerId}, {$set: {'properties.url': '/epic/' + markerId}} )

    });



    event.target.reset();
  },


  'something for image': function(event, template) {

    // var files = event.target[2].files;
    //
    // for( var i = 0; i < files.length; i ++) {
    //   var image = Images.insert(files[i], function(err, fileObj) {
    //
    //   })
    // }
    //
    // // console.log(image._id);
    // console.log('Get file record: ');
    // console.log(image.getFileRecord());

  }

})
