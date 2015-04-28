Template.layout.helpers({
  dummy: function(){
    return Meteor.userId() == "EGy2KuTmz7gn9bx5g";
  };
});

Template.layout.events({
  'click .simulate': function(){
    Meteor.call("simulateFriends", function(error, result){
      console.log('Error: ' + error);
      console.log('Result: ' + result);
    });
  };
})
