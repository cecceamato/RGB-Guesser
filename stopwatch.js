//funcs stop, pause, and single start
//text() play 'if'
//alert on time ran out or 1000 score reached

var minutes = $("#mins");
var seconds = $("#secs");
var secondsTime = 0;
var minutesTime = 0;
var textValue = "";
var stopwatch = null;

// function startStopwatch(){
//
// }
// reset.addEventListener("click", function(){
//   // textValue = this.textContent;
//   // console.log(textValue);
//   if (this.textContent === "START"){
//     setInterval(incrementTime, 1000);
//     // textValue = "RESET";
//     // this.textContent = textValue;
//     this.textContent = "RESET";
//   } else {
//     playAgain();
//   }
// });

function startStopwatch(){
  stopwatch = setInterval(incrementTime, 1000);
}

function resetStopwatch(){
  clearInterval(stopwatch);
}


function incrementTime(){
  secondsTime ++;
  if (secondsTime < 10){
      seconds.text("0" + secondsTime);
  } else seconds.text(secondsTime);

  if (secondsTime > 59){
    secondsTime = 0;
    seconds.text("0" + secondsTime);
    minutesTime ++;
    minutes.text("0" + minutesTime);
  }
}
