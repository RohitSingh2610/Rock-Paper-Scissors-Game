let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const myMassage = document.querySelector(".msg-container p");
const userScoreP = document.querySelector("#user");
const compScoreP = document.querySelector("#computer");
const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
};
// check Conditon draw
const drawGame = () => {
  myMassage.innerText = "Draw Game Both Are Same.Play Again.";
  myMassage.style.backgroundColor = "#F54A19";
};
// Show a winner in diplay
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreP.innerText = userScore;
    userScoreP.style.color = "orange";
    myMassage.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    myMassage.style.backgroundColor = "green";
  } else {
    compScore++;
    compScoreP.innerText = compScore;
    compScoreP.style.color = "green";
    myMassage.innerText = `You Lose. ${compChoice} beats Your ${userChoice} `;
    myMassage.style.backgroundColor = "red";
  }
};
// Select a correct winner
const playGame = (userChoice) => {
  const compChoice = genComputerChoice();

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors , paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock , scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      // rock , paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
// check a click function woring on properly
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
