var SearchView = Backbone.View.extend({

  
  render: function() {
    this.$el.html(this.template());
    //add search button click handler
    this.$('button').click((event) => {
      event.preventDefault();
      //search for video using videos collection and value inside search input
      this.collection.search(this.$('input').val());
    });
    
    //timer used within keyup listener on input
    var timer;
    //will trigger a search after 500 miliseconds pause in typing
    this.$('input').on('keyup', (e) => {
      //clear timer if already set and key has been pressed
      timer && clearTimeout(timer);
      //search after 500 miliseconds
      timer = setTimeout(() => {
        this.collection.search(this.$('input').val());
      }, 500);
    });  
    
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
