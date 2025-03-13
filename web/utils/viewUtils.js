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

// Hide/show key input based on selected cipher
document
  .getElementById("cipherSelectEncrypt")
  .addEventListener("change", () => {
    const cipher = document.getElementById("cipherSelectEncrypt").value;
    const keyInput = document.getElementById("encryptKey");
    const keyLabel = document.getElementById("encryptKeyLabel");

    if (cipher === "caesar") {
      keyInput.style.display = "block";
      keyLabel.style.display = "block";
    } else {
      keyInput.style.display = "none";
      keyLabel.style.display = "none";
    }
  });

document
  .getElementById("cipherSelectDecrypt")
  .addEventListener("change", () => {
    const cipher = document.getElementById("cipherSelectDecrypt").value;
    const keyInput = document.getElementById("decryptKey");
    const keyLabel = document.getElementById("decryptKeyLabel");

    if (cipher === "caesar") {
      keyInput.style.display = "block";
      keyLabel.style.display = "block";
    } else {
      keyInput.style.display = "none";
      keyLabel.style.display = "none";
    }
  });
