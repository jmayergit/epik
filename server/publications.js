Meteor.publish('markers', function() {
  return MarkersCollection.find();
});
