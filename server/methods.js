Meteor.methods({
  getServerTime: function() {
    var date = new Date();
    return date;
  },

  getCommentNum: function(id){
    return CommentsCollection.find({marker_id:id}).count();
  }
});
