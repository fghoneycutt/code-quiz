var questionBankObj = [
    { //object contains the question, the index of the answer from choices, will give an Id to each choice associated to its position within the array.
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: 3,
        choice: ["JavaScript", "terminal/bash", "for loops", "console.log"]
    },
    {
        question: "String values must be encolosed within _________ when being assigned to variables.",
        answer: 0,
        choice: ["quotes","commas", "curly brackets", "parenthesis"]
    },
    {
        question: "Arrays in JavaScript can be used to store _________.",
        answer: 3,
        choice: ["numbers and strings", "other arrays", "booleans", "all of the above"]
    },
    {
        question: "The condition in an if/else statement is enclosed with _________.",
        answer: 1,
        choice: ["quotes", "parenthesis", "curly brackets", "square brackets"]
    },
    {
        question: "Commonly used data types do NOT include:",
        answer: 2,
        choice: ["strings", "booleans", "alerts", "numbers"]
    }
];
var timerEl = document.getElementById('countdown');

var startQuiz = document.querySelector('#startBtn');

//Start countdown and quiz after button is clicked
startQuiz.addEventListener('click', function() {
    var timerEl = document.getElementById('countdown');
    function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
        } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
        } else {
        timerEl.textContent = "Time's Up!";
        clearInterval(timeInterval);
        }
    }, 1000);
    }
    countdown();
    loopThroughQuestions();
});
var body = document.body;
function loopThroughQuestions(){
    //remove intial text
    var remove = document.querySelector("#container");
    remove.parentNode.removeChild(remove);
    var questionContainer = document.createElement("div");
    body.appendChild(questionContainer);
    questionContainer.className = "container";
    // Create button list element
    var h1El = document.createElement("h1");
    questionContainer.appendChild(h1El);
    var buttonListEl = document.createElement("div");
    // Create ordered list items
    var button1 = document.createElement("button");
    button1.className = "answerChoice";
    button1.setAttribute('id', 'choiceBtn1')
    var button2 = document.createElement("button");
    button2.className = "answerChoice";
    button2.setAttribute('id', 'choiceBtn2')
    var button3 = document.createElement("button");
    button3.className = "answerChoice";
    button3.setAttribute('id', 'choiceBtn3')
    var button4 = document.createElement("button");
    button4.className = "answerChoice";
    button4.setAttribute('id', 'choiceBtn4')
    for (i = 0; i<questionBankObj.length; i++){
        h1El.textContent = questionBankObj[i].question;
        button1.textContent = "1. " + questionBankObj[i].choice[0];
        button2.textContent = "2. " + questionBankObj[i].choice[1];
        button3.textContent = "3. " + questionBankObj[i].choice[2];
        button4.textContent = "4. " + questionBankObj[i].choice[3];
        questionContainer.appendChild(buttonListEl);
        buttonListEl.appendChild(button1);
        buttonListEl.appendChild(button2);
        buttonListEl.appendChild(button3);
        buttonListEl.appendChild(button4);
        // var answer = document.getElementById('#choiceBtn');
        // answer.addEventListener('click', function() {
        //     // if the wrong answer was clicked, subtract 10 seconds and move on to the next question
        //     if (answer !== questionBankObj[i].choice[answer]){
        //         timeInterval - timeInterval - 10;
        //     }
        //  });
        document.getElementById('choiceBtn1').onclick = function(){
            console.log("Button 1 was clicked");
        }
        document.getElementById('choiceBtn2').onclick = function(){
            console.log("Button 2 was clicked");
        }
        document.getElementById('choiceBtn3').onclick = function(){
            console.log("Button 3 was clicked");
        }
        document.getElementById('choiceBtn4').onclick = function(){
            console.log("Button 4 was clicked");
        }
    }
}