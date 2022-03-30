const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors")
const btnPlay = document.querySelector("#btnPlay");
const pcscoreElm = document.querySelector("#pcScore")
const tieScoreElem = document.querySelector("#tieScore")
const userScoreElem = document.querySelector("#playerScore")

const gameChoices = ["rock", "paper", "scissors"];

let computerChoice;
let userChoice;

let userScore = 0;
let computerScore = 0;
let tieScore = 0;

const checkAnswer = () => {
  if (userChoice === "rock" && computerChoice === "scissor" ||
    userChoice === "paper" && computerChoice === "paper" ||
    userChoice === "scissor" && computerChoice === "rock") {
    userScore++;
    alert(`you Win! Your Choice: ${userChoice} Computer Choice: ${computerChoice}`);
  } else if (userChoice === computerChoice) {
    tieScore++;
    alert("Tie");
  } else {
    computerScore++
    alert(`User Choice: ${userChoice} Computer Choice ${computerChoice}`);
  }
  pcscoreElm.textContent = computerScore
  tieScoreElem.textContent = tieScore
  userScoreElem.textContent = userScore
};

const play = (choice) => {
  const randomIndex = Math.floor(Math.random() * gameChoices.length);
  computerChoice = gameChoices[randomIndex];
  userChoice = choice;

  checkAnswer();
}

rock.addEventListener("click", () =>{
  play("rock");
})

paper.addEventListener("click", () =>{
  play("paper");
})

scissors.addEventListener("click", () =>{
  play("scissors");
})
