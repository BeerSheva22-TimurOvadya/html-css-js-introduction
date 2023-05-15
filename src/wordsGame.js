//configuration
const nMoves = 6;

const words = ["apple", "bison", "crane", "daisy", "eagle", "fairy", "ghost", "hinge", "igloo", "joker"];
let correctWord = [];

//elements
const inputElements = [
    document.getElementById("input-id-1"),
    document.getElementById("input-id-2"),
    document.getElementById("input-id-3"),
    document.getElementById("input-id-4"),
    document.getElementById("input-id-5"),
];

const checkButtonElement = document.getElementById("check-id");
const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");

//global variables
let count = 0;

//functions
function game() {
    let guess = inputElements.map((input) => input.value);
    let correctGuess = true;
    guess.forEach((letter, index) => {
        if (letter == correctWord[index]) {
            inputElements[index].style.backgroundColor = "green";
        } else if (letter == "") {
            correctGuess = false;
            inputElements[index].style.backgroundColor = "gray";
        } else if (correctWord.includes(letter)) {
            correctGuess = false;
            inputElements[index].style.backgroundColor = "yellow";
        } else {
            correctGuess = false;
            inputElements[index].style.backgroundColor = "gray";
        }
    });
    if (correctGuess) {
        resultMessageElement.innerHTML = "Congratulations, you guessed the word!";
        finishGame();
    } else {
        count++;
        if (count == nMoves) {
            resultMessageElement.innerHTML = "Sorry, game over. The word was: " + correctWord;
            finishGame();
        } else {
            resultMessageElement.innerHTML = "You have " + (nMoves - count) + " tries left.";
        }
    }
}

function startGame() {
    count = 0;
    correctWord = words[Math.floor(Math.random() * words.length)];
    checkButtonElement.disabled = false;
    inputElements.forEach((input) => {
        input.readOnly = false;
        input.value = "";
        input.style.backgroundColor = "white";
    });
    resultMessageElement.innerHTML = "Guess the word in " + nMoves + " tries.";
    playAgainButtonElement.disabled = true;
}

function finishGame() {
    checkButtonElement.disabled = true;
    inputElements.forEach((input) => {
        input.readOnly = true;
    });
    playAgainButtonElement.disabled = false;
}

//Actions
checkButtonElement.addEventListener("click", game);
playAgainButtonElement.addEventListener("click", startGame);

inputElements.forEach((input, index) => {
    input.addEventListener("keyup", function (event) {
        if (event.key == "Enter" && count < nMoves) {
            game();
        }
        if (event.key == "ArrowLeft") {
            inputElements[index - 1].focus();            
        }
        if (event.key == "ArrowRight") {
            inputElements[index + 1].focus();            
        }
    });
});

startGame();
