//TO IMPLEMENT:
//stopwatch with final score of 1000;

var squaresNum = 6; //Default Difficulty
var colors = generateRandomColors(squaresNum);
var squares = createDivs();//document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyDiff = document.querySelector("#easy");
var mediumDiff = document.querySelector("#medium");
// var hardDiff = document.querySelector("#hard");
var score = 0;
var scoreDisplay = document.querySelector("#scoreDisplay");
var gameCheck = false;
var sun = $(".fa-sun");
var body = $("body");

mediumDiff.classList.add("selected"); //default choice

easyDiff.addEventListener("click", function(){
  squaresNum = 3;
  gameCheck = false;
  easyDiff.classList.add("selected");
  mediumDiff.classList.remove("selected");
  // hardDiff.classList.remove("selected");
  deleteSquares();
  // scoreReset();
  showSquares(squaresNum);
  playAgain(squaresNum);
});


mediumDiff.addEventListener("click", function(){
  squaresNum = 6;
  gameCheck = false;
  easyDiff.classList.remove("selected");
  mediumDiff.classList.add("selected");
  // hardDiff.classList.remove("selected");
  deleteSquares();
  // scoreReset();
  showSquares(squaresNum);
  playAgain(squaresNum);
});

resetButton.addEventListener("click", function(){
  if (this.textContent == "Play Again?"){
    gameCheck = false;
    playAgain();
  } else{
    score = 0;
    scoreDisplay.textContent = score;
    playAgain();
  }
});

sun.on("click", function(){ //toggle color on sun icon
  body.toggleClass("lightTheme");
});

function createDivs(){
  for (var i = 0; i < squaresNum; i++){ //create squares
    $("#container").append("<div class='square'></div>");
  }
  return $(".square");}; //jQuery

function generateRandomColors(num){
  var arr = []; //add num to random colors array
  for (var i = 0; i < num; i++){ //get random color and push into array for NUM times
    arr.push(randomColor());
  }
  return arr; //return that array
}

function randomColor(){ //works fine
  //pick red, green and blue from 0 to 255
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length); //random number from 0 to 5;
  return colors[random];
}

function showSquares(squaresNum){
  colors = generateRandomColors(squaresNum);
  pickedColor = pickColor();
  for (var i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
}

function deleteSquares(){ //delete squares
  for (var i = 0; i < colors.length ; i++){
    squares[i].style.display = "none";
  }
}

function playAgain(){ //
  h1.style.backgroundColor = "steelblue"; //h1 backgroundColor go back to default
  colors = generateRandomColors(squaresNum); //generate new colors --- parameter for how many squares we want
  pickedColor = pickColor();
  resetButton.textContent = "Play";
  messageDisplay.textContent = "";
  colorDisplay.textContent = pickedColor; //show the rgb color to guess in span
  for (var i = 0; i < squares.length; i++){ //changes colors of the squares
    squares[i].style.backgroundColor = colors[i];
  }
}

function correctPick(clickedColor){
  messageDisplay.textContent = "Correct! +100";
  h1.style.backgroundColor = clickedColor;
  resetButton.textContent = "Play Again?";
  changeColorsToCorrectOne(clickedColor);
  // scoreIncrease();
}

function changeColorsToCorrectOne(color){
  for (var i = 0; i < squares.length; i++){  //change each color to match given color
    squares[i].style.backgroundColor = color;
  }
}

function initializer(){ //useful only once
  colorDisplay.textContent = pickedColor; //fill span with color to guess
  for (var i = 0; i < squaresNum; i++){ //fill the squares
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      if(!gameCheck){
        var clickedColor = this.style.backgroundColor;
      }else{
        var clickedColor = "";
      }
      if (clickedColor === pickedColor){
        gameCheck = true;
        correctPick(clickedColor);
      } else {
          if (!gameCheck){
            // if()
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again! -30";
            scoreDecrease();
          }
        }
      });//eventListener closure
  } //for loop closure
} //function closure

initializer();
