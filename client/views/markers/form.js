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
        },
        comments: [],
        createdAt: new Date()
      })
    })


  }
})
