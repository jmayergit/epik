MarkersCollection.allow({
  insert: function(userID, doc) {
    return true;
  }
})

CommentsCollection.allow({
  insert: function(userID, doc) {
    return true;
  },

  remove: function(userID, doc) {
    return true;
  }
});

CommentsCollection.deny({
  remove: function(userID, doc) {
    return userID != doc.user_id;
  }
});
