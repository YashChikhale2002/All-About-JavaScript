let score = JSON.parse(localStorage.getItem("store")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

function computerMove() {
  let randomNumber = Math.random();
  let compMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    compMove = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    compMove = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    compMove = "Scissors";
  }
  return compMove;
}

let rockBtn = document.querySelector(".js-Rock-button");
let paperBtn = document.querySelector(".js-Paper-button");
let scissorsBtn = document.querySelector(".js-Scissors-button");
let scoreBtn = document.querySelector(".js-Score");
let autoPlayBtn = document.querySelector(".js-AutoPlay");
rockBtn.addEventListener("click", () => {
  playGame("Rock");
});
paperBtn.addEventListener("click", () => {
  playGame("Paper");
});
scissorsBtn.addEventListener("click", () => {
  playGame("Scissors");
});
scoreBtn.addEventListener("click", () => {
  resetScore();
});
autoPlayBtn.addEventListener("click", () => {
  autoPlay();
});

document.body.addEventListener("keydown", (event) => {
  if (event.key === "r") {
    playGame("Rock");
  } else if (event.key === "p") {
    playGame("Paper");
  } else if (event.key === "s") {
    playGame("Scissors");
  } else if (event.key === "a") {
    autoPlay();
  } else if (event.key === "Backspace") {
    showResetConfirmation();
  }
});

function playGame(playerMove) {
  let compMove = computerMove();
  let result = "";
  if (playerMove === "Rock") {
    if (compMove === "Rock") {
      result = "Tie.";
    } else if (compMove === "Paper") {
      result = "You Lose.";
    } else if (compMove === "Scissors") {
      result = "You Win.";
    }
  } else if (playerMove === "Paper") {
    if (compMove === "Paper") {
      result = "Tie.";
    } else if (compMove === "Scissors") {
      result = "You Lose.";
    } else if (compMove === "Rock") {
      result = "You Win.";
    }
  } else if (playerMove === "Scissors") {
    if (compMove === "Scissors") {
      result = "Tie.";
    } else if (compMove === "Rock") {
      result = "You Lose.";
    } else if (compMove === "Paper") {
      result = "You Win.";
    }
  }

  if (result === "You Win.") {
    score.wins += 1;
  } else if (result === "You Lose.") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.ties += 1;
  }
  localStorage.setItem("store", JSON.stringify(score));
  document.querySelector(".js-result").innerHTML = `${result}`;
  document.querySelector(
    ".js-moves"
  ).innerHTML = `You picked ${playerMove}. Computer picked ${compMove}`;
  updateScoreDisplay();
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem("store");
  updateScoreDisplay();
  showResetConfirmation();
}

let autoPlaying = false;
let intervalId;
function autoPlay() {
  if (!autoPlaying) {
    intervalId = setInterval(() => {
      let playerMove = computerMove();
      playGame(playerMove);
      autoPlaying = true;
    }, 2000);
    autoPlayBtn.innerHTML = "Stop Playing";
  } else {
    clearInterval(intervalId);
    autoPlaying = false;
    autoPlayBtn.innerHTML = "Auto Play";
  }
}

function updateScoreDisplay() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
}
updateScoreDisplay();

function showResetConfirmation() {
  document.querySelector(".js-reset-confirmation").innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>
    `;

  document
    .querySelector(".js-reset-confirm-yes")
    .addEventListener("click", () => {
      resetScore();
      hideResetConfirmation();
    });

  document
    .querySelector(".js-reset-confirm-no")
    .addEventListener("click", () => {
      hideResetConfirmation();
    });
}

function hideResetConfirmation() {
  document.querySelector(".js-reset-confirmation").innerHTML = "";
}
