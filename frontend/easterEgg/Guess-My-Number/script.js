"use strict";
let secretNumber = Number(Math.floor(Math.random() * 100) + 1);

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  
  switch (true) {
    case !guess:
      document.querySelector(".message").textContent = "⛔ It cannot be 0";
      break;

    case guess < secretNumber:
      document.querySelector(".message").textContent = "🔻 Too low";
      document.querySelector(".score").textContent -= 1; 
      break;
      
      case guess > secretNumber:
        document.querySelector(".message").textContent = "🔺 Too high";
        document.querySelector(".score").textContent -= 1; 
      break;
      
    case guess === secretNumber:
      document.querySelector(".message").textContent = "💃 Correct";
      document.querySelector(".number").textContent = secretNumber;
      let highscore = document.querySelector(".highscore").textContent;
      let score = document.querySelector(".score").textContent;
      if (highscore < score) {
        document.querySelector(".highscore").textContent = score;
      }
      document.body.style.backgroundColor = '#60b347';
      
      break;
      
    default:
      document.querySelector(".message").textContent = "❌ ERROR";
      break;
  }
});

document.querySelector(".again").addEventListener('click', function () {
  document.body.style.backgroundColor = '#222';
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  secretNumber = Number(Math.floor(Math.random() * 100) + 1);
})
