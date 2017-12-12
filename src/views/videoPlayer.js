var VideoPlayerView = Backbone.View.extend({
  
  initialize() {
    // select handler fires when any video in collection has been selected
    this.collection.on('select', this.render, this);
  },
  
  render(video) {
    this.$el.html('<div class="loading">Please wait...</div>');
    
    if (video) {
      // render recieves the videoModel that was selected
      // first loading is rendered, then the the view is rendered using template
      this.$el.html(this.template(video.attributes));
    }
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
