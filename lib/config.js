if(Meteor.isClient){
  Accounts.onLogin(function(attempt) {

    navigator.geolocation.getCurrentPosition(function(position){
      var user_location = [position.coords.longitude, position.coords.latitude]
      if( !Session.get('user_location') ) {
        Session.setDefault('user_location', user_location);
      }else {
        Session.set('user_location', user_location);
      }

    })
  });
}
