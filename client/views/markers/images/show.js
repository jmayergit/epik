Template.markerimageshow.helpers({
  image: function() {
    // find another way to organize data
    var href = window.location.href;
    var reID = /[a-zA-Z0-9]{15,25}/;
    var marker_id = href.match(reID)[0];
    var marker = MarkersCollection.find({_id: marker_id});
    var photo_id = marker.fetch()[0].photo_id;
    return Images.findOne({_id: photo_id});
  }
});
