
// Saves options to chrome.storage
function save_options() {
  var filters = document.getElementById('filters').value;

  chrome.storage.sync.set({
    filters: filters,
  }, function() {
    var status = document.getElementById('status');
    status.innerHTML = 'Saved!';

    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({ filters: 'nazis' }, function(items) {
    document.getElementById('filters').value = items.filters;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('submit').addEventListener('click',
    save_options);
