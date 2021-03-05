const menuItem = {
  id: "speak",
  title: "speak",
  contexts: ["selection"],
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener((clickData) => {
  if (clickData.menuItemId === "speak" && clickData.selectionText) {
    chrome.tts.speak(clickData.selectionText, { rate: 0.8 });
  }
});
