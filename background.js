(function() {
  chrome.storage.sync.get('filters', function(items){
    if (!items.filters) {
      chrome.storage.sync.set({ 'filters': 'nazis' }, function(){});
    }
  });
})();
