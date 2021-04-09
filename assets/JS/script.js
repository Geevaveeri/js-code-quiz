var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main-quiz-area");
var startBtn = document.getElementById("start-button");
var quizEl = document.getElementById("quiz");
var answerArea = document.getElementById("answerResults");
var currentQuestion = Math.min(0);
var correctAnswerTracker = 0;
var savedScore = [];
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

    var finalScore = timeLeft;

    var scoreContainer = document.createElement("div");
    scoreContainer.id = "quiz";
    // scoreContainer.setAttribute("display", "flex");

    mainEl.appendChild(scoreContainer);

    var allDone = document.createElement("h1");
    allDone.className = "all-done";
    allDone.textContent = "All Done!"

    scoreContainer.appendChild(allDone);

    var printScore = document.createElement("p");
    printScore.className = "print-score";
    printScore.textContent = "Your final score is " + finalScore + ".";
    printScore.setAttribute("style", "font-size: 25px;");

    scoreContainer.appendChild(printScore);

    var scoreInputForm = document.createElement("form");
    scoreInputForm.className = "score-form";


    scoreContainer.appendChild(scoreInputForm);

    var scoreInputText = document.createElement("p");
    scoreInputText.className = "score-text";
    scoreInputText.textContent = "Enter initials:";
    scoreInputText.setAttribute("style", "font-size: 25px;");

    scoreInputForm.appendChild(scoreInputText);

    var scoreInputBox = document.createElement("input");
    scoreInputBox.className = "score-box";


    scoreInputForm.appendChild(scoreInputBox);

    var scoreSubmit = document.createElement("button");
    scoreSubmit.className = "score-button";
    scoreSubmit.textContent = "Submit";


    scoreInputForm.appendChild(scoreSubmit);
    scoreSubmit.addEventListener("click", function (event) {
        event.preventDefault();
        var savedName = document.querySelector("input").value;
        var savedScoreObj = {
            name: savedName,
            score: finalScore
        };

        savedScore.push(savedScoreObj);
        localStorage.setItem("highscore", JSON.stringify(savedScore));
        window.location.href = "/highscore.html";


    })

};

// function to update high score

var loadScore = function () {
    savedScore = localStorage.getItem("highscore");
    if (!savedScore) {
        savedScore = [];
        return false;
    }

    savedScore = JSON.parse(savedScore);
};



// function that builds the quiz question and answer buttons
function buildQuiz() {
    if (currentQuestion >= 5) {

        gameOver();
    }
    else {
        var askQuestion = questions[currentQuestion].q;

        var quizEl = document.createElement("div");
        quizEl.id = "quiz";

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


        }
        currentQuestion++;
    }
};
// function that recognizes what is clicked and if it is correct or incorrect
var answerButtonHandler = function (event) {

    var targetEl = event.target;
    var correctAnswer = questions[correctAnswerTracker].a

    if (targetEl.matches(".answer-button")) {
        targetEl = targetEl.getAttribute("btn-id")
        if (targetEl === correctAnswer) {
            deleteElements();
            buildQuiz();
            document.getElementById("answerResults").innerHTML = "Correct!";


        } else {
            timeLeft = timeLeft - 10;
            deleteElements();
            buildQuiz();
            document.getElementById("answerResults").innerHTML = "Incorrect!";
        }
        correctAnswerTracker++;
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

loadScore();
// event listeners
startBtn.addEventListener("click", quizStart);
mainEl.addEventListener("click", answerButtonHandler);

