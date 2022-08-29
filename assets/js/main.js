const paperButton = document.querySelector("#paperBtn");
paperButton.addEventListener("click", function () {
  const playerImg = document.querySelector("#imageOne");
  const playText1 = document.querySelector("#playerbox");
  playerImg.src = "assets/img/3.png";
  playText1.innerHTML = "Paper";
});

const rockButton = document.querySelector("#rockBtn");
rockButton.addEventListener("click", function () {
  const playerImg = document.querySelector("#imageOne");
  const playText1 = document.querySelector("#playerbox");
  playerImg.src = "assets/img/2.png";
  playText1.innerHTML = "Rock";
});

const scissorButton = document.querySelector("#scissorBtn");
scissorButton.addEventListener("click", function () {
  const playerImg = document.querySelector("#imageOne");
  const playText1 = document.querySelector("#playerbox");
  playerImg.src = "assets/img/4.png";
  playText1.innerHTML = "Scissor";
});

function selectBtn(){
  let buttons = document.querySelectorAll(".play-Btn");
  for(let i = 0; i < buttons.length; i++){
      buttons[i].classList.remove("button-active");
  }
  event.target.classList.add("button-active");
  // // let id = event.target.getAttribute("id");
  // // shoeText(id);
}
function selectBtn2(){
  let buttons = document.querySelectorAll(".play-Btn");
  for(let i = 0; i < buttons.length; i++){
      buttons[i].classList.remove("button-active");
  }
  // event.target.classList.add("button-active");
  // // let id = event.target.getAttribute("id");
  // // shoeText(id);
}


const playerClick = document.querySelector("#clickPlay");
playerClick.addEventListener("click", randomFunction);
playerClick.addEventListener("click", resultFunction);
playerClick.addEventListener("click", function () {
  let selectmatch = document.getElementById("select-match").value;
  let playerOneScore = document.getElementById("playerOneScore").innerHTML;
  let player2Score = document.getElementById("playerTwoScore").innerHTML;
  let playResult2 = document.querySelector("#gameResult2");
  let paperBtn = document.querySelector("#paperBtn");
  let rockBtn = document.querySelector("#rockBtn");
  let scissorBtn = document.querySelector("#scissorBtn");
  let clickPlayBtn = document.querySelector("#clickPlay");

  if (selectmatch === "Three" && playerOneScore === "2") {
    playResult2.innerHTML = "1Player is the winner!";
    paperBtn.setAttribute("disabled", "");
    rockBtn.setAttribute("disabled", "");
    scissorBtn.setAttribute("disabled", "");
    clickPlayBtn.setAttribute("disabled", "");
  } else if (selectmatch === "Five" && playerOneScore === "3") {
    playResult2.innerHTML = "1Player is the winner!";
    paperBtn.setAttribute("disabled", "");
    rockBtn.setAttribute("disabled", "");
    scissorBtn.setAttribute("disabled", "");
    clickPlayBtn.setAttribute("disabled", "");
  } else if (selectmatch === "Seven" && playerOneScore === "4") {
    playResult2.innerHTML = "1Player is the winner!";
    paperBtn.setAttribute("disabled", "");
    rockBtn.setAttribute("disabled", "");
    scissorBtn.setAttribute("disabled", "");
    clickPlayBtn.setAttribute("disabled", "");
  } else if (selectmatch === "Three" && player2Score === "2") {
    playResult2.innerHTML = "2Player is the winner!";
    paperBtn.setAttribute("disabled", "");
    rockBtn.setAttribute("disabled", "");
    scissorBtn.setAttribute("disabled", "");
    clickPlayBtn.setAttribute("disabled", "");
  } else if (selectmatch === "Five" && player2Score === "3") {
    playResult2.innerHTML = "2Player is the winner!";
    paperBtn.setAttribute("disabled", "");
    rockBtn.setAttribute("disabled", "");
    scissorBtn.setAttribute("disabled", "");
    clickPlayBtn.setAttribute("disabled", "");
  } else if (selectmatch === "Seven" && player2Score === "4") {
    playResult2.innerHTML = "2Player is the winner!";
    paperBtn.setAttribute("disabled", "");
    rockBtn.setAttribute("disabled", "");
    scissorBtn.setAttribute("disabled", "");
    clickPlayBtn.setAttribute("disabled", "");
  }
});

const unlockOption = document.querySelector("#resetBtn");
unlockOption.addEventListener("click", function () {
  selectBtn2();
  let selectmatch = document.getElementById("select-match");
  let paperBtn = document.querySelector("#paperBtn");
  let rockBtn = document.querySelector("#rockBtn");
  let scissorBtn = document.querySelector("#scissorBtn");
  let clickPlayBtn = document.querySelector("#clickPlay");
  let playResult = document.querySelector("#gameResult");
  let playResult2 = document.querySelector("#gameResult2");
  const playerImg1 = document.querySelector("#imageTwo");
  const playText2 = document.querySelector("#playerbox2");
  const playerImg = document.querySelector("#imageOne");
  const playText1 = document.querySelector("#playerbox");
  let matchHistory = document.querySelector("#match-result");
  matchHistory.innerHTML = "";
  selectmatch.value = "0";
  paperBtn.removeAttribute("disabled");
  rockBtn.removeAttribute("disabled");
  scissorBtn.removeAttribute("disabled");
  clickPlayBtn.removeAttribute("disabled");
  document.getElementById("playerOneScore").innerHTML = "";
  document.getElementById("playerTwoScore").innerHTML = "";
  playResult.textContent = "";
  playResult2.textContent = "";
  player1Counter = 0;
  player2Counter = 0;
  playerImg1.src = "assets/img/5.png";
  playerImg.src = "assets/img/6.png";
  playText1.innerHTML = "";
  playText2.innerHTML = "";
  GameCounter = 0
  // unlockOption.style.background = "blue";
});

let GameCounter = 0;
let player1Counter = 0;
let player2Counter = 0;

function resultFunction() {
  let playerOneScore = document.querySelector("#playerOneScore");
  let playerTwoScore = document.querySelector("#playerTwoScore");
  let playText1 = document.querySelector("#playerbox");
  let playText2 = document.querySelector("#playerbox2");
  let playResult = document.querySelector("#gameResult");
  let matchHistory = document.querySelector("#match-result");
  let matchGame = document.createElement("li");

  GameCounter++;

  if (playText1.innerHTML == "Paper" && playText2.innerHTML == "Paper") {
    playResult.innerHTML = "It's a Draw! Play Again";
    matchGame.innerHTML = `Game ${GameCounter} is a draw`;
    matchGame.style.paddingLeft = "none";
    matchHistory.appendChild(matchGame);
    matchHistory.style.paddingLeft = "none"
  } else if (playText1.innerHTML == "Rock" && playText2.innerHTML == "Rock") {
    playResult.innerHTML = "It's a Draw! Play Again";
    matchGame.innerHTML = `Game ${GameCounter} is a draw`;
    matchGame.style.paddingLeft = "none";
    matchHistory.appendChild(matchGame);
    matchHistory.style.paddingLeft = "none"
  } else if (
    playText1.innerHTML == "Scissor" &&
    playText2.innerHTML == "Scissor"
  ) {
    playResult.innerHTML = "It's a Draw! Play Again";
    matchGame.innerHTML = `Game ${GameCounter} is a draw`;
    matchGame.style.paddingLeft = "none";
    matchHistory.appendChild(matchGame);
    matchHistory.style.paddingLeft = "none"
  } else if (
    playText1.innerHTML == "Paper" &&
    playText2.innerHTML == "Scissor"
  ) {
    playResult.innerHTML = "2Player Score!";
    player2Counter++;
    playerTwoScore.textContent = player2Counter;
    matchGame.innerHTML = `Game ${GameCounter} 2P win`;
    matchGame.style.paddingLeft = "none";
    matchHistory.appendChild(matchGame);
    matchHistory.style.paddingLeft = "none"
  } else if (playText1.innerHTML == "Paper" && playText2.innerHTML == "Rock") {
    playResult.innerHTML = "1Player Score!";
    player1Counter++;
    playerOneScore.textContent = player1Counter;
    matchGame.innerHTML = `Game ${GameCounter} 1P win`;
    matchGame.style.paddingLeft = "none";
    matchHistory.appendChild(matchGame);
    matchHistory.style.paddingLeft = "none"
  } else if (
    playText1.innerHTML == "Scissor" &&
    playText2.innerHTML == "Rock"
  ) {
    playResult.innerHTML = "2Player Score!";
    player2Counter++;
    playerTwoScore.textContent = player2Counter;
    matchGame.innerHTML = `Game ${GameCounter} 2P win`;
    matchGame.style.paddingLeft = "none";
    matchHistory.appendChild(matchGame);
    matchHistory.style.paddingLeft = "none"
  } else if (
    playText1.innerHTML == "Scissor" &&
    playText2.innerHTML == "Paper"
  ) {
    playResult.innerHTML = "1Player Score!";
    player1Counter++;
    playerOneScore.textContent = player1Counter;
    matchGame.innerHTML = `Game ${GameCounter} 1P win`;
    matchGame.style.paddingLeft = "none";
    matchHistory.appendChild(matchGame);
    matchHistory.style.paddingLeft = "none"
  } else if (playText1.innerHTML == "Rock" && playText2.innerHTML == "Paper") {
    playResult.innerHTML = "2Player Score!";
    player2Counter++;
    playerTwoScore.textContent = player2Counter;
    matchGame.innerHTML = `Game ${GameCounter} 2P win`;
    matchGame.style.paddingLeft = "none";
    matchHistory.appendChild(matchGame);
    matchHistory.style.paddingLeft = "none"
  } else if (
    playText1.innerHTML == "Rock" &&
    playText2.innerHTML == "Scissor"
  ) {
    playResult.innerHTML = "1Player Score!";
    player1Counter++;
    playerOneScore.textContent = player1Counter;
    matchGame.innerHTML = `Game ${GameCounter} 1P win`;
    matchGame.style.paddingLeft = "none";
    matchHistory.appendChild(matchGame);
    matchHistory.style.paddingLeft = "none"
  }
}

function randomFunction() {
  const playerImg1 = document.querySelector("#imageTwo");
  const playText2 = document.querySelector("#playerbox2");
  randomizedNumber = Math.floor(Math.random() * 3 + 1);

  if (randomizedNumber == 1) {
    playerImg1.src = "assets/img/2.png";
    playText2.innerHTML = "Rock";
  } else if (randomizedNumber == 2) {
    playerImg1.src = "assets/img/3.png";
    playText2.innerHTML = "Paper";
  } else if (randomizedNumber == 3) {
    playerImg1.src = "assets/img/4.png";
    playText2.innerHTML = "Scissor";
  }
}
