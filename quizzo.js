// Game Level Info
const levels = {
  title: ["Level 1: Question 1", "Level 1: Question 2", "Level 2: Question 1", "Level 2: Question 2", "Level 3: Question 1", "Level 3: Question 2"],
  questions: ["What is the square root of 64?", "What is the square root of 144?", "15 - 10 = ?", "10 - (-2) = ?", "What is 10% of 100?", "What is 20% of 200?"],
  answers: [8, 12, 5, 12, 10, 40],
  hints: ["HINT: What number times itself is 64?", "HINT: What number times itself is 144?", "HINT: What is 15 take away 10?", "HINT: Subtracting a negative is the same as adding a positive.", "HINT: Here the word 'of' means multiplication. (BONUS HINT: Don't forget to change the % to a decimal)", "HINT: Here the word 'of' means multiplication. (BONUS HINT: Don't forget to change the % to a decimal)"]
}

// HTML Element Variables
const levelTitle = document.getElementById("level-title");
const quizQuestion = document.getElementById("quiz-question");
const inputEl = document.getElementById("quiz-input")
const submitBtn = document.getElementById("submit-btn");
const startButton = document.getElementById("start-btn");
const beginGameTxt = document.getElementById("begin-game-text");
const quizQuestionZone = document.getElementById("quiz-question-zone");
const nextBtn = document.getElementById("next-btn");
const feedbackEl = document.getElementById("feedback");
const pointsEl = document.getElementById("points");
const hintBtn = document.getElementById("hint-btn");

// Event Listeners
startButton.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", next);
hintBtn.addEventListener("click", hint);

// global variables
var levelNum = 0;
var points = 0;
let answerCorrect = false;
let hintGiven = false;
let gameOver = false;

// Game functions
// start game
function startGame() {
  levelTitle.innerText = levels["title"][levelNum];
  quizQuestion.innerText = levels["questions"][levelNum];
  quizQuestionZone.setAttribute("style", "");
  inputEl.value = "";
  beginGameTxt.innerText = '';

};

// check answer
function checkAnswer() {
  if (inputEl.value == levels["answers"][levelNum]) {
    feedbackEl.innerText = 'Correct!';
    if (levelNum < 5) {
      nextBtn.setAttribute("style", "");
      answerCorrect = true;
    } else { //game win
      gameOver = true;
      pointsEl.innerText = `Points: ${points * 100}`;
      feedbackEl.innerText = `Congrats! You won ${points * 100} points!!`;
    }
  } else {
    feedbackEl.innerText = 'Try again!';
    points -= 5;
    pointsEl.innerText = `Points: ${points}`;
  }
};

// next question
function next() {
    answerCorrect = false;
    hintGiven = false;
    inputEl.value = "";
    feedbackEl.innerText = "";
    nextBtn.setAttribute("style", "visibility: hidden");
    levelNum += 1;
    points += 10;
    levelTitle.innerText = levels["title"][levelNum];
    quizQuestion.innerText = levels["questions"][levelNum];
    pointsEl.innerText = `Points: ${points}`;
};


// give a hint & deduct points
function hint() {
  if (answerCorrect === false && hintGiven === false && gameOver === false) {
    points -= 10;
    hintGiven = true;
    feedbackEl.innerText = levels["hints"][levelNum];
    pointsEl.innerText = `Points: ${points}`;
  }
}
