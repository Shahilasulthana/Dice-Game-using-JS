// Generate random numbers for both players
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Build image path like "dice1.png" to "dice6.png"
var randomImage1 = "./images/dice" + randomNumber1 + ".png";
var randomImage2 = "./images/dice" + randomNumber2 + ".png";

// Set the images
document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

// Update winner text
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").textContent = "🎲 It's a Draw!";
}
