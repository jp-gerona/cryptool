// Encrypt button event listener
document.getElementById("encryptButton").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  const text = document.getElementById("encryptInput").value;
  const cipher = document.getElementById("cipherSelectEncrypt").value;
  const key = document.getElementById("encryptKey").value;
  const shift = parseInt(document.getElementById("encryptShift").value);
  const mode = "e"; // Encrypt mode

  if (cipher === "caesar") {
    eel.exposed_caesar_cipher(
      text,
      shift,
      mode
    )(function (response) {
      document.getElementById("encryptOutput").value = response;
    });
  } else if (cipher === "kamasutra") {
    eel.exposed_kamasutra_cipher(text)(function (response) {
      document.getElementById("encryptOutput").value = response;
    });
  } else if (cipher === "vernam") {
    eel.exposed_vernam_cipher(
      text,
      key,
      mode
    )(function (response) {
      document.getElementById("encryptOutput").value = response;
    });
  } else if (cipher === "morse") {
    eel.exposed_morse_cipher(
      text,
      mode
    )(function (response) {
      document.getElementById("encryptOutput").value = response;
    });
  }
});

// Decrypt button event listener
document.getElementById("decryptButton").addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  const text = document.getElementById("decryptInput").value;
  const cipher = document.getElementById("cipherSelectDecrypt").value;
  const key = document.getElementById("decryptKey").value;
  const shift = parseInt(document.getElementById("decryptShift").value);
  const mode = "d"; // Decrypt mode

  if (cipher === "caesar") {
    eel.exposed_caesar_cipher(
      text,
      shift,
      mode
    )(function (response) {
      document.getElementById("decryptOutput").value = response;
    });
  } else if (cipher === "kamasutra") {
    eel.exposed_kamasutra_cipher(text)(function (response) {
      document.getElementById("decryptOutput").value = response;
    });
  } else if (cipher === "vernam") {
    eel.exposed_vernam_cipher(
      text,
      key,
      mode
    )(function (response) {
      document.getElementById("decryptOutput").value = response;
    });
  } else if (cipher === "morse") {
    eel.exposed_morse_cipher(
      text,
      mode
    )(function (response) {
      document.getElementById("decryptOutput").value = response;
    });
  }
});
