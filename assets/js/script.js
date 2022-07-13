var questionBankObj = [
  {
    //object contains the question, the index of the answer from choices, will give an Id to each choice associated to its position within the array.
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    answer: 3,
  },
  {
    question:
      "String values must be enclosed within ________ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store ________.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: 3,
  },
  {
    question:
      "The condition in an if/else statement is enclosed with ________.",
    choices: ["quotes", "parenthesis", "curly brackets", "square brackets"],
    answer: 1,
  },
  {
    question: "Commonly used data types do NOT include:",
    choices: ["alerts", "strings", "booleans", "numbers"],
    answer: 0,
  },
];
var startQuiz = document.querySelector("#startBtn");
var body = document.body;
var questionNumber = 0;
//Start countdown and quiz after button is clicked
var timeLeft = 60;
startQuiz.addEventListener("click", function () {
  countdown();
});
var timerEl = document.getElementById("countdown");
function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = "Time/Score: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "Time's Up!";
    }
  }, 1000);
}
//remove initial text
startQuiz.addEventListener("click", function () {
  var elem = document.getElementById("container");
  elem.remove();
});
var createQuizStructure = function () {
  var questionDiv = document.createElement("div");
  questionDiv.setAttribute("id", "container");
  body.appendChild(questionDiv);
  var question = document.createElement("h1");
  question.setAttribute("id", "question");
  questionDiv.appendChild(question);
  var button1 = document.createElement("button");
  button1.setAttribute("id", "button1");
  button1.setAttribute("class", "answerChoice");
  questionDiv.appendChild(button1);
  var button2 = document.createElement("button");
  button2.setAttribute("id", "button2");
  button2.setAttribute("class", "answerChoice");
  questionDiv.appendChild(button2);
  var button3 = document.createElement("button");
  button3.setAttribute("id", "button3");
  button3.setAttribute("class", "answerChoice");
  questionDiv.appendChild(button3);
  var button4 = document.createElement("button");
  button4.setAttribute("id", "button4");
  button4.setAttribute("class", "answerChoice");
  questionDiv.appendChild(button4);

  button1.addEventListener("click", button1Clicked);
  button2.addEventListener("click", button2Clicked);
  button3.addEventListener("click", button3Clicked);
  button4.addEventListener("click", button4Clicked);
  nextQuestion();
};
var nextQuestion = function () {
  var question = document.querySelector("#question");
  var button1 = document.querySelector("#button1");
  var button2 = document.querySelector("#button2");
  var button3 = document.querySelector("#button3");
  var button4 = document.querySelector("#button4");
  question.textContent = questionBankObj[questionNumber].question;
  button1.textContent = questionBankObj[questionNumber].choices[0];
  button2.textContent = questionBankObj[questionNumber].choices[1];
  button3.textContent = questionBankObj[questionNumber].choices[2];
  button4.textContent = questionBankObj[questionNumber].choices[3];
};
var button1Clicked = function(){
  if (button1.textContent === questionBankObj[questionNumber].choices[questionBankObj[questionNumber].answer]){
    questionNumber++;
    nextQuestion();
  } else {
    timeLeft-= 10;
    questionNumber++;
    nextQuestion();
  }
}
var button2Clicked = function(){
  if (button2.textContent === questionBankObj[questionNumber].choices[questionBankObj[questionNumber].answer]) {
    questionNumber++;
    nextQuestion();
  } else {
    timeLeft -= 10;
    questionNumber++;
    nextQuestion();
  }
}
var button3Clicked = function(){
  if (button3.textContent === questionBankObj[questionNumber].choices[questionBankObj[questionNumber].answer]) {
    questionNumber++;
    nextQuestion();
  } else {
    timeLeft -= 10;
    questionNumber++;
    nextQuestion();
  }
}
var button4Clicked = function(){
  if (button4.textContent === questionBankObj[questionNumber].choices[questionBankObj[questionNumber].answer]) {
    questionNumber++;
    nextQuestion();
  } else {
    timeLeft -= 10;
    questionNumber++;
    nextQuestion();
  }
}

startQuiz.addEventListener("click", createQuizStructure);
