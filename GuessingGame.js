//b1.style.backgroundColor = "rgb(200,200,200)"
var gameStyle = "hard"; // or "hard"
var boxColors = [];
var puzzleColor = {};
var tdElements = [];
var nosOfBoxes = 0;
var winner = -1;

generateBoard();
showBoard();


function generateBoard(){
    
    if(gameStyle==="easy"){
        nosOfBoxes = 3;  
        //pick one of the three as the puzzle question
        winner = myRand(2);
    }else if(gameStyle === "hard"){
        nosOfBoxes = 6;
        //pick one of the six as the puzzle question
        winner = myRand(5);
    }

    //generate rgb objects
    for(let i=0; i<nosOfBoxes; i++){
        boxColors[i] = generateRGB();
    }
    
    puzzleColor = boxColors[winner];
    printColorPicks();
}

function printColorPicks(){
    console.log("Printing colors picked:");

    boxColors.forEach(element => {
        console.log(element)
    });

    console.log("Puzzlecolor: " + JSON.stringify(puzzleColor));
}

function showBoard(){
    boxes = document.querySelectorAll(".colorbox");

    for(let i=0; i<boxes.length; i++){
        boxes[i].style.backgroundColor = colorString(boxColors[i]);
        boxes[i].addEventListener("click", function(){
            console.log("clicked box" + JSON.stringify(boxColors[i]));
            if(boxColors[i]===puzzleColor){
                console.log("You win");
            }else{
                console.log("Try again");

            }
        });
    }
}