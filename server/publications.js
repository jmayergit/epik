Meteor.publish('markers', function() {
  return MarkersCollection.find();
});

Meteor.publish('comments', function() {
  return CommentsCollection.find();
});
