// Copy text to clipboard
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Text copied to clipboard");
  });
}

// Save text as a file
function saveTextAsFile(text, filename) {
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
}

// Event listeners for copy and save buttons
document.getElementById("copyEncryptButton").addEventListener("click", () => {
  const text = document.getElementById("encryptOutput").value;
  copyText(text);
});

document.getElementById("saveEncryptButton").addEventListener("click", () => {
  const text = document.getElementById("encryptOutput").value;
  saveTextAsFile(text, "encrypted.txt");
});

document.getElementById("copyDecryptButton").addEventListener("click", () => {
  const text = document.getElementById("decryptOutput").value;
  copyText(text);
});

document.getElementById("saveDecryptButton").addEventListener("click", () => {
  const text = document.getElementById("decryptOutput").value;
  saveTextAsFile(text, "decrypted.txt");
});
