var scoreList = document.getElementById("highscore-list");
var clearScoreBtn = document.getElementById("clear-score-btn");

var highscores = [];
// function to create high score list
function renderHighScore() {

    highscores = localStorage.getItem("highscore");

    if (highscores === null) {
        return;
    }

    highscores = JSON.parse(highscores);
    console.log(highscores);

    for(var i = 0; i< highscores.length; i++){

    
    var scoreListItem = document.createElement("li");
    scoreListItem.setAttribute("style", "padding: 15px");

    scoreListItem.textContent = highscores[i].name + " - " + highscores[i].score;

    scoreList.appendChild(scoreListItem);

    }
};

// function to clear the scores
var clearScore = function(){
    highscores = [];

    localStorage.setItem("highscore", highscores);
    location.reload();
}



clearScoreBtn.addEventListener("click", clearScore)
renderHighScore();
