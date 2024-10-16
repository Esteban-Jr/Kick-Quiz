const startQuizButton = document.getElementById("start-quiz-btn");
const nextQuestionButton = document.getElementById("next-question-btn");
const restartQuizButton = document.getElementById("restart-quiz-btn");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const questionNumberDisplay = document.querySelector(".question-number");
const questionTextDisplay = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");

let currentQuestionIndex = 0;
let correctAnswers = 0;
