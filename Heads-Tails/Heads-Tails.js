let score = JSON.parse(localStorage.getItem("scores")) || {
  wins: 0,
  losses: 0,
};

function playGame(guess) {
  let randomNum = Math.random();
  let result = randomNum < 0.5 ? "Heads" : "Tails";
  localStorage.setItem("scores", JSON.stringify(score));
  // console.log(guess === result ? "You Win!" : "You Lose!")
  if (guess === result) {
    score.wins++;
  } else {
    score.losses++;
  }
  document.querySelector(".js-playerChoice").innerHTML = guess;
  document.querySelector(".js-result").innerHTML = result;
  document.querySelector(".js-score-wins").innerHTML = score.wins;
  document.querySelector(".js-score-losses").innerHTML = score.losses;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  localStorage.removeItem("scores");
  document.querySelector(".js-score-wins").innerHTML = score.wins;
  document.querySelector(".js-score-losses").innerHTML = score.losses;
}
