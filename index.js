(async function () {
  let urlFilter = await chrome.storage.local.get("urlFilter");
  let key = await chrome.storage.local.get("key");
  let value = await chrome.storage.local.get("value");

  document.getElementById("urlFilter").value = urlFilter?.urlFilter ?? "";
  document.getElementById("key").value = key.key ?? "";
  document.getElementById("value").value = value.value ?? "";
  // Save the settings when the Save button is clicked
  document.getElementById("save-button").addEventListener("click", () => {
    // Get the settings from the form fields
    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;
    let urlFilter = document.getElementById("urlFilter").value;

    // Save the settings to Chrome's local storage
    chrome.storage.local.set({ value, key, urlFilter }, () => {
      // Show a message to indicate that the settings were saved
      document.getElementById("status").innerHTML = "Settings saved!";
    });
  });
})();
