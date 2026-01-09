//your JS code here. If required.
const container = document.querySelector(".container");

for (let i = 1; i <= 800; i++) {
  const square = document.createElement("span"); // new element each loop
  square.className = "square";
  container.appendChild(square);
}