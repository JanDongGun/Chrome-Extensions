const form = document.querySelector("form");
const total = document.querySelector("#total");
let newTotal = 0;

chrome.storage.sync.get("total", (budget) => {
  if (budget.total) {
    newTotal = budget.total;
    total.textContent = newTotal;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = form.amount.value;
  newTotal += parseInt(value);
  total.textContent = newTotal;
  chrome.storage.sync.set({ total: newTotal }, () => {});
  form.reset();
});
