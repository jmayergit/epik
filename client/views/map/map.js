Template.map.onRendered(function(){
  
});

Template.map.events({
  'click button': function(){
    Meteor.call("simulateFriends", function(error, result){
      console.log('Error: ' + error);
      console.log('Result: ' + result);
    });
  }
})
