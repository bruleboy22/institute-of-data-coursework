function rollDice() {
  // Get the dice size from the input field
  var diceSize = parseInt(document.getElementById("dice-size").value);

  // Generate a random number between 1 and diceSize
  var randomNumber = Math.floor(Math.random() * diceSize) + 1;

  // Display the result
  document.getElementById("result").textContent = "You rolled: " + randomNumber;

  // Update the dice visual representation
  var diceElement = document.getElementById("dice");
  diceElement.className = "die";
  diceElement.classList.add("side-" + randomNumber);
}

// Add click event listener to the roll button
document.getElementById("roll-button").addEventListener("click", rollDice);
