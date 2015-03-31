Meteor.methods({
  getServerTime: function() {
    var date = new Date();
    return date;
  }
});
