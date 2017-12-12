var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);

    //set video properties
    this.set('title', video.snippet.title);
    this.set('description', video.snippet.description);
    this.set('thumbnail', video.snippet.thumbnails.default.url);
  },

  getComments() {
    //pull comments for video from youtube api
    Backbone.ajax({
      url: 'https://www.googleapis.com/youtube/v3/commentThreads',
      type: 'GET',
      data: {key: window.YOUTUBE_API_KEY, part: 'snippet', videoId: this.get('id')},
      dataType: 'json',
      success: (data) => {
        //parse comment data
        this.parseComments(data.items);
      },
      error: function(data) {
        console.log('fail', data);
      }
    });
  },
  
  parseComments(comments) {
    let commentsArr = [];
    //iterate through comments and push to comments array
    for (let i = 0; i < comments.length; i++) {
      commentsArr.push({author: comments[i].snippet.topLevelComment.snippet.authorDisplayName, text: comments[i].snippet.topLevelComment.snippet.textDisplay});
    }
    //set comments to video model
    this.set('comments', commentsArr);
    //trigger commentsLoaded for video comments view to render comments
    this.trigger('commentsLoaded', this);
  },

  select: function() {
    this.trigger('select', this);
    //load comments for video
    this.getComments();
  }

});
