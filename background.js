chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "downloadImages") {
      message.links.forEach((link, index) => {
        chrome.downloads.download({
          url: link,
          filename: `image_${index + 1}.jpg`
        });
      });
    }
  });
  