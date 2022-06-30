var questionBankObj = [
    { //object contains the question, the index of the answer from choices, will give an Id to each choice associated to its position within the array.
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "JavaScript","terminal/bash","for loops","console.log"
        ],
        answer: 3
    },
    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        choices: [
            "commas", "curly brackets","quotes","parenthesis"
        ],
        answer: 2
    },
    {
        question: "Arrays in JavaScript can be used to store ________.",
        choices: [
           "numbers and strings","other arrays","booleans","all of the above"
        ], 
        answer:3
    },
        {
        question: "The condition in an if/else statement is enclosed with ________.",
        choices: [
            "quotes","parenthesis","curly brackets","square brackets"
        ],
        answer:1
    },
        {
        question: "Commonly used data types do NOT include:",
        choices: [
            "alerts","strings","booleans","numbers"
        ], 
        answer:0
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
    createQuestionStructure();
});
var body = document.body;
function createQuestionStructure(){
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
    buttonListEl.className = "answerContainer"
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
    questionContainer.appendChild(buttonListEl);
    buttonListEl.appendChild(button1);
    buttonListEl.appendChild(button2);
    buttonListEl.appendChild(button3);
    buttonListEl.appendChild(button4);
    // Add question and answer content to the page
    for (i = 0; i<questionBankObj.length;){
        h1El.textContent = questionBankObj[i].question;
        button1.textContent = "1. " + questionBankObj[i].choices[0];
        button2.textContent = "2. " + questionBankObj[i].choices[1];
        button3.textContent = "3. " + questionBankObj[i].choices[2];
        button4.textContent = "4. " + questionBankObj[i].choices[3];
        checkIfRight();
    }
}
function checkIfRight(){
    var button1 = document.querySelector("#choiceBtn1");
    var button2 = document.querySelector("#choiceBtn1");
    var button3 = document.querySelector("#choiceBtn1");
    var button4 = document.querySelector("#choiceBtn1");
    button1.addEventListener('click', function(){
       if (questionBankObj[i].choices[0] === questionBankObj[i].choices[questionBankObj[i].answer]){
        i++
        return
       } else {
        timeLeft -=10
        return
       }
    });
    button2.addEventListener('click', function(){
        if (questionBankObj[i].choices[0] === questionBankObj[i].choices[questionBankObj[i].answer]){
        i++
        return
       } else {
        timeLeft -=10
        return
       }
    });
    button3.addEventListener('click', function(){
       if (questionBankObj[i].choices[0] === questionBankObj[i].choices[questionBankObj[i].answer]){
        i++
        return
       } else {
        timeLeft -=10
        return
       }
    });
    button4.addEventListener('click', function(){
       if (questionBankObj[i].choices[0] === questionBankObj[i].choices[questionBankObj[i].answer]){
        i++
        return
       } else {
        timeLeft -=10
        return
       }
    });

}