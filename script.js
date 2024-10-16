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

// Questions
const questions = [
    {
    
      question:'Who is the G.O.A.T of football?',
      options:['Lionel Messi','Cristiano Ronaldo','Neymar Jr','Eden Hazard'],
      answer: 0
    },
    {
      question:'What is the best football league in the world?',
      options:['La Liga','Premier League','Ligue 1','Bundesliga'],
      answer: 1
    },
    {
    question:'Which country won the Euros 2024?',
      options:['France','England','Spain','Portugal'],
      answer: 2
    },
    {
      question:'Who won the Copa America 2024?',
      options:['Colombia','Uruguay','Canada','Argentina'],
      answer: 3
    },
    {
      question:'Who has the most Ballon d\'Ors?',
      options:['Lionel Messi','Lev Yashin','Johan Cruyff','Zinedine Zidane'],
      answer: 0
    },
    {
      question:'What football club has the most Champions league trophies?',
      options:['Barcelona','Real Madrid','Chelsea','Arsenal'],
      answer: 1
    },
    {
      question:'How many World Cups have there been?',
      options:['54','17','22','31'],
      answer: 2
    },
    {
      question:'Who is the All time Premier League goal scorer?',
      options:['Harry Kane','Sergio Aguero','Frank Lampard','Alan Shearer'],
      answer: 3
    },
    {
      question:'Who is the most decorated player of all time?',
      options:['Lionel Messi','Dani Alves','Andres Iniesta','David Alaba'],
      answer: 0
    },
    {
      question:'What month do the top european leagues start?',
      options:['May','August','July','September'],
      answer: 1
    }
];

startQuizButton.addEventListener("click", beginQuiz);
nextQuestionButton.addEventListener("click", loadNextQuestion);
restartQuizButton.addEventListener("click", restartQuiz);

function beginQuiz() {
    homeBox.classList.add("hide");
    quizBox.classList.remove("hide");
    loadNextQuestion();
}

function loadNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionNumberDisplay.innerHTML = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionTextDisplay.innerHTML = currentQuestion.question;
    optionContainer.innerHTML = ""; // Clear previous options

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("div");
        optionElement.innerHTML = option;
        optionElement.classList.add("option");
        optionElement.addEventListener("click", () => selectOption(index));
        optionContainer.appendChild(optionElement);
    });

}
