// Encrypt button event listener
document
  .getElementById("encryptButton")
  .addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent form submission
    const text = document.getElementById("encryptInput").value;
    const cipher = document.getElementById("cipherSelectEncrypt").value;
    const key = document.getElementById("encryptKey").value;
    const shift = parseInt(document.getElementById("encryptShift").value);
    const mode = "e"; // Encrypt mode

    try {
      if (!text) {
        throw new Error("Text to encrypt is empty");
      }
      if (cipher === "caesar" && isNaN(shift)) {
        throw new Error("Shift value must be a valid number");
      }
      if (cipher === "vernam" && !key) {
        throw new Error("Key is required for Vernam cipher");
      }
      if (cipher === "vernam" && key.length !== text.length) {
        throw new Error(
          "Key length should be equal to text length for Vernam cipher"
        );
      }

      let response;
      if (cipher === "caesar") {
        response = await eel.exposed_caesar_cipher(text, shift, mode)();
      } else if (cipher === "kamasutra") {
        response = await eel.exposed_kamasutra_cipher(text)();
      } else if (cipher === "vernam") {
        response = await eel.exposed_vernam_cipher(text, key, mode)();
      } else if (cipher === "morse") {
        response = await eel.exposed_morse_cipher(text, mode)();
      }
      document.getElementById("encryptOutput").value = response;
      showPopover("Encryption successful!");
    } catch (error) {
      console.error("Encryption error:", error);
      showPopover("Encryption failed: " + error.message, true);
    }
  });

// Decrypt button event listener
document
  .getElementById("decryptButton")
  .addEventListener("click", async (e) => {
    e.preventDefault(); // Prevent form submission
    const text = document.getElementById("decryptInput").value;
    const cipher = document.getElementById("cipherSelectDecrypt").value;
    const key = document.getElementById("decryptKey").value;
    const shift = parseInt(document.getElementById("decryptShift").value);
    const mode = "d"; // Decrypt mode

    try {
      if (!text) {
        throw new Error("Text to decrypt is required");
      }
      if (cipher === "caesar" && isNaN(shift)) {
        throw new Error("Shift value must be a valid number");
      }
      if (cipher === "vernam" && !key) {
        throw new Error("Key is required for Vernam cipher");
      }
      if (cipher === "vernam" && key.length !== text.length) {
        throw new Error(
          "Key length should be equal to text length for Vernam cipher"
        );
      }

      let response;
      if (cipher === "caesar") {
        response = await eel.exposed_caesar_cipher(text, shift, mode)();
      } else if (cipher === "kamasutra") {
        response = await eel.exposed_kamasutra_cipher(text)();
      } else if (cipher === "vernam") {
        response = await eel.exposed_vernam_cipher(text, key, mode)();
      } else if (cipher === "morse") {
        response = await eel.exposed_morse_cipher(text, mode)();
      }
      document.getElementById("decryptOutput").value = response;
      showPopover("Decryption successful!");
    } catch (error) {
      console.error("Decryption error:", error);
      showPopover("Decryption failed: " + error.message, true);
    }
  });

// Show popover
function showPopover(message, isError = false) {
  const popover = document.getElementById("popover");
  popover.textContent = message;
  popover.classList.add("show");
  popover.classList.add("animate");
  if (isError) {
    popover.style.borderColor = "var(--error)";
    popover.style.color = "var(--error)";
  } else {
    popover.style.borderColor = "var(--success)";
    popover.style.color = "var(--success)";
  }
  setTimeout(() => {
    popover.classList.remove("show");
    popover.classList.remove("animate");
  }, 3000);
}
