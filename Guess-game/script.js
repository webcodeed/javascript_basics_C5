let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

function displayMsg(str) {
  document.querySelector(".message").textContent = str;
}

document.querySelector(".check").addEventListener("click", function () {
  const input = document.querySelector(".guess");
  const inputValue = +input.value;
  if (!inputValue) {
    displayMsg("❌ No number");
  } else if (inputValue === secretNumber) {
    displayMsg("🎉 Correct number!!!");

    document.querySelector(".number").textContent = secretNumber;

    document.body.style.backgroundColor = "#60b347";

    input.disabled = true;
    document.querySelector(".check").disabled = true;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (inputValue !== secretNumber) {
    if (score > 1) {
      if (inputValue > secretNumber) {
        displayMsg("📈 Too high!");
      } else {
        displayMsg("📉 Too low!");
      }
      score -= 1; // score = score - 1
      document.querySelector(".score").textContent = score;
    } else {
      displayMsg("💥 Game Over!!!");
      input.disabled = true;
      document.querySelector(".check").disabled = true;
      document.querySelector(".score").textContent = 0;
      document.body.style.backgroundColor = "#fa5252";
      document.querySelector(".number").textContent = secretNumber;
    }
  }
  // input.value = "";
});

document.querySelector(".restart").addEventListener("click", () => {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  displayMsg("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".guess").disabled = false;
  document.querySelector(".check").disabled = false;
  document.querySelector("body").style.backgroundColor = "#9775fa";
});
