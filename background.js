chrome.runtime.onMessage.addListener((msg, sender) => {
  // First, validate the message's structure.
  if ((msg.from === 'content') && (msg.subject === 'showPageAction') && chrome.pageAction) {
    console.log("hello")
    // Enable the page-action for the requesting tab.
    chrome.pageAction.show(sender.tab.id);
  }
});

chrome.runtime.onMessage.addListener((msg, sender) => {
  console.log("RECEIVED", msg);
  if ((msg.from === 'content') && (msg.subject === 'fetchPrices')) {
    console.log("AKCIJA!");
  }
});