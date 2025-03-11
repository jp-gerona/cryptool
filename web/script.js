function sayHello() {
  eel.say_hello_py("JavaScript")(function (response) {
    document.getElementById("helloMessage").innerText = response;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("helloButton").addEventListener("click", sayHello);
});

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
