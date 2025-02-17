let secretNumber = 16;
// Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

function displayMsg(str) {
  document.querySelector(".message").textContent = str;
}

document.querySelector(".check").addEventListener("click", function () {
  const inputValue = +document.querySelector(".guess").value;
  if (!inputValue) {
    displayMsg("❌ No number");
  } else if (inputValue === secretNumber) {
    displayMsg("🎉 Correct number!!!");
  }
});
