Template.markercommentsindex.helpers({
  comments: function() {
    var href = window.location.href;
    var reID = /[a-zA-Z0-9]{15,25}/;
    var marker_id = href.match(reID)[0];
    return CommentsCollection.find({marker_id: marker_id})
  }
});
