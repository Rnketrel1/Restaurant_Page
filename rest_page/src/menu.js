// src/menu.js
import "./styles/menu.css";

export const createMenu = () => {
  const container = document.querySelector("#content");

  // Clear existing content
  container.innerHTML = "";

  // Create and append menu content
  const header = document.createElement("h1");
  const para = document.createElement("p");

  header.textContent = "Our Menu";
  para.textContent =
    "Feast your eyes on our delectable menu, filled with a variety of baked goods to satisfy any craving! Here are some of our featured items:";

  const menuList = document.createElement("ul");
  menuList.innerHTML = `
    <li><strong>Signature Croissants:</strong> Flaky, buttery, and perfect for any time of day - $3.50</li>
    <li><strong>Chocolate Ganache Cake:</strong> Rich and decadent, made with the finest dark chocolate - $5.00</li>
    <li><strong>Lemon Tart:</strong> A zesty delight with a crisp crust and creamy lemon filling - $4.00</li>
    <li><strong>Blueberry Muffins:</strong> Moist and fluffy, bursting with fresh blueberries - $2.50</li>
    <li><strong>Artisan Breads:</strong> Handcrafted daily, with flavors including rosemary and garlic - $4.50</li>
    <li><strong>Seasonal Fruit Tarts:</strong> A colorful medley of fruits on a delicate pastry crust - $5.50</li>
    <li><strong>Cinnamon Rolls:</strong> Soft, gooey rolls topped with cream cheese frosting - $3.00</li>
    <li><strong>Espresso Bar:</strong> Pair your treats with a rich espresso or a velvety cappuccino - $2.75</li>
  `;

  container.appendChild(header);
  container.appendChild(para);
  container.appendChild(menuList);
};
