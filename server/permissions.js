MarkersCollection.allow({
  insert: function(userID, doc) {
    return true;
  },

  update: function(userID, doc) {
    var disallowed = doc.likes.ids;
    for( var i = 0; i < disallowed.length; i++){
      if( userID === disallowed[i]){
        return false;
      };
    };
    return true;
  }
})

CommentsCollection.allow({
  insert: function(userID, doc) {
    return true;
  },

  remove: function(userID, doc) {
    return userID === doc.user_id;
  },

  update: function(userID, doc) {
    var disallowed = doc.likes.ids;
    for( var i = 0; i < disallowed.length; i++) {
      if( userID === disallowed[i] ) {
        return false;
      }
    }

    return true;
  }
});

Images.allow({
  insert: function(userID, doc) {
    return true;
  },

  update: function(userID, doc) {
    return true;
  },

  download: function(userID, doc) {
    return true;
  }
});
