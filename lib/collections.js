MarkersCollection = new Meteor.Collection('markers');
CommentsCollection = new Meteor.Collection('comments');

var imageStore = new FS.Store.GridFS("images");

Images = new FS.Collection("images", {
  stores: [imageStore]
})
