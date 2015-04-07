Template.markershow.helpers({
  comments: function() {
    return CommentsCollection.find({marker_id: this._id});
  }
});

Template.markershow.events({
  'click i.thumbs.up.icon': function(event, template){
    // console.log(event);
    // console.log(this);
    var id = Meteor.userId();
    var ids = this.likes.ids;
    var _this = this;

    function clientSideCheck(id, ids){
      for( var i = 0; i < ids.length; i++){
        console.log(id);
        console.log(ids[i]);
        if( id === ids[i] ){
          console.log('false');
          return false;
        };
      };
      return true;
    };

    if( clientSideCheck(id, ids) ){
      MarkersCollection.update({_id: this._id}, {$inc: {'likes.num':1}}, function(error, num){
        if( num ){
          MarkersCollection.update({_id: _this._id}, {$push: {'likes.ids': Meteor.userId()}}, function(error, num){
            // userId not added to disallow list
          })
        }
      });
    }else{
      console.log('disallowed');
    };
  }
});
