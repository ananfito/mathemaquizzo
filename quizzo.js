// Game Level Info
const levels = {
  title: ["Level 1: Question 1", "Level 1: Question 2", "Level 2: Question 1", "Level 2: Question 2", "Level 3: Question 1", "Level 3: Question 2"],
  questions: ["What is the square root of 64?", "What is the square root of 144?", "15 - 10 = ?", "10 - (-2) = ?", "What is 10% of 100?", "What is 20% of 200?"],
  answers: [8, 12, 5, 12, 10, 40];
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

var levelNum = 0;

// Event Listeners
startButton.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", next)

// Game functions
// start game
function startGame() {
  levelTitle.innerText = levels["title"][levelNum];
  quizQuestion.innerText = levels["questions"][levelNum];
  quizQuestionZone.setAttribute("style", "");
  beginGameTxt.setAttribute("style", "visibility: hidden");
  inputEl.value = "";

};

// check answer
let answerCorrect = false;
function checkAnswer() {
  if (inputEl.value == levels["answers"][levelNum]) {
    feedbackEl.innerText = 'Correct!';
    if (levelNum < 5) {
      nextBtn.setAttribute("style", "");
      answerCorrect = true;
    } else {
      pointsEl.innerText = "Points: 6";
      feedbackEl.innerText = 'Congrats! You won!!';
    }
  } else {
    feedbackEl.innerText = 'Try again!';
  }
};

// next question
function next() {
    answerCorrect = false;
    inputEl.value = "";
    feedbackEl.innerText = "";
    nextBtn.setAttribute("style", "visibility: hidden");
    levelNum += 1;
    levelTitle.innerText = levels["title"][levelNum];
    quizQuestion.innerText = levels["questions"][levelNum];
    pointsEl.innerText = `Points: ${levelNum}`;
};



