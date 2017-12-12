var AppView = Backbone.View.extend({

  el: '#app',

  initialize() {
    this.videos = new Videos();
    
    //initial population of video collection
    this.videos.populateVideoList(window.exampleVideoData);
    
    //declare a VideoPlayerView
    this.videoPlayer = new VideoPlayerView({collection: this.videos});
    //declare a VideoPlayerListView
    this.videoList = new VideoListView({collection: this.videos});
    //delcare a SearchBar
    this.searchBar = new SearchView();
    //render AppView when initialized
    this.render();
    //select first video in list
    this.videos.models[0].select();
  },

  render() {
    this.$el.html(this.template());
  
    //add VideoPlayerView to AppView
    this.$('.player').html(this.videoPlayer.render());
    //add VideoPlayerListView to AppView
    this.$('.list').html(this.videoList.render());
    //add SearchView to AppView
    this.$('.search').html(this.searchBar.render());
    //add search button click handler
    this.$('.btn').click((event) => {
      event.preventDefault();
      //search for video using videos collection and value inside search input
      this.videos.search(this.$('.form-control').val());
    });
    // this.$('.btn').keypress((e) => {
    //   debugger;
    //     var key = e.which;
    //     if (key == 13) {
    //       this.$('.btn').click();
    //       return false;  
    //     }
    // });  

    return this.$el;
  },


  template: templateURL('src/templates/app.html')

});
