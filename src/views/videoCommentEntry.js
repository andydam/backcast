var VideoCommentEntryView = Backbone.View.extend({
  
  initialize(comment) {
    this.comment = comment;
  },
  
  render() {
    this.$el.html(this.template(this.comment));
    return this.$el;
  },

  template: templateURL('src/templates/videoCommentEntry.html')

});