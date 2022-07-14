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
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above",],
    answer: 3,
  },
  {
    question: "The condition in an if/else statement is enclosed with ________.",
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
var viewHighScores = document.querySelector("#high-scores")
//array to hold scores for saving
var highScores = [];
//Start countdown and quiz after button is clicked
startQuiz.addEventListener("click", function () {
  countdown();
});
var timerEl = document.getElementById("countdown");
var timeLeft = 60;
function countdown() {
  var timeInterval = setInterval(function () {
    if (timeLeft > -1) {
      timerEl.textContent = "Time/Score: " + timeLeft;
      timeLeft--;
    } else {
      clearInterval(timeInterval);
      displayGameOver();
    }
  }, 1000);
}
//remove initial text
startQuiz.addEventListener("click", function () {
  var elem = document.getElementById("container");
  elem.remove();
});
//create the inintial structure of the quiz, including an element to hold the question and four buttons for the answers
var createQuizStructure = function () {
  var questionDiv = document.createElement("div");
  questionDiv.setAttribute("id", "container");
  body.appendChild(questionDiv);
  var question = document.createElement("h1");
  question.setAttribute("id", "question");
  questionDiv.appendChild(question);
  var button1 = document.createElement("button");
  button1.setAttribute("id", "button1");
  button1.setAttribute("class", "btn");
  questionDiv.appendChild(button1);
  var button2 = document.createElement("button");
  button2.setAttribute("id", "button2");
  button2.setAttribute("class", "btn");
  questionDiv.appendChild(button2);
  var button3 = document.createElement("button");
  button3.setAttribute("id", "button3");
  button3.setAttribute("class", "btn");
  questionDiv.appendChild(button3);
  var button4 = document.createElement("button");
  button4.setAttribute("id", "button4");
  button4.setAttribute("class", "btn");
  questionDiv.appendChild(button4);
  //event listeners to handle correct or incorrect answers
  button1.addEventListener("click", button1Clicked);
  button2.addEventListener("click", button2Clicked);
  button3.addEventListener("click", button3Clicked);
  button4.addEventListener("click", button4Clicked);
  nextQuestion();
};
var nextQuestion = function () {
  //identify the question and the answer buttons to populate with text content
  var question = document.querySelector("#question");
  var button1 = document.querySelector("#button1");
  var button2 = document.querySelector("#button2");
  var button3 = document.querySelector("#button3");
  var button4 = document.querySelector("#button4");
  //populate question and answers with text from questionBankObj
  question.textContent = questionBankObj[questionNumber].question;
  button1.textContent = questionBankObj[questionNumber].choices[0];
  button2.textContent = questionBankObj[questionNumber].choices[1];
  button3.textContent = questionBankObj[questionNumber].choices[2];
  button4.textContent = questionBankObj[questionNumber].choices[3];
};
//check if button1 was correct
var button1Clicked = function(){
  if (button1.textContent === questionBankObj[questionNumber].choices[questionBankObj[questionNumber].answer]){
    questionNumber++;
    if (questionNumber == questionBankObj.length) {
      displayGameOver();
    } 
    nextQuestion();
  } else {
    timeLeft-= 10;
    questionNumber++;
    if (questionNumber == questionBankObj.length) {
      displayGameOver();
    } 
    nextQuestion();
  }
}
//check if button2 was correct
var button2Clicked = function(){
  if (button2.textContent === questionBankObj[questionNumber].choices[questionBankObj[questionNumber].answer]) {
    questionNumber++;
    if (questionNumber == questionBankObj.length) {
      displayGameOver();
    } 
    nextQuestion();
  } else {
    timeLeft -= 10;
    questionNumber++;
    if (questionNumber == questionBankObj.length) {
      displayGameOver();
    } 
    nextQuestion();
  }
}
//check if button3 was correct
var button3Clicked = function(){
  if (button3.textContent === questionBankObj[questionNumber].choices[questionBankObj[questionNumber].answer]) {
    questionNumber++;
    if (questionNumber == questionBankObj.length) {
      displayGameOver();
    } 
    nextQuestion();
  } else {
    timeLeft -= 10;
    questionNumber++;
    if (questionNumber == questionBankObj.length) {
      displayGameOver();
    } 
    nextQuestion();
  }
}
//check if button4 was correct
var button4Clicked = function(){
  if (button4.textContent === questionBankObj[questionNumber].choices[questionBankObj[questionNumber].answer]) {
    questionNumber++;
    if (questionNumber == questionBankObj.length) {
      displayGameOver();
    } 
    nextQuestion();
  } else {
    timeLeft -= 10;
    questionNumber++;
    if (questionNumber == questionBankObj.length) {
      displayGameOver();
    } 
    nextQuestion();
  }
}
//remove question content and build final score submittal 
var displayGameOver = function(){
  var score = timeLeft;
  //remove question div and timer
  var elem = document.getElementById("container");
  elem.remove();
  timerEl.remove();
  if (score < 0){
    score = 0;
  };
  //create game over screen elements
  var doneScreen = document.createElement("div");
  doneScreen.setAttribute("id", "container");
  body.appendChild(doneScreen);
  var h1Elem = document.createElement("h1");
  h1Elem.textContent = "All done!"
  doneScreen.appendChild(h1Elem);
  var h2Elem = document.createElement("h2");
  h2Elem.setAttribute("id", "scoreDisplay")
  h2Elem.textContent = "Your final score is " + score;
  doneScreen.appendChild(h2Elem);
  var enterInitials = document.createElement("label");
  enterInitials.textContent = "Enter name: "
  doneScreen.appendChild(enterInitials);
  var submit = document.createElement("input");
  submit.setAttribute("type", "text");
  submit.setAttribute("autofocus", "true");
  submit.setAttribute("id", "initials");
  submit.setAttribute("name", "initials");
  doneScreen.appendChild(submit);
  var submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("class", "btn submit");
  submitBtn.textContent = "Submit";
  doneScreen.appendChild(submitBtn);
  //submit button event handler
  submitBtn.addEventListener("click", submitHandler);
}
//
var submitHandler = function(event){
  //re-initialize the score as a number that can be stored
  var score = document.getElementById("scoreDisplay").textContent;
  score = score.replace("Your final score is ", "");
  score = parseInt(score);
  //capture value of user input
  var initials = document.querySelector("input[name='initials']").value
  //create an object that links the name and score
  var scoreDataObj = {
    initials: initials,
    score: score
  }
  //push the data object to the highScores array
  highScores.push(scoreDataObj);
  document.getElementById("initials").value = "";
  localStorage.setItem("highScores", JSON.stringify(highScores));
  displayHighScores();
}
var displayHighScores = function(){
  //remove previous screen elements
  var elem = document.getElementById("container");
  var btn = document.getElementById("high-scores");
  elem.remove();
  timerEl.remove();
  btn.remove();
  // found this function to sort high scores at https://stackoverflow.com/questions/27178124/saving-objects-in-array-for-highscore-list
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });
  var scoreScreen = document.createElement("div");
  scoreScreen.setAttribute("id", "container");
  body.appendChild(scoreScreen);
  var h1Elem = document.createElement("h1");
  h1Elem.textContent = "High Scores";
  scoreScreen.appendChild(h1Elem);
  var listEl = document.createElement("ol");
  listEl.setAttribute("id", "scoreList")
  scoreScreen.appendChild(listEl);
  // found this forEach loop to generate an HTML list from a JavaScript Array here- https://getbutterfly.com/generate-html-list-from-javascript-array/
  highScores.forEach((highScores) => {
    var li = document.createElement("li");
    listEl.appendChild(li);
    li.textContent = highScores.initials + " - " + highScores.score;
  });
  //create buttons at high score page
  var backBtn = document.createElement("button");
  backBtn.setAttribute("class", "btn scoreScreen");
  backBtn.textContent = "Go back"
  scoreScreen.appendChild(backBtn);
  var clearBtn = document.createElement("button");
  clearBtn.setAttribute("class", "btn scoreScreen");
  clearBtn.textContent = "Clear high scores";
  scoreScreen.appendChild(clearBtn);
  backBtn.addEventListener("click", refreshPage);
  clearBtn.addEventListener("click", clearMem);
}
//refresh the page when the back button is clicked (brings user to beginning of quiz)
var refreshPage = function(){
  location.reload();
}
//replace the highScores array in local storage with an empty one, and remove the current scores from the page
var clearMem = function(){
  highScores = [];
  localStorage.setItem("highScores", JSON.stringify(highScores));
  var listEl = document.getElementById("scoreList")
  listEl.remove();
}
//populate the highScores array with the saved scores in local storage, to be displayed on the high score page
var loadScores = function(){
  var savedScores = localStorage.getItem("highScores");
  if (!savedScores){
    return false;
  }
  savedScores = JSON.parse(savedScores);
  for (var i = 0; i <savedScores.length; i++){
    highScores.push(savedScores[i]);
  }
}
startQuiz.addEventListener("click", createQuizStructure);
viewHighScores.addEventListener("click", displayHighScores);
loadScores();