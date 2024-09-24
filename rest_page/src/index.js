// src/index.js
import { createHome } from "./home";
import { createMenu } from "./menu";
import { createAbout } from "./about";

// Select buttons from the DOM
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about");

// Initial page load
createHome(); // Load the home page content initially
import("./styles/home.css"); // Load home styles

// Event listeners for buttons
homeButton.addEventListener("click", () => {
  createHome();
  import("./styles/home.css"); // Load home styles
});

menuButton.addEventListener("click", () => {
  createMenu();
  import("./styles/menu.css"); // Load menu styles
});

aboutButton.addEventListener("click", () => {
  createAbout();
  import("./styles/about.css"); // Load about styles
});
