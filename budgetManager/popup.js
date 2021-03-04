const form = document.querySelector("form");
const total = document.querySelector("#total");
const limit = document.querySelector("#limit");
let newTotal = 0;
let newlimit = 0;

chrome.storage.sync.get(["total", "limit"], (budget) => {
  if (budget.total) {
    newTotal = budget.total;
    total.textContent = newTotal;
  }
  if (budget.limit) {
    newlimit = budget.limit;
    limit.textContent = newlimit;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = form.amount.value;
  newTotal += parseInt(value);
  total.textContent = newTotal;
  chrome.storage.sync.set({ total: newTotal }, () => {
    if (newTotal >= newlimit) {
      const notifOptions = {
        type: "basic",
        iconUrl: "icon48.png",
        title: "Limit Reached!",
        message: "Uh oh! look like you've reached your limit",
      };

      chrome.notifications.create("limitNotif", notifOptions, () => {});
    }
  });
  form.reset();
});
