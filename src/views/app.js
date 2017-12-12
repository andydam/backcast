var AppView = Backbone.View.extend({

  el: '#app',

  initialize() {
    this.videos = new Videos();
    
    //initial population of video collection
    this.populateVideoList(window.exampleVideoData);
    
    //declare a VideoPlayerView
    this.videoPlayer = new VideoPlayerView({collection: this.videos});
    //declare a VideoPlayerListView
    this.videoList = new VideoListView({collection: this.videos});
    //render AppView when initialized
    this.render();
  },
  
  populateVideoList(rawVideoList) {
    //iterate through video data from youtube
    rawVideoList.forEach((rawVideo) => {
      //create video model for each video
      let videoModel = new Video(rawVideo);
      //add video to videos collection
      this.videos.add(videoModel);
    });
  },

  render() {
    this.$el.html(this.template());
  
    //add VideoPlayerView to AppView
    this.$('.player').html(this.videoPlayer.render());
    //add VideoPlayerListView to AppView
    this.$('.list').html(this.videoList.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
