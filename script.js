import { cardFormat } from "./cardsScript.js";

const userLogIn = prompt("Please insert your username");
const newEl = (el) => document.createElement(el);
const $body = document.body;
const BASE_URL = "https://fakestoreapi.com/products";

const headerEl = newEl("nav");
const helloEl = newEl("h3");
const welcomeEl = newEl("p");
const oneOfUsEl = newEl("p");
const notOneOfUsEl = newEl("p");
const contentEl = newEl("main");
const availabletitleEl = newEl("h4");
const availableEl = newEl("section");
const helloElTwo = newEl("h3");
const footerEl = newEl("footer");

headerEl.className = "navBar";
helloEl.className = "hello";
welcomeEl.className = "welcome";
oneOfUsEl.className = "one_of_us";
notOneOfUsEl.className = "not_one_of_us";
availableEl.className = "available";
availabletitleEl.className = "available_h2";
contentEl.className = "main_content";
footerEl.className = "footerBar";

helloEl.textContent = `Hi ${userLogIn}!`;
welcomeEl.textContent = "Welcome to your personal shopping page";
oneOfUsEl.textContent =
  "You are one of us now, contratulations! Enjoy some shopping suggestions ";
notOneOfUsEl.textContent =
  "Seems like you're not one of us yet, but we are gonna make up for that! Try to refresh this page and insert your username again ;)";
;




headerEl.append(helloEl);
$body.appendChild(headerEl);
contentEl.appendChild(availableEl);
$body.appendChild(contentEl);
footerEl.append(helloElTwo);
$body.appendChild(footerEl);

try {
  if (localStorage.getItem("username") !== userLogIn) {
    headerEl.append(notOneOfUsEl);
    console.error(notOneOfUsEl.textContent);
    throw error;
  } else {
    headerEl.append(welcomeEl);
    headerEl.append(oneOfUsEl);
  }
} catch (error) {
  localStorage.setItem("username", userLogIn);
}

// # Esercizio
// Sulla base della lezione del giorno, riprendendo la pagina (header) di ieri:
// - Aggiunge anche un footer (magari identico all'header se volete)
// - Header e Footer devono contenere Nome Utente e il numero totale dei prodotti renderizzati
// - Aggiungere section alla pagina che renderizza delle cards:
// - - https://fakestoreapi.com/products
// - - Filtro per quantità di prodotto disponisible superiore a 200
// - - Stile CSS a scelta

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    const filteredProduct = data
      .filter((product) => product.rating.count >= 200)
      .map((product) =>
        cardFormat(
          availableEl,
          product.image,
          product.title,
          product.price,
          product.rating.count
        )
      );headerEl.appendChild(availabletitleEl)
    availabletitleEl.textContent = `available product: ${filteredProduct.length}`
    helloElTwo.textContent = `${userLogIn}, number of products you saw today: ${filteredProduct.length}`;
  });
