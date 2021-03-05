chrome.runtime.sendMessage({ todo: "showPageAction" });

// content js có thể thay đổi dom, syle nhưng không thể sài
// hầu hết chrome api như storage và notification
// nên là content sẽ nhờ eventPage làm hộ nó bằng
// cách gửi 1 thông điệp show page action
// để hilight đc extension
