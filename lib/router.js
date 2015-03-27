Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('map');
});

Router.route('/epic/:_id', function () {
  this.render('markershow', {
    data: function() {
      var marker = MarkersCollection.findOne({_id: this.params._id});
      return marker;
    }
  })
});




// this.redirect('/');
