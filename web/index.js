// Encrypt button event listener
document.getElementById("encryptButton").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  const text = document.getElementById("encryptInput").value;
  const shift = parseInt(document.getElementById("encryptKey").value);
  const mode = "e"; // Encrypt mode

  eel.exposed_caesar_cipher(
    text,
    shift,
    mode
  )(function (response) {
    document.getElementById("encryptOutput").value = response;
  });
});

// Decrypt button event listener
document.getElementById("decryptButton").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  const text = document.getElementById("decryptInput").value;
  const shift = parseInt(document.getElementById("decryptKey").value);
  const mode = "d"; // Decrypt mode

  eel.exposed_caesar_cipher(
    text,
    shift,
    mode
  )(function (response) {
    document.getElementById("decryptOutput").value = response;
  });
});
