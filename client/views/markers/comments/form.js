Template.commentform.events({
  'submit .ui.form': function(event, template) {
    event.preventDefault();
    // can't access this.params inside events :(
    function getMarkerID() {
      var reID = /[a-zA-Z0-9]{15,25}/;
      var baseURI = event.target.baseURI;
      console.log('----base uri------');
      console.log(baseURI);
      return baseURI.match(reID)[0];
    }

    var comment = event.target[0].value
    var marker_id = getMarkerID();
    var user_id = Meteor.userId();

    var comment_id = CommentsCollection.insert({
      comment: comment,
      marker_id: marker_id,
      user_id: user_id,
      createdAt: new Date()
    })

    // MarkersCollection.update({_id: marker_id}, {$push: {'comments': comment_id}});
    // ^ might want to return to this but not needed and also would need an allow
    // edit: actually probably won't it causes an x to appear when the comment fails
    // edit2: no i'm not sure anymore
    event.target.reset();
  }
});
