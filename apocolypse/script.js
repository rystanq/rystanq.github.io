// Function to toggle button colors (manual control)
function ManualToggle(button) {
  // Use the button passed as an argument (this)
  if (button.getAttribute("class") === "status-on") {
    button.setAttribute("class", "status-off"); // Stop flow
  } else {
    button.setAttribute("class", "status-on"); // Start flow
  }
}

// Function to save input data to localStorage
function saveData() {
  // Get input values
  const gate = document.getElementById("gateInput").value;
  const format = document.getElementById("formatInput").value;
  const amount = document.getElementById("amountInput").value;

  // Validate input
  if (!gate || !format || !amount) {
    alert("Please fill in all fields!");
    return;
  }

  // Create data object
  const data = {
    gate: gate,
    format: format,
    amount: amount,
  };

  // Save to localStorage
  localStorage.setItem("waterData", JSON.stringify(data));

  // Display saved data
  displaySavedData();
}

// Function to display saved data
function displaySavedData() {
  const savedData = JSON.parse(localStorage.getItem("waterData"));
  const outputElement = document.getElementById("savedData");

  if (savedData) {
    outputElement.textContent = JSON.stringify(savedData, null, 2);
  } else {
    outputElement.textContent = "No data saved yet.";
  }
}

// Display saved data on page load
displaySavedData();
