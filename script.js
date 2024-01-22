let total = 0;

function rollDice() {
  let dice = document.getElementById("dice");
  let diceImg = document.getElementById("diceImg");
  let diceNumber = Math.floor(Math.random() * 6) + 1;
  let nums = Math.trunc(diceNumber);

  dice.style.transform = "rotate(360deg)";
  setTimeout(() => {
    diceImg.src = `dice-${diceNumber}.png`;
    document.getElementById("numbers").innerText = nums;
    dice.style.transform = "rotate(0deg)";
  }, 100);

  total += diceNumber;
  if (total >= 100) {
    alert("You Won The Game");
    document.querySelector(".scoreBox").innerHTML = "Game Over";
    return;
  }
  document.querySelector(
    ".scoreBox"
  ).innerHTML = `Total Score: ${total}`;
}