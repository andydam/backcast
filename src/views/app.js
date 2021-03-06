var AppView = Backbone.View.extend({

  el: '#app',

  initialize() {
    //declare videos collection
    this.videos = new Videos();

    //declare a VideoPlayerView
    this.videoPlayer = new VideoPlayerView({collection: this.videos});
    //declare a VideoCommentsView
    this.videoComments = new VideoCommentsView({collection: this.videos});
    //declare a VideoPlayerListView
    this.videoList = new VideoListView({collection: this.videos});
    //delcare a SearchBar
    this.searchBar = new SearchView({collection: this.videos});
    //render AppView when initialized
    this.render();

    //initial population of video collection
    this.videos.search('cats');
  },

  render() {
    this.$el.html(this.template());
  
    //add VideoPlayerView to AppView
    this.$('.player').html(this.videoPlayer.render());
    //add VideoCommentsView to AppView
    this.$('.comments').html(this.videoComments.render());
    //add VideoPlayerListView to AppView
    this.$('.list').html(this.videoList.render());
    //add SearchView to AppView
    this.$('.search').html(this.searchBar.render());

    return this.$el;
  },


  template: templateURL('src/templates/app.html')

});
