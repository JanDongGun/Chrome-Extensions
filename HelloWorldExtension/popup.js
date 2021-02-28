const h2 = document.querySelector("#greet");
const input = document.querySelector("#name");

input.addEventListener("keyup", (e) => {
  h2.textContent = `Hello ${input.value}`;
});
