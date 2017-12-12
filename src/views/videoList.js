var VideoListView = Backbone.View.extend({

  initialize() {
    // set up event listener for when anything in collection syncs
    this.collection.on('sync', this.render, this);
  },

  render() {
    this.$el.children().detach();
    this.$el.html(this.template());
    //empty out video list before adding video list entry view
    this.$('.video-list').empty();
    
    //iterate through collection of videos
    this.collection.forEach((video) => {
      // create a videoListEntryView for each video
      let videoView = new VideoListEntryView({model: video});
      // render each videoListEntryView
      // add videoListEntry view to videoListView
      this.$('.video-list').append(videoView.render());
    });
    //check if video list view has a collection
    if (this.collection.length) {
      //select first video in collection
      this.collection.models[0].select();
    }
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
