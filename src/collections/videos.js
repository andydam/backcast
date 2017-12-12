var Videos = Backbone.Collection.extend({

  model: Video,
  
  search(query) {
    //run youtube api ajax call
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {key: window.YOUTUBE_API_KEY, q: query, part: 'snippet'},
      dataType: 'json',
      success: (data) => {
        //populate videos collection with youtube api data
        this.populateVideoList(data);
      },
      error: function(data) {
        console.log('fail', data);
      }
    });
  },
  
  populateVideoList(rawVideoList) {
    //reset the videos collection to empty before populating
    this.reset();
    //iterate through video data from youtube
    console.log(rawVideoList);
    //check if using example data
    if (rawVideoList === window.exampleVideoData) {
      //parse example data
      rawVideoList.forEach((rawVideo) => {
        //create video model for each video
        let videoModel = new Video(rawVideo);
        //add video to videos collection
        this.add(videoModel);
      });
    } else {
      //parse real youtube data
      rawVideoList.items.forEach((rawVideo) => {
        //create video model for each video
        let videoModel = new Video(rawVideo);
        //add video to videos collection
        this.add(videoModel);
      });
    }
    //trigger sync to reload VideoListView
    this.trigger('sync', this);
    //select first video in list
    this.models[0].select();
  },

});
