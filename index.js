// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Generate a random color
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
  document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the button is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressDisplay = document.getElementById('keyPressDisplay');
  keyPressDisplay.textContent = `Key pressed: ${event.key}`;
}

// Function to display user input in real-time
function displayUserInput() {
  const textInput = document.getElementById('textInput');
  const textInputDisplay = document.getElementById('textInputDisplay');
  textInputDisplay.textContent = textInput.value;
}

// Attach event listener to change background color when the button is clicked
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor);

// Attach event listener to reset background color when the button is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor);

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress);

// Attach event listener to display user input in real-time as they type
document
  .getElementById('textInput')
  .addEventListener('input', displayUserInput); 