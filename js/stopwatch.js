var seconds = document.querySelector("#secs");
var secondsTime = 0;
var stopper;


class Stopwatch{
  constructor(seconds, secondsTime){
    this.seconds = seconds;
    this.secondsTime = secondsTime;
  }

  start(){
    stopper = setInterval(this.incrementTime, 1000);
  }

  stop(){
    clearInterval(stopper);
  }

  maxScoreReached(){
    swal("You have reached the maximum score: " + score)
  }

  incrementTime(){
    secondsTime++;
    console.log(secondsTime);
    if (secondsTime < 10){
      seconds.textContent = "0" + secondsTime;
    } else seconds.textContent = secondsTime;

    if (secondsTime > 59){
      swal("You scored " + score + " points!");
      stopwatch.stop();
      gameCheck = true; //stop the game.
    }

    if (score >= 1000 && gameCheck == false){
      maxScoreReached();
    }

  }
}

var stopwatch = new Stopwatch(seconds, secondsTime);
