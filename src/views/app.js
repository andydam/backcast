var AppView = Backbone.View.extend({

  el: '#app',

  initialize() {
    debugger;
    this.videos = new Videos();
    
    //initial population of video collection
    // this.videos.populateVideoList(window.exampleVideoData);
    
    //declare a VideoPlayerView
    this.videoPlayer = new VideoPlayerView({collection: this.videos});
    //declare a VideoPlayerListView
    this.videoList = new VideoListView({collection: this.videos});
    //delcare a SearchBar
    this.searchBar = new SearchView({collection: this.videos});
    //render AppView when initialized
    this.render();

    //select first video in list
    // this.videos.models[0].select();
    this.videos.search('cats');
  },

  render() {
    this.$el.html(this.template());
  
    //add VideoPlayerView to AppView
    this.$('.player').html(this.videoPlayer.render());
    //add VideoPlayerListView to AppView
    this.$('.list').html(this.videoList.render());
    //add SearchView to AppView
    this.$('.search').html(this.searchBar.render());

    return this.$el;
  },


  template: templateURL('src/templates/app.html')

});
