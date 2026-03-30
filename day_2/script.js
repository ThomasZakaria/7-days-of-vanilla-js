const year2027 = new Date(2027, 0, 1);

let intervalId = setInterval(() => {
  const currentTime = new Date();
  let counter = year2027 - currentTime;

  let totalSeconds = Math.floor(counter / 1000);

  let days = Math.floor(totalSeconds / (60 * 60 * 24));

  let hours = Math.floor(totalSeconds / 3600) % 24;

  let mins = Math.floor(totalSeconds / 60) % 60;
  let secs = totalSeconds % 60;

  let display = days + "d " + hours + "h " + mins + "m " + secs + "s";

  document.getElementById("countdown").innerHTML = display;
}, 1000);
