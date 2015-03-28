Template.markershow.helpers({
  comments: function() {
    return CommentsCollection.find({marker_id: this._id});
  }
});
