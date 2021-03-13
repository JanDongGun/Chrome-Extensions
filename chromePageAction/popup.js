const inputColor = document.querySelector("#fontColor");
const btnChange = document.querySelector("#btnChange");
let value;

inputColor.addEventListener("change", () => {
  value = inputColor.value;
});

btnChange.addEventListener("click", (e) => {
  e.preventDefault();
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {
      todo: "changeColor",
      color: value,
    });
  });
});
