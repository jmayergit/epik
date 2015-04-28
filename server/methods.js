Meteor.methods({
  getServerTime: function() {
    var date = new Date();
    return date;
  },

  getCommentNum: function(id){
    return CommentsCollection.find({marker_id:id}).count();
  },

  simulateFriends: function(){
    var date = new Date();
    var photo_id = Images.findOne()._id;
    var markerId = MarkersCollection.insert({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [-122.4194200,37.7749300]
      },
      properties: {
        title: "Coding",
        description: "City Hall",
        "marker-color": "#fc4353",
        "marker-size": "large",
        "marker-symbol": "pitch",
        url: "",
      },
      user_id: "",
      createdAt: date,
      photo_id: photo_id,
      countdown: 10,
      likes: {
        num: 7,
        ids: []
      }
    });

    MarkersCollection.update({_id: markerId}, {$set: {'properties.url': '/epic/' + markerId }} );
    return true;
  }
});
