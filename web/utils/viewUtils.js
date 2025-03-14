// Initialize the first screen
document.querySelectorAll("section").forEach((section, index) => {
  section.style.display = index === 0 ? "block" : "none";
});

// Navigation between sections
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.innerText.toLowerCase();
    const targetSection = document.querySelector(
      `#screen-${targetId === "encrypt" ? 2 : targetId === "decrypt" ? 3 : 1}`
    );
    document.querySelectorAll("section").forEach((section) => {
      section.style.display = "none";
    });
    targetSection.style.display = "block";
  });
});

// Go Back button event listeners
document.querySelectorAll("button").forEach((button) => {
  if (button.innerText === "Go Back") {
    button.addEventListener("click", () => {
      document.querySelectorAll("section").forEach((section) => {
        section.style.display = "none";
      });
      document.querySelector("#screen-1").style.display = "block";
    });
  }
});

// Exit button event listener
document.getElementById("exitButton").addEventListener("click", () => {
  eel.close_application();
  window.close();
});

// Hide/show key input based on selected cipher
document
  .getElementById("cipherSelectEncrypt")
  .addEventListener("change", () => {
    const cipher = document.getElementById("cipherSelectEncrypt").value;
    const shiftInput = document.getElementById("encryptShift");
    const shiftLabel = document.querySelector('label[for="encryptShift"]');
    const keyInput = document.getElementById("encryptKey");
    const keyLabel = document.querySelector('label[for="encryptKey"]');

    if (cipher === "caesar") {
      shiftInput.style.display = "block";
      shiftLabel.style.display = "block";
      keyInput.style.display = "none";
      keyLabel.style.display = "none";
    } else if (cipher === "vernam") {
      keyInput.style.display = "block";
      keyLabel.style.display = "block";
      shiftInput.style.display = "none";
      shiftLabel.style.display = "none";
    } else {
      shiftInput.style.display = "none";
      shiftLabel.style.display = "none";
      keyInput.style.display = "none";
      keyLabel.style.display = "none";
    }
  });

document
  .getElementById("cipherSelectDecrypt")
  .addEventListener("change", () => {
    const cipher = document.getElementById("cipherSelectDecrypt").value;
    const shiftInput = document.getElementById("decryptShift");
    const shiftLabel = document.querySelector('label[for="decryptShift"]');
    const keyInput = document.getElementById("decryptKey");
    const keyLabel = document.querySelector('label[for="decryptKey"]');

    if (cipher === "caesar") {
      shiftInput.style.display = "block";
      shiftLabel.style.display = "block";
      keyInput.style.display = "none";
      keyLabel.style.display = "none";
    } else if (cipher === "vernam") {
      keyInput.style.display = "block";
      keyLabel.style.display = "block";
      shiftInput.style.display = "none";
      shiftLabel.style.display = "none";
    } else {
      shiftInput.style.display = "none";
      shiftLabel.style.display = "none";
      keyInput.style.display = "none";
      keyLabel.style.display = "none";
    }
  });
