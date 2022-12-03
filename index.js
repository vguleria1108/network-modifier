// Save the settings when the Save button is clicked
document.getElementById("save-button").addEventListener("click", () => {
  // Get the settings from the form fields
  let queryParam = document.getElementById("query-param-field").value;
  let queryValue = document.getElementById("query-value-field").value;

  // Save the settings to Chrome's local storage
  chrome.storage.local.set({ queryParam, queryValue }, () => {
    // Show a message to indicate that the settings were saved
    document.getElementById("status").innerHTML = "Settings saved!";
  });
});
