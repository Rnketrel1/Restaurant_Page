// src/about.js
import "./styles/about.css";

export const createAbout = () => {
  const container = document.querySelector("#content");

  // Clear existing content
  container.innerHTML = "";

  // Create and append header and paragraph
  const header = document.createElement("h1");
  const para = document.createElement("p");

  header.textContent = "About Our Bakery";
  para.textContent =
    "Welcome to our charming bakery, where every treat is crafted with love and passion! Our skilled bakers use only the finest ingredients to create an array of mouth-watering pastries, breads, and desserts. From flaky croissants to decadent cakes, we believe in the art of baking and aim to bring joy to every bite. Whether you're here for a morning coffee or an afternoon delight, our bakery is a haven for anyone with a sweet tooth!";

  container.appendChild(header);
  container.appendChild(para);
};
