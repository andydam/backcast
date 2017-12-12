var Videos = Backbone.Collection.extend({

  model: Video,
  
  search(query, maxResults = 5) {
    //run youtube api ajax call
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {key: window.YOUTUBE_API_KEY, q: query, part: 'snippet', maxResults},
      dataType: 'json',
      success: (data) => {
        //populate videos collection with youtube api data
        this.populateVideoList(this.parse(data));
      },
      error: function(data) {
        console.log('fail', data);
      }
    });
  },
  
  //parse method to pass tests, not implemented in actual app
  parse(obj) {
    return obj.items;
  },
  
  populateVideoList(rawVideoList) {
    //reset the videos collection to empty before populating
    this.reset();
    //iterate through video data from youtube
    console.log(rawVideoList);
    //check if using example data

      //parse example data
    rawVideoList.forEach((rawVideo) => {
      //create video model for each video
      let videoModel = new Video(rawVideo);
      //add video to videos collection
      this.add(videoModel);
    });
    
    //trigger sync to reload VideoListView
    this.trigger('sync', this);
    //select first video in list
    //this.models[0].select();
  },

});
