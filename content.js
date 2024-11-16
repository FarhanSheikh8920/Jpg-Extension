const jpgLinks = Array.from(document.querySelectorAll("img"))
  .map((img) => img.src)
  .filter((src) => src.endsWith(".jpg") || src.endsWith(".jpeg"));

chrome.runtime.sendMessage({ action: "downloadImages", links: jpgLinks });
