import "./style.css";
import menu from "./menu.js";
import contact from "./contact.js";

const divheader = document.createElement("div");
divheader.classList.add("header");
const logoText = document.createElement("p");
logoText.id = "logo";
logoText.textContent = "КАФE AIBARS";
divheader.appendChild(logoText);

const navbar = () => {
  const navtext = [{ text: "Главная" }, { text: "Меню" }, { text: "Контакты" }];
  const ulnavbar = document.createElement("ul");
  ulnavbar.id = "navbar";
  navtext.forEach((text) => {
    const li = document.createElement("li");
    li.classList.add("links");
    li.textContent = text.text;
    ulnavbar.appendChild(li);
  });
  return ulnavbar;
};
divheader.appendChild(navbar());
document.body.append(divheader);

const maintext = () => {
  const mainDiv = document.createElement("div");
  mainDiv.classList.add("main-text");
  const text1 = document.createElement("p");
  text1.id = "text";
  text1.textContent = "Самая вкусная еда У НАС!";

  const secondtext = document.createElement("ul");
  const ultext = [
    { text: "Ташкентский плов" },
    { text: "Тандырные самсы" },
    { text: "Шашлык" },
    { text: "Манты, Лагман" },
  ];
  ultext.forEach((litext) => {
    const li = document.createElement("li");
    li.classList.add("li-text");
    li.textContent = litext.text;
    secondtext.appendChild(li);
  });
  const lasttext = document.createElement("p");
  lasttext.id = "lasttext";
  lasttext.textContent = "Закажите онлайн или приходите  к нам!";
  mainDiv.append(text1, secondtext, lasttext);
  return mainDiv;
};

const mainText = maintext();
const footerElement = footer();
document.body.append(mainText, footerElement);
const liElements = divheader.querySelectorAll(".links");
let menuContainer = null;
let contactContainer = null;

function clickhandler(e) {
  if (e.target.textContent === "Меню") {
    if (menuContainer) {
      return;
    }
    menuContainer = document.createElement("div");
    menuContainer.appendChild(menu());
    document.body.insertBefore(menuContainer, footerElement);
    mainText.style.display = "none";
    if (contactContainer) {
      document.body.removeChild(contactContainer);
      contactContainer = null;
    }
  } else if (e.target.textContent === "Главная") {
    if (menuContainer) {
      document.body.removeChild(menuContainer);
      menuContainer = null;
    }
    if (contactContainer) {
      document.body.removeChild(contactContainer);
      contactContainer = null;
    }
    mainText.style.display = "";
  } else if (e.target.textContent === "Контакты") {
    if (contactContainer) {
      return;
    }
    contactContainer = document.body.appendChild(contact());
    document.body.insertBefore(contactContainer, footerElement);
    mainText.style.display = "none";
    if (menuContainer) {
      document.body.removeChild(menuContainer);
      menuContainer = null;
    }
  }
}
liElements.forEach((item) => {
  item.addEventListener("click", clickhandler);
});

function footer() {
  const footertext = document.createElement("div");
  footertext.classList.add("footer");
  const copyrightsymbol = document.createTextNode(" Copyright \u00A9");
  footertext.appendChild(copyrightsymbol);
  footertext.textContent += "2023 Aikokul Chargynova";
  return footertext;
}
