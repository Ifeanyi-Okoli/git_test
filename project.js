window.onload = beginningAnimation();
let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore = 0;

let buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const main = document.querySelector("main");
const endAlert = document.querySelector("#end-alert");
const endDesc = document.querySelector("#end-desc");
const returnMainBtn = document.querySelector("#retry-btn");
const desc = document.querySelector("#desc3");
const container = document.querySelector("#results-container");

body.addEventListener("click", skipAnime());
body.addEventListener("keydown", skipAnime());

function skipAnime(){
    const span = document.querySelectorAll("span");

    span.forEach((span) => span.classList.add("skip"));
}

function beginningAnimation(){
    fadeIn();

    const desc1 = document.querySelector("#desc1");
    let desc1Span = desc1.querySelector("span");
    desc1Span = Array.from(desc1Span);

    const desc2 = document.querySelector("#desc2");
    const desc3 = document.querySelector("#desc3");


    desc1Span[desc1Span.length-1].ontransitionend = () => {
        desc1.classList.add("fade-out");

desc1.addEventListener("animationend" = () => {
    desc1.classList.add("disappear");
    desc1.classList.remove("animate");
    desc2.classList.remove("disappear");
    desc2.classList.add("animate");
    fadeIn();

    let desc3Span = desc3.querySelectorAll("span");
    desc3Span = Array.from(desc3Span);

    desc3Span[desc3Span.length-1].ontransitionend = () => {
      const gameCtn = document.querySelector("#game-container");

              setTimeout(function () {
                gameCtn.classList.add("fade-in");
    }, 300);



} );

    }
}

function onTick(){
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if(char === splitText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}
}

buttons.forEach((button) =>(
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    playerSelection = img.alt.toLowerCase();

    playRound(playerSelection, computerSelection);

    if(playerScore === 5 || computerScore === 5){
      declareWinner();
    }
  })
))

const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay(){
  return myArray[~~(Math.random()*myArray.length)];
}



function playRound(playerSelection, computerSelection) {
    // your code here!
    computerSelection = computerPlay().toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if(computerSelection === playerSelection){
      displayResults("Tie game!");
    } else if((playerSelection === "rock" && computerSelection === "paper")|| (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")) {
      computerScore = ++computerScore;
      keepCpuScore();
      if(computerScore === 1){
        displayResults(
          `Oh no! You lost.
        ${capitalize(computerSelection)} beats ${playerSelection}.`
        );
      }else if(computerScore === 2){
        displayResults(
          `Arghh. ${capitalize(
            computerSelection
          )} beats ${playerSelection}. Give it another shot!`
        );
      }else if(computerScore === 3){
        displayResults(
          `${capitalize(
            computerSelection
          )} beats ${playerSelection}. It's ok. You got this!!`
        );
      }else if(computerScore === 4){
        displayResults(
          `Oh no. It's match point!! ${capitalize(
            computerSelection
          )} beats ${playerSelection}. Don't let us down!`
        );
      } else{
        displayResults(`${computerSelection} beats ${playerSelection}`);
      }
  } else{
    playerScore = ++playerScore;
    keepPlayerScore();
    if(playerScore === 1){
      displayResults(
        `Lets go!!! You won.
        ${capitalize(playerSelection)} beats ${computerSelection}.`
      );
    }else if (playerScore === 2) {
      displayResults(
        `You're pretty good at this. ${capitalize(
          playerSelection
        )} beats ${computerSelection}.`
      );
    } else if (playerScore === 3) {
      displayResults(
        `${capitalize(
          playerSelection
        )} beats ${computerSelection}! Has mankind found its savior??`
      );
    } else if (playerScore === 4) {
      displayResults(
        `${capitalize(
          playerSelection
        )} beats ${computerSelection}. One more and you're a hero!`
      );
    } else {
      displayResults(`${playerSelection} beats ${computerSelection}`);
    }
  }
}

function capitalize(str){
  return str.ch6arAt(0).toUpperCase()+str.slice(1);
}

function displayResults(str){
  container.animate([{opacity: 0}, {opacity: 1}], {
    duration: 300,
    fill: "forwards",
    iterations: 1,
    delay: 0,
  })
}
  function game(){
    let player = 0;
    let computer = 0;
    for (let i = 0; i < 5; i++) {
        // your code here!
        let result = playRound(playerSelection, computerSelection);
        if (result === "player") player++;
        else computer++;
     }
    return  player > computer ? "player wins": "computer wins";
  }
//   const playerSelection = "rock";
//   const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));