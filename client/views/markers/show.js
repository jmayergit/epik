Template.markershow.rendered = function(){
    var baseUri = this.firstNode.baseURI;
    var reID = /[a-zA-Z0-9]{15,25}/;
    var marker_id = baseUri.match(reID)[0];
    //

    console.log(marker_id);
    Meteor.call('getCommentNum', marker_id, function(error, result){
      console.log('INSIDE METEOR METHOD CALL');
      console.log(error);
      console.log(result);
      var spacing = result * 30;
      $('#bottom').css('top','+=' + spacing);
    });

}

Template.markershow.helpers({
  comments: function() {
    return CommentsCollection.find({marker_id: this._id});
  }
});

Template.markershow.events({
  'click i.thumbs.up.icon': function(event, template){
    // console.log(event);
    // console.log(this);
    var ids = this.likes.ids;
    var _this = this;

    function clientSideCheck(id, ids){
      for( var i = 0; i < ids.length; i++){
        if( id === ids[i] ){
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
      // console.log('disallowed');
    };
  }
});
