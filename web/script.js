function sayHello() {
  eel.say_hello_py("JavaScript")(function (response) {
    document.getElementById("helloMessage").innerText = response;
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    const main = document.querySelector("main");

    if (targetElement) {
      main.scrollTo({
        top: targetElement.offsetTop - main.offsetTop,
        behavior: "smooth",
      });
    }
  });
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

// Initialize the first screen
document.querySelectorAll("section").forEach((section, index) => {
  section.style.display = index === 0 ? "block" : "none";
});
