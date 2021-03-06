const saveLimit = document.querySelector("#saveLimit");
const resetTotal = document.querySelector("#resetTotal");
const input = document.querySelector("#limit");

chrome.storage.sync.get("limit", (budget) => {
  if (budget.limit) {
    input.value = budget.limit;
  }
});

saveLimit.addEventListener("click", (e) => {
  e.preventDefault();
  const value = input.value;
  chrome.storage.sync.set({ limit: value });
});

resetTotal.addEventListener("click", (e) => {
  e.preventDefault();
  chrome.storage.sync.set({ total: 0 });
  const notifOptions = {
    type: "basic",
    iconUrl: "icon48.png",
    title: "Total Reset!",
    message: "Total has been reset",
  };

  chrome.notifications.create("limitNotif", notifOptions, () => {});
});
