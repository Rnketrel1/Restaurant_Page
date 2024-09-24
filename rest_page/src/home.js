// src/home.js
import "./styles/home.css";

export const createHome = () => {
  const container = document.querySelector("#content");

  // Clear existing content
  container.innerHTML = "";

  // Create and append home page content
  const header = document.createElement("h1");
  const para = document.createElement("p");

  header.textContent = "Welcome to Our Bakery!";
  para.textContent =
    "Step into a world filled with the delightful aromas of freshly baked goods! At our bakery, we invite you to indulge in an array of delicious pastries and artisanal breads that will make your taste buds dance with joy. Each day brings new flavors and creations that showcase our commitment to quality and creativity. Join us for a scrumptious treat and experience the magic of our bakery!";

  container.appendChild(header);
  container.appendChild(para);
};
