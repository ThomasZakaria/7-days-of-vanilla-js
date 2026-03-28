calcBtn.addEventListener("click", () => {
  let daysPassed = Number(document.getElementById("daysPassed").value);
  let gbUsed = Number(document.getElementById("gbUsed").value);
  let percentage = (gbUsed / daysPassed) * 30;
  document.getElementById("resultDisplay").innerHTML = percentage;
  if (percentage >= 140) {
    document.getElementById("resultDisplay").style.color = "red";
  } else {
    resultDisplay.style.color = "black";
  }
});
