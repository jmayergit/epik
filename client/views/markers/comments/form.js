Template.commentform.events({
  'submit .ui.form': function(event, template) {
    event.preventDefault();
    // $('#bottom').animate({
    //   top: "+=30"
    // }, 500, function() {})
    $('#bottom').css('top','+=30');


    // can't access this.params inside events :(
    function getMarkerID() {
      var reID = /[a-zA-Z0-9]{15,25}/;
      var baseURI = event.target.baseURI;
      // console.log('----base uri------');
      // console.log(baseURI);
      return baseURI.match(reID)[0];
    }

    var comment = event.target[0].value
    var marker_id = getMarkerID();
    var user_id = Meteor.userId();

    var comment_id = CommentsCollection.insert({
      comment: comment,
      marker_id: marker_id,
      user_id: user_id,
      createdAt: new Date(),
      //     n    userId's
      //e.g. [2, ['LCKJisldkjf','aalsdkfjlaksd']]
      likes: {
        num: 0,
        ids: []
      }
    })

    // MarkersCollection.update({_id: marker_id}, {$push: {'comments': comment_id}});
    // ^ might want to return to this but not needed and also would need an allow
    // edit: actually probably won't it causes an x to appear when the comment fails
    // edit2: no i'm not sure anymore
    if( Session.get('commentNum') ){
      var commentNum = Session.get('commentNum');
      var newNum = commentNum + 1;
      Session.set('commentNum', newNum);
    }else{
      Session.set('commentNum', 1);
    }
    event.target.reset();
  }
});
