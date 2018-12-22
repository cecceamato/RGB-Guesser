//funcs stop, pause, and single start
//text() play 'if'
//alert on time ran out or 1000 score reached

var seconds = document.querySelector("#secs");
var secondsTime = 0;
var textValue = "";


function startStopwatch(){
  stopwatch = setInterval(incrementTime, 1000);
  console.log(secondsTime);
}

function resetStopwatch(){
  clearInterval(stopwatch);
}


function incrementTime(){
  secondsTime ++;
  console.log(secondsTime);
  if (secondsTime < 10){
      seconds.textContent = "0" + secondsTime;
  } else seconds.text(secondsTime);

  if (secondsTime > 59){
    secondsTime = 0;
    seconds.text("0" + secondsTime);
  }
}
