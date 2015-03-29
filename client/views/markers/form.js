Template.markerform.events({
  'submit .add-marker-form': function(event, template) {
    console.log('submit');
    event.preventDefault();
    var title = $(event.target).find('input[name=title]').val();
    var description = $(event.target).find('input[name=description]').val();
    // console.log(title);
    // console.log(description);

    navigator.geolocation.getCurrentPosition(function(position){
      var markerId = MarkersCollection.insert({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [position.coords.longitude, position.coords.latitude]
        },
        properties: {
          title: title,
          description: description,
          "marker-color": "#fc4353",
          "marker-size": "large",
          "marker-symbol": "pitch",
          url: ""
        },
        comments: [],
        createdAt: new Date()
      })

      // need to retroactively add show page since it is dependant on id

      MarkersCollection.update({_id: markerId}, {$set: {'properties.url': 'epik.meteor.com/epic/' + markerId}} )
    })




  }
})
