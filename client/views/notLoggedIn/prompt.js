Template.prompt.events({
  'click #demo': function() {
    Meteor.loginWithPassword('demo@account.io', 'password', function(err){
      if( err ){
        alert('try again');
      };
    })
  }
})
