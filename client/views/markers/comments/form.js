Template.commentform.events({
  'submit .ui.form': function(event, template) {
    event.preventDefault();
    // $('#bottom').animate({
    //   top: "+=30"
    // }, 500, function() {})
    // $('#bottom').css('top','+=30');


    // can't access this.params inside events :(
    function getMarkerID() {
      var reID = /[a-zA-Z0-9]{15,25}/;
      var baseURI = event.target.baseURI;
      return baseURI.match(reID)[0];
    }

    var comment = event.target[0].value
    var marker_id = getMarkerID();
    var user_id = Meteor.userId();
    var email = Meteor.users.findOne().emails[0].address;
    var re = /[a-zA-Z0-9]+/
    var username = email.match(re)[0];

    var comment_id = CommentsCollection.insert({
      comment: comment,
      marker_id: marker_id,
      user_id: user_id,
      createdAt: new Date(),
      //     n    userId's
      //e.g. [2, ['LCKJisldkjf','aalsdkfjlaksd']]
      likes: {
        num: 0,
        ids: []
      },

      username: username
    })


    event.target.reset();

    setTimeout(function(){
      comments = ['I know right!?', 'Hahah XD', 'Wow what a great picture', 'This is awesome', 'How is this possible?', 'According to the map we\'re like right next to each other', 'Your last photo was better ;)', 'I was there the other day!', 'Call me maybe?', 'Nice to see you on here.. finally.'];
      usernames = ['Marissa', 'Heather', 'Kelly'];
      commentIndex = Math.floor( (Math.random() * 10) );
      usernameIndex = Math.floor( (Math.random() * 3) );
      CommentsCollection.insert({
        comment: comments[commentIndex],
        marker_id: marker_id,
        user_id: user_id,
        createdAt: new Date(),
        //     n    userId's
        //e.g. [2, ['LCKJisldkjf','aalsdkfjlaksd']]
        likes: {
          num: 0,
          ids: []
        },

        username: usernames[usernameIndex]
      })
    }, 2000)

    setTimeout(function(){
      comments = ['I know right!?', 'Hahah XD', 'Wow what a great picture', 'This is awesome', 'How is this possible?', 'According to the map we\'re like right next to each other', 'Your last photo was better ;)', 'I was there the other day!', 'Call me maybe?', 'Nice to see you on here.. finally.'];
      usernames = ['Marissa', 'Heather', 'Kelly'];
      commentIndex = Math.floor( (Math.random() * 10) );
      usernameIndex = Math.floor( (Math.random() * 3) );
      CommentsCollection.insert({
        comment: comments[commentIndex],
        marker_id: marker_id,
        user_id: user_id,
        createdAt: new Date(),
        //     n    userId's
        //e.g. [2, ['LCKJisldkjf','aalsdkfjlaksd']]
        likes: {
          num: 0,
          ids: []
        },

        username: usernames[usernameIndex]
      })
    }, 5000)

    setTimeout(function(){
      comments = ['I know right!?', 'Hahah XD', 'Wow what a great picture', 'This is awesome', 'How is this possible?', 'According to the map we\'re like right next to each other', 'Your last photo was better ;)', 'I was there the other day!', 'Call me maybe?', 'Nice to see you on here.. finally.'];
      usernames = ['Marissa', 'Heather', 'Kelly'];
      commentIndex = Math.floor( (Math.random() * 10) );
      usernameIndex = Math.floor( (Math.random() * 3) );
      CommentsCollection.insert({
        comment: comments[commentIndex],
        marker_id: marker_id,
        user_id: user_id,
        createdAt: new Date(),
        //     n    userId's
        //e.g. [2, ['LCKJisldkjf','aalsdkfjlaksd']]
        likes: {
          num: 0,
          ids: []
        },

        username: usernames[usernameIndex]
      })
    }, 8000)
  }
});
