{
    /* <section class="input-group">
<input id="input-id">
<button id="go-id">GO!</button>
</section>
<div id = "square-id" class="square"></div>
<p id = "game-result"></p>
<button id="play-again-id">Play again</button> */
}

//configuration
const nMoves = 3;


//elements
const inputElement = document.getElementById("input-id");
const goButtonElement = document.getElementById("go-id");
const squareElement = document.getElementById("square-id");
const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");

//global variables
let count = 0;

//functions
function game() {
    const color = inputElement.value;
    if (color == squareElement.style.backgroundColor) {
        alert("this color was in the ");
    } else {
        squareElement.style.backgroundColor = color;
        count++;
        if (count == nMoves) {
            finishGame();
        }
    }
    inputElement.value = "";
}

function startGame() {
    count = 0;
    checkButtonElement.disabled = false;
    inputElement.readOnly = false;
    squareElement.style.backgroundColor = "white";
    resultMessageElement.innerHTML = "";
    playAgainButtonElement.hidden = true;
}

function finishGame() {
    checkButtonElement.disabled = true;
    inputElement.readOnly = true;
    playAgainButtonElement.hidden = false;
    resultMessageElement.innerHTML = "Congratulation, game is over";
}

//Actions
checkButtonElement.addEventListener("click", game);
playAgainButtonElement.addEventListener("click", startGame);
startGame();

