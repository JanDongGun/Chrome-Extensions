const contextMenuItem = {
  id: "spendMoney",
  title: "SpendMoney",
  contexts: ["selection"],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData) => {
  if (
    clickData.menuItemId === "spendMoney" &&
    Number.isInteger(parseInt(clickData.selectionText))
  ) {
    chrome.storage.sync.get(["total", "limit"], (budget) => {
      let newTotal = 0;
      if (budget.total) {
        newTotal += budget.total;
      }

      newTotal += parseInt(clickData.selectionText);
      chrome.storage.sync.set({ total: newTotal }, () => {
        if (newTotal >= budget.limit) {
          const notifOptions = {
            type: "basic",
            iconUrl: "icon48.png",
            title: "Limit Reached!",
            message: "Uh oh! look like you've reached your limit",
          };

          chrome.notifications.create("limitNotif", notifOptions, () => {});
        }
      });
    });
  } else {
    const notifOptions = {
      type: "basic",
      iconUrl: "icon48.png",
      title: "select fault!",
      message: "Uh oh! look like you've slected string",
    };

    chrome.notifications.create("limitNotif", notifOptions, () => {});
  }
});
