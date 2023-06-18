const contact = () => {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contacts");
  const textAddress = document.createElement("p");
  textAddress.classList.add("textsContacts");
  textAddress.textContent = "Наш Адрес:г.Бишкек, ул.Юнусалиева №37";
  const phone = document.createElement("p");
  phone.classList.add("textsContacts");
  phone.textContent = "Тел:0702220385";
  contactContainer.append(textAddress, phone);
  return contactContainer;
};
export default contact;
