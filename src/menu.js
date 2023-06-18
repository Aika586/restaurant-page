import data from "./data.json";

const menu = () => {
  const menuFragment = document.createDocumentFragment();

  data.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    menuItem.appendChild(img);

    const h3 = document.createElement("h3");
    h3.textContent = item.title;
    menuItem.appendChild(h3);

    const describe = document.createElement("p");
    describe.textContent = item.describe;
    menuItem.appendChild(describe);

    const price = document.createElement("p");
    price.textContent = `ЦЕНА:${item.price}`;
    menuItem.appendChild(price);

    menuFragment.appendChild(menuItem);
  });

  return menuFragment;
};

export default menu;
