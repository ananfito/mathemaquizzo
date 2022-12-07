// Game Level Questions
const levels = {
  level: [1, 2, 3],
  questions: []

}

const levelOne = {
  title: "Level 1",
  question: ["What is the square root of 64?", "What is the square root of 144?"], 
  answer: [8, 12]
};

const levelTwo = {
  title: "Level 2",
  question: ["15 - 10 = ?", "10 - (-2) = ?"],
  answer: [5, 12]
};

const levelThree = {
  title: "Level 3",
  question: ["What is 10% of 100?", "What is 20% of 200?"],
  answer: [10, 40]
};

// HTML Element Variables
const levelTitle = document.getElementById("level-title");
const quizQuestion = document.getElementById("quiz-question");
const inputEl = document.getElementById("quiz-input")
const submitBtn = document.getElementById("submit-btn");
const startButton = document.getElementById("start-btn");
const beginGameTxt = document.getElementById("begin-game-text");
const quizQuestionZone = document.getElementById("quiz-question-zone");
const nextBtn = document.getElementById("next-btn");

// Event Listeners
startButton.addEventListener("click", startGame);
submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", next)

// Game functions
// start game
function startGame() {
  console.log("let the game begin"); //DEL
  levelTitle.innerText = "Level 1";
  quizQuestion.innerText = levelOne["question"][0];
  quizQuestionZone.setAttribute("style", "");
  beginGameTxt.setAttribute("style", "visibility: hidden");

};

console.log(levelOne["answer"][0]) //DEL 

// check answer
let answerCorrect = false;
function checkAnswer() {
  if (inputEl.value == levelOne["answer"][0]) {
    console.log("correct!");
    answerCorrect = true;
  } else {
    console.log("try again");
  }
};

// next question
function next() {
  if (answerCorrect === true) {
    console.log("next button clicked"); //DEL
    answerCorrect = false;

  };
};



