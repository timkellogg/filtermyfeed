(function() {
  var posts = document.getElementsByClassName('userContent');

  function filterPosts(posts, filters) {  
    intervalId = window.setInterval(function() {

      for (var i = 0; i < posts.length; i++) {
        filters.split(',').forEach(function(filter) {
          if (posts[i].innerHTML.indexOf(filter) > -1) {
            posts[i].closest('.fbUserPost').style.display = 'none';
          }
        });
      }
    }, 1000);
  }

  chrome.storage.sync.get('filters', function(items) {
    if (items.filters === null || items.filters === '') {
      return;
    }

    filterPosts(posts, items.filters);
  });

})(window);
