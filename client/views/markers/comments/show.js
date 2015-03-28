Template.commentshow.events({
  'click .remove.circle.icon': function(event, template) {
    if( CommentsCollection.remove({_id: this._id}) ) {

    }else {
      console.log('Access denied. Your ID is ' + Meteor.userI + "which does not match the comment owner's ID of " + this.user_id );
    }
  }
})
