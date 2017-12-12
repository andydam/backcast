var VideoListEntryView = Backbone.View.extend({
  
  render() {
    this.$el.html(this.template(this.model.attributes));
    // click handler binds select method of the videoModel to the title of video on DOM
    this.$('.video-list-entry-title').click(() => {
      this.model.select();
    });
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});