
var btnP1 = document.getElementById("p1");
var btnP2 = document.getElementById("p2");
var btnReset = document.getElementById("reset");
var btnCount = document.getElementById("winNumber");

var p1output = document.getElementById("p1score");
var p2output = document.getElementById("p2score");
var winningScoreOutput = document.getElementById("winningScore");



var winningScore = document.getElementById("winNumber").value;
console.log("Winning Score is:" + winningScore);

btnP1.score = 0;
btnP2.score = 0;
btnP1.name = "P1";
btnP2.name = "P2";

btnP1.addEventListener("click", increment);
btnP2.addEventListener("click", increment);
btnReset.addEventListener("click", resetScores);
btnCount.addEventListener("click", setWinningScore);

function setWinningScore(){
    winningScore = document.getElementById("winNumber").value;
    console.log("Winning Score is:" + winningScore);
    p1output.classList.remove("greenText");
    p2output.classList.remove("greenText");
    displayScores();
}

function increment(){
    if((btnP1.score < winningScore) && (btnP2.score < winningScore)) {
        this.score++;
        console.log("incremented score for " + this.name);
        
        if(btnP1.score == winningScore){
            p1output.classList.add("greenText");
        }
        else if (btnP2.score == winningScore ){
            p2output.classList.add("greenText");
        }

        displayScores();
    }
    else{
        console.log("max score reached");
        
        //displayScores();
    }
        
}

function displayScores(){
    p1output.innerHTML = btnP1.score;
    p2output.innerHTML = btnP2.score;
    console.log("Wining score here is:"+ winningScore);
    winningScoreOutput.innerHTML = winningScore;

    
}

function resetScores(){
    btnP1.score = 0;
    btnP2.score = 0;
    p1output.classList.remove("greenText");
    p2output.classList.remove("greenText");
    displayScores();
    console.log("Scores reset done.");

}