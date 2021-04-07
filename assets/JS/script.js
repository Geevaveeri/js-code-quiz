var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main-quiz-area");
var startBtn = document.getElementById("start-button");
var quizEl = document.getElementById("quiz");
var answerArea = document.getElementById("answerResults");
var currentQuestion = 0;
var timeLeft = 75;
var questions = [
    {
        q: "Commonly used data types DO Not Include:",
        o: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },

        // c
        a: "c"
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        o: {
            a: "JavaScript",
            b: "terminal/bash",
            c: "for loops",
            d: "console.log",
        },
        // d
        a: "d"
    },
    {
        q: "String values must be enclosed within _____ when being assigned to variables.",
        o: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parenthesis"
        },
        // c
        a: "c"
    },
    {
        q: "The condition in an if/else statement is enclosed with ____.",
        o: {
            a: "quotes",
            b: "curley brackets",
            c: "parenthesis",
            d: "square brackets"
        },
        // c
        a: "c"
    },
    {
        q: "Arrays in JavaScript can be used to store ____.",
        o: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above",
        },
        // d
        a: "d"
    }
];

// function that controls the timer
function countdown() {

    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            timerEl.textContent = "Time: " + timeLeft;

            timeLeft--;
        } else {
            timerEl.textContent = "Time: 0";

            clearInterval(timeInterval);
            gameOver();
        }

    }, 1000);
};

// function that calls end screen
var gameOver = function () {

};

function buildQuiz() {

    var askQuestion = questions[currentQuestion].q;

    var quizEl = document.createElement("div");
    quizEl.id = "quiz";
    quizEl.addEventListener("click", answerButtonHandler);

    mainEl.appendChild(quizEl);


    // create question element
    var questionArea = document.createElement("h1");
    questionArea.className = "quiz-question";
    questionArea.textContent = askQuestion;

    quizEl.appendChild(questionArea);

    var currentAnswers = questions[currentQuestion].o;


    for (const [key, value] of Object.entries(currentAnswers)) {

        var questionAnswer1 = document.createElement("button");
        questionAnswer1.className = "answer-button";
        questionAnswer1.textContent = value;
        questionAnswer1.setAttribute("btn-id", key);

        quizEl.appendChild(questionAnswer1);
        currentQuestion = 0;
        currentQuestion++;
    }

};

var answerButtonHandler = function (event) {
    var currentAnswer = 0;
    var targetEl = event.target;
    var correctAnswer = questions[currentAnswer].a
    
    if (targetEl.matches(".answer-button")) {
        targetEl = targetEl.getAttribute("btn-id")
        if (targetEl === correctAnswer) {
            deleteElements();
            buildQuiz();
            var printAnswer = document.createElement("h2");
            printAnswer.textContent = "Correct!"
            answerArea.appendChild(printAnswer);


        }else {
            deleteElements();
            buildQuiz();
            timeLeft = timeLeft - 10;
            var printAnswer = document.createElement("h2");
            printAnswer.textContent = "incorrect!"
            answerArea.appendChild(printAnswer);
        }
        console.log(correctAnswer);
        console.log(targetEl);
        currentAnswer++
        
    }
};

var deleteElements = function () {

    var elementSelected = document.querySelector("#quiz");
    elementSelected.remove();


}
// funcrtion to start the quiz
var quizStart = function () {
    deleteElements();
    buildQuiz();
    countdown();

};
// var changeQuiz = function() {
//     var oldQuestion = document.querySelector("#quiz-question");
//     var newQuestion = questions[]
// }


// event listeners
startBtn.addEventListener("click", quizStart);
quizEl.addEventListener("click", answerButtonHandler);


// buckles advice-
// I would do a for loop to generate the answers
// And if ur quiz is single page then I would loop to generate the questions and embed the answer generating for loop inside it
// If you're only showing one question at a time then either rerun the element generator on each new question with ur new data or be super big brain and update the existing elements in place