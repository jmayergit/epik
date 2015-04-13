Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/signin', function() {
  this.render('signin');
});

Router.route('/', function () {
  this.render('map');
  },{
    name: 'home'
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
