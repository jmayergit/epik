Router.configure({
  layoutTemplate: 'layout'
});

// Router.onBeforeAction(function() {
//   if(! Meteor.userId() ) {
//     this.redirect('/signin');
//     this.next();
//   }else {
//     this.next();
//   }
// });

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

  // this.render('markercommentsindex', {
  //   to: 'comments',
  //   data: function() { return CommentsCollection.find({ marker_id: this._id })}
  // })
});

Router.route('/images', function() {
  this.render('markerimageshow');
})



// this.redirect('/');
