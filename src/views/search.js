var SearchView = Backbone.View.extend({

  
  render: function() {
    this.$el.html(this.template());
    //add search button click handler
    this.$('button').click((event) => {
      event.preventDefault();
      //search for video using videos collection and value inside search input
      this.collection.search(this.$('input').val());
    });
    //add search enter keypress event handler
    this.$('input').on('keyup', (e) => {
      if (e.which === 13 || e.keyCode === 13) {
        e.preventDefault();
        this.collection.search(this.$('input').val()); 
      }
    });  
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
