var VideoListView = Backbone.View.extend({

  initialize() {
    // set up event listener for when anything in collection syncs
    this.collection.on('sync', this.render, this);
  },

  render() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach((video) => {
      // create a videoListEntryView for each video
      let videoView = new VideoListEntryView({model: video});
      // render each videoListEntryView
      // add videoListEntry view to videoListView
      this.$el.append(videoView.render());
    });
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
