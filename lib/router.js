Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('map');
});

Router.route('/epic/:_id', function () {
  this.render('markershow', {
    data: function() {
      console.log('In epic show route');
      var marker = MarkersCollection.findOne({_id: this.params._id});
      console.log(marker);
      return marker;
    }
  })
});




// this.redirect('/');
