Router.configure({
  layoutTemplate: 'layout'
});

Router.onBeforeAction(function() {
  if( ! Meteor.userId()) {
    this.render('prompt');
  } else {
    this.next();
  }
});

Router.route('/map', function() {
  this.render('map');
  },{
    name: 'map'
});

Router.route('/', function () {
  this.render('prompt');
});

Router.route('/epic/:_id', function () {
  this.render('markershow', {
    data: function() {
      var marker = MarkersCollection.findOne({_id: this.params._id});
      return marker;
    }
  }, {
    name: 'epic.show'
  });
});

Router.route('/about', function() {
  this.render('about');
});



// this.redirect('/');
