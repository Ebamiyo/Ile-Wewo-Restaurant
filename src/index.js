import "./styles.css";
import logo from "./logo.js";
import home from "./home-page.js";
import menu from "./menu.js";
import contact from "./contact-us.js";

logo();

const homeBtn = document.getElementById("home-page");
homeBtn.textContent = "Home";

const contentDiv = document.getElementById("content");
homeBtn.addEventListener("click", (event) => {
  contentDiv.innerHTML = " ";
  contentDiv.classList.remove("main-content-div", "main-content-div-contact");

  home();
});

const menuBtn = document.getElementById("menu-page");
menuBtn.textContent = "Menu";

menuBtn.addEventListener("click", () => {
  contentDiv.innerHTML = " ";
  contentDiv.classList.remove("main-content-div-contact");
  menu();
});

const contactBtn = document.getElementById("contact-page");
contactBtn.textContent = "Contact Us";

contactBtn.addEventListener("click", () => {
  contentDiv.innerHTML = " ";
  contentDiv.classList.remove("main-content-div");
  contact();
});
