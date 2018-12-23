//funcs stop, pause, and single start
//text() play 'if'
//alert on time ran out or 1000 score reached

var seconds = document.querySelector("#secs");
var secondsTime = 0;


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
  } else seconds.textContent = secondsTime;

  if (secondsTime > 59){
    alert("Time is up!");
    resetStopwatch();
  }
}
