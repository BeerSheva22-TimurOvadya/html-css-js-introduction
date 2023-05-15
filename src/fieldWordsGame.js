//configuration
const nMoves = {};

const riddles = [
    ["apple", "A common fruit"],
    ["bisons", "Large bovine animals"],
    ["cranes", "Tall birds or lifting machines"],
    ["daisies", "Common white flowers"],
    ["eaglets", "Young birds of prey"],
    ["fairies", "Mythical small human-like beings"],
    ["ghostly", "Of or like a ghost"],
    ["hinging", "Dependent on"],
    ["igloos", "Eskimo houses"],
    ["joker", "A person who is fond of joking"],
];

let correctWord = "";
let correctRiddle = "";
let guessedLetters = 0;
let guessedWord = false;

//elements
const riddleElement = document.getElementById("riddle");
const inputGroupElement = document.getElementById("input-group");
const guessLetterInputElement = document.getElementById("guess-letter-input");
const guessLetterButtonElement = document.getElementById("guess-letter-button");
const guessWordInputElement = document.getElementById("guess-word-input");
const guessWordButtonElement = document.getElementById("guess-word-button");
const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-button");

//global variables
let steps = 0;

//functions
function generateInputs() {
    inputGroupElement.innerHTML = "";
    for (let i = 0; i < correctWord.length; i++) {
        const input = document.createElement("input");
        input.classList.add("input-box");
        input.readOnly = true;
        inputGroupElement.appendChild(input);
    }
}

function game() {
    if (steps < nMoves[correctWord.length][0]) {
        const guess = guessLetterInputElement.value.toLowerCase();
        guessLetterInputElement.value = "";

        document.querySelectorAll(".input-box").forEach((input, index) => {
            if (correctWord[index] != guess) return;
            input.value = guess;
            input.style.backgroundColor = "green";
            guessedLetters++;
        });

        steps++;
        resultMessageElement.innerHTML = `Guess the letters in the word. You have ${
            Math.ceil(correctWord.length / 2) - steps
        } attempts left.`;

        if (steps != nMoves[correctWord.length][0]) return;

        resultMessageElement.innerHTML = "Letter guessing stage is over. Guess the word.";

        guessWordButtonElement.disabled = false;
        guessWordInputElement.disabled = false;

        guessLetterButtonElement.disabled = true;
        guessLetterInputElement.disabled = true;
    } else if (steps == nMoves[correctWord.length][0]) {
        const guess = guessWordInputElement.value.toLowerCase();
        guessWordInputElement.value = "";

        if (guess != correctWord) {
            resultMessageElement.innerHTML = "Sorry, game over. The word was: " + correctWord;
            finishGame();
            return;
        }

        guessedWord = true;
        resultMessageElement.innerHTML = "Congratulations, you guessed the word!";
        finishGame();
    }
}

function startGame() {
    for (let i = 0; i < riddles.length; i++) {
        const wordLength = riddles[i][0].length;
        nMoves[wordLength] = [Math.ceil(wordLength / 2), 1];
    }

    steps = 0;
    guessedLetters = 0;
    guessedWord = false;
    let randomIndex = Math.floor(Math.random() * riddles.length);
    correctWord = riddles[randomIndex][0];
    correctRiddle = riddles[randomIndex][1];
    riddleElement.innerHTML = correctRiddle;
    generateInputs();

    guessLetterButtonElement.disabled = false;
    guessLetterInputElement.disabled = false;

    guessWordButtonElement.disabled = true;
    guessWordInputElement.disabled = true;

    playAgainButtonElement.disabled = true;

    resultMessageElement.innerHTML = `Guess the letters in the word. You have ${Math.ceil(
        correctWord.length / 2 - steps,
    )} attempt`;
}

function finishGame() {
    guessLetterButtonElement.disabled = true;
    guessLetterInputElement.disabled = true;

    guessWordButtonElement.disabled = true;
    guessWordInputElement.disabled = true;

    playAgainButtonElement.disabled = false;
}

//Actions
guessLetterButtonElement.addEventListener("click", () => game(true));
guessWordButtonElement.addEventListener("click", () => game(false));
playAgainButtonElement.addEventListener("click", startGame);

startGame();
