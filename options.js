document.getElementById('toggle').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'toggle' }, (response) => {
    if (response.enabled) {
      alert('Keyword replacement enabled');
    } else {
      alert('Keyword replacement disabled');
    }
  });
});
