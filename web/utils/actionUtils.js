// Copy text to clipboard
function copyText(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      showPopover("Secret message copied to clipboard");
    })
    .catch((error) => {
      console.error("Copy error:", error);
      showPopover("Failed to copy text: " + error.message, true);
    });
}

// Save text as a file
function saveTextAsFile(text, filename) {
  try {
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    showPopover(`Encrypted message saved as ${filename}`);
  } catch (error) {
    console.error("Save error:", error);
    showPopover("Failed to save file: " + error.message, true);
  }
}

// Event listeners for copy and save buttons
document.getElementById("copyEncryptButton").addEventListener("click", (e) => {
  e.preventDefault();
  const text = document.getElementById("encryptOutput").value;
  if (text) {
    copyText(text);
  } else {
    showPopover("Encrypted message is empty", true);
  }
});

document.getElementById("saveEncryptButton").addEventListener("click", () => {
  const text = document.getElementById("encryptOutput").value;
  if (text) {
    saveTextAsFile(text, "encrypted.txt");
  } else {
    showPopover("Encrypted message is empty", true);
  }
});

// Show popover
function showPopover(message, isError = false) {
  const popover = document.getElementById("popover");
  popover.textContent = message;
  popover.classList.add("show");
  if (isError) {
    popover.style.borderColor = "var(--error)";
    popover.style.color = "var(--error)";
  } else {
    popover.style.borderColor = "var(--success)";
    popover.style.color = "var(--success)";
  }
  setTimeout(() => {
    popover.classList.remove("show");
  }, 3000);
}
