//funcs stop, pause, and single start
//text() play 'if'
//alert on time ran out or 1000 score reached

var minutes = $("#mins");
var seconds = $("#secs");
var secondsTime = 0;
var minutesTime = 0;
var textValue = "";


// function startStopwatch(){
//
// }
reset.addEventListener("click", function(){
  textValue = resetButton.textContent;
  console.log(textValue);
  if (textValue === "Play"){
    setInterval(incrementTime, 1000);
    textValue = "Play Again";
  }
});

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
