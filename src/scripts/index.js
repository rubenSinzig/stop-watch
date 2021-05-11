// Year for Copyright
const year = new Date().getFullYear();
const setYear = document.querySelector(".year");
setYear.innerHTML = year;

// Counter Variables
let seconds = 00;
let tens = 00;
let appendTens = document.querySelector("#tens");
let appendSeconds = document.querySelector("#seconds");
const startButton = document.querySelector("#button-start");
const stopButton = document.querySelector("#button-stop");
const resetButton = document.querySelector("#button-reset");
let interval;

// function for start counter
const startCounter = () => {
  tens++;

  if (tens < 9) {
    appendTens.innerHTML = `0${tens}`;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = `0${seconds}`;
    tens = 0; // reset the tens to zero
    appendTens.innerHTML = `0${tens}`; // reset the tens to zero in html
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
};

// Event listener for start, stop and reset
startButton.addEventListener("click", function () {
  interval = setInterval(startCounter);
});

stopButton.addEventListener("click", function () {
  clearInterval(interval);
});

resetButton.addEventListener("click", function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
});
