const passwordView = document.getElementById('passwordView');
const wonView = document.getElementById('wonView');
const lostView = document.getElementById('lostView');
const checkButton = document.getElementById('checkButton');

// Hide a given element
function hide(element) {
    element.style.display = "none";
  }
  
  // Display a given element
  function show(element) {
    element.style.display = "block";
  }
hide(wonView);
hide(lostView);

const passwordEntered = passwordInput.value;
const secretCode = "1234567890"; 
let chanceRemaining = 3;
const tryAgainButton = document.getElementById("tryAgainButton");

checkButton.addEventListener("click", () => {
  const passwordEntered = passwordInput.value;

  if (passwordEntered === secretCode) {
    hide(passwordView);
    hide(lostView);
    show(wonView);
  } else {
    chanceRemaining--;

    if (chanceRemaining === 0) {
      hide(tryAgainButton);
    } else {
      tryAgainButton.textContent = Try again! (${chanceRemaining} chances left);
    }

    hide(passwordView);
    hide(wonView);
    show(lostView);
  }
});

tryAgainButton.addEventListener("click", () => {
  passwordInput.value = "";

  // Show the PASSWORD view and hide the LOST view
  hide(lostView);
  hide(wonView);
  show(passwordView);
});

checkButton.addEventListener('click', () => {
    const passwordEntered = passwordInput.value;

    if (passwordEntered === secretCode) {
        hide(passwordView);
        show(wonView);
    } else {
        hide(passwordView);
        show(lostView);
    } 
});