var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main-quiz-area");
var startBtn = document.getElementById("start-button");
var quizEl = document.getElementById("quiz");
var questions = [
    {
        q: "Commonly used data types DO Not Include:",
        o: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers"
        },
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
        a: "d"
    }
];

// function that controls the timer
function countdown() {
    var timeLeft = 75;

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

// function that builds question and answers elements
// function buildQuiz() {
//     var questionAmount = questions.length;
//     var askQuestion = questions.q;
//     for (var i = 0; i > questionAmount; i++) {
//         // create question element
//         var questionArea = document.createElement("h1");
//         questionArea.className = "quiz-question";
//         questionArea.textContent = askQuestion;


//         quizEl.appendChild(questionArea);
//         console.log(questionArea);
//     }
//     return quizEl;
// };

var deleteElements = function () {
    var elementSelected = document.querySelector(".starterP");
    elementSelected.remove();

    var elementSelected = document.querySelector("h1");
    elementSelected.remove();

    var elementSelected = document.querySelector("#start-button");
    elementSelected.remove();
}
// funcrtion to start the quiz
var quizStart = function () {
    deleteElements();
    buildQuiz();
    countdown();



    function buildQuiz() {
        var questionAmount = questions.length;

        for (var i = 0; i < questionAmount; i++) {
            var askQuestion = questions[i].q;
            var answerBtnTxt = questions[i].o;
            // create question element
            var questionArea = document.createElement("h1");
            questionArea.className = "quiz-question";
            questionArea.textContent = askQuestion;

            quizEl.appendChild(questionArea);

            var questionAnswer1 = document.createElement("button");
            questionAnswer1.className = "answer-button";
            questionAnswer1.textContent = answerBtnTxt.a;

            quizEl.appendChild(questionAnswer1);

            var questionAnswer2 = document.createElement("button");
            questionAnswer2.className = "answer-button";
            questionAnswer2.textContent = answerBtnTxt.b;

            quizEl.appendChild(questionAnswer2);

            var questionAnswer3 = document.createElement("button");
            questionAnswer3.className = "answer-button";
            questionAnswer3.textContent = answerBtnTxt.c;

            quizEl.appendChild(questionAnswer3);

            var questionAnswer4 = document.createElement("button");
            questionAnswer4.className = "answer-button";
            questionAnswer4.textContent = answerBtnTxt.c;

            quizEl.appendChild(questionAnswer4);


            debugger;
            break;
        }

    };

};

console.log(questions.length);
startBtn.addEventListener("click", quizStart);