var VideoCommentsView = Backbone.View.extend({

  initialize() {
    //handler fires when comments are loaded
    this.collection.on('commentsLoaded', this.render, this);
    //select handler fires when any video in collection has been selected, clears out displayed comments
    this.collection.on('select', this.clear, this);
  },
  
  clear() {
    //replace comment list with 'loading' before adding video comments
    this.$el.html('<div class="loading">Please wait...</div>');
    return this.$el;
  },

  render(video) {
    this.$el.children().detach();
    this.$el.html(this.template());
    //empty out video list before adding video list entry view
    this.$('.video-comments').empty();
    
    //iterate through collection of comments
    if (video) {
      video.get('comments').forEach((comment) => {
        // create a videoCommentEntryView for each comment
        let commentView = new VideoCommentEntryView(comment);
        // render each videoCommentView
        // add videoCommentView to DOM
        this.$('.video-comments').append(commentView.render());
      });
    }
    return this.$el;
  },

  template: templateURL('src/templates/videoComments.html')

});