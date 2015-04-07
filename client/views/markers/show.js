Template.markershow.rendered = function(){
    // var top = CommentsCollection.find({marker_id: this._id}).count();
    var baseUri = this.firstNode.baseURI;
    var reID = /[a-zA-Z0-9]{15,25}/;
    var marker_id = baseUri.match(reID)[0];

    console.log('Marker ID: ' + marker_id);
    var commentNum = CommentsCollection.find({marker_id: marker_id}).count();
    console.log('Number of comments: ' + commentNum);
    // javascript animation increment
    var spacing = commentNum * 30;
    console.log('Spacing: ' + spacing);
    $('#bottom').css('top','+=' + spacing);
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
