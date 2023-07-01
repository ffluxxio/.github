// Initialize variables
let donutCount = 0;
let autoClickerCount = 0;
const autoClickerCost = 10;

// Get DOM elements
const clickButton = document.querySelector("#click-button");
const buttonImage = clickButton.querySelector('img');
const donutDisplay = document.querySelector("#donut-count");
const autoClickerDisplay = document.querySelector("#auto-clicker-count");
const buyAutoClickerButton = document.querySelector("#buy-auto-clicker");
const resetButton = document.querySelector('#reset-button');

// Add event listener to buy AutoClicker button
buyAutoClickerButton.addEventListener("click", () => {
  if (donutCount >= autoClickerCost) {
    donutCount -= autoClickerCost;
    autoClickerCount++;
    updateDonutDisplay();
    updateAutoClickerDisplay();
  }
});

// Add event listener to click button
clickButton.addEventListener("click", () => {
  donutCount++;
  updateDonutDisplay();
});


// Update donut display
function updateDonutDisplay() {
  donutDisplay.textContent = donutCount;
  if (donutCount >= autoClickerCost) {
    buyAutoClickerButton.disabled = false;
  } else {
    buyAutoClickerButton.disabled = true;
  }
}

// Update AutoClicker display
function updateAutoClickerDisplay() {
  autoClickerDisplay.textContent = autoClickerCount;
}

// Set interval for AutoClicker
setInterval(() => {
  donutCount += autoClickerCount;
  updateDonutDisplay();
}, 1000);

// Add to donut count
function addDonuts(amount) {
  donutCount += amount;
  updateDonutDisplay();
}

// Retrieve donut count
function getDonutCount() {
  return donutCount;
}

resetButton.addEventListener('click', () => {
  // Reset game state
  donutCount = 0;
  autoClickerCount = 0;

  // Update UI
  updateDonutDisplay();
  updateAutoClickerDisplay();
});


function changeImage() {
  if (buyAutoClickerButton.disabled = false) {
    buyAutoClickerButton.src = "sprinkle.gif";
  } else {
    buyAutoClickerButton.src = "sprinkle-off.gif";
  }
}


buyAutoClickerButton.addEventListener('click', () => {
  buttonImage.style.animation = 'rotate 2s linear';
  // Remove the animation when it completes so it can be triggered again
  setTimeout(() => {
    buttonImage.style.animation = '';
  }, 2000);
});
