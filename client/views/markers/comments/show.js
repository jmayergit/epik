Template.commentshow.events({
  'click .remove.circle.icon': function(event, template) {

    var commentUserId = this.user_id;
    var userId = Meteor.userId();
    function clientSideCheck(commentUserId, userId){
      return commentUserId === userId;
    }
    if( clientSideCheck(commentUserId, userId) ){
      if( CommentsCollection.remove({_id: this._id}) ) {
        
        $('#bottom').animate({
         top: "-=30"
        }, 500, function() {});
      }else {
        // console.log('Access denied. Your ID is ' + Meteor.userId() + "which does not match the comment owner's ID of " + this.user_id );
      }
    }
  },

  'click .like.icon': function(event, template) {
    var _this = this;
    var ids = this.likes.ids;

    function clientSideCheck(id, ids){
      for( var i = 0; i < ids.length; i++){
        if( id === ids[i] ){
          return false;
        };
      };
      return true;
    };

    if( clientSideCheck(Meteor.userId(),ids)){
      CommentsCollection.update( {_id: this._id}, {$inc: {'likes.num':1}}, function(error, num) {
        // client doesn't allow multi
        if( num ){
          CommentsCollection.update( {_id: _this._id}, {$push: {'likes.ids': Meteor.userId()} }, function(error, num) {
            if( error ){
              // console.log("User Incremented Likes but was not added to disallowed list");
              // console.log(error);
            }
          });
        }

      });
    }
  }
})
