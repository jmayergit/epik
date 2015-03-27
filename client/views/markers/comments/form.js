Template.commentform.events({
  'submit .ui.form': function(event, template) {
    event.preventDefault();
    var comment = $('input').val();
    console.log(event);
    // MarkersCollection.update({_id: this.paramd.id}, {$push: {'comments': comment}});
  }
});
