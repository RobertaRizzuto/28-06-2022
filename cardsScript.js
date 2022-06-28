const newEl = (el) => document.createElement(el);

const cardFormat = (parent, imgLink, title, price, count, category) => {
  const wrapperEl = newEl("div");
  const titleEl = newEl("h3");
  const priceEl = newEl("p");
  const imgEl = newEl("img");
  const countEl = newEl("p");
  const categoryEl = newEl("p");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  priceEl.className = "price";
  imgEl.className = "img";
  countEl.className = "count";
  categoryEl.className = "category";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title;
  categoryEl.textContent = "in: " + category;
  priceEl.textContent = "$" + price;
  countEl.textContent = "rated by: " + count;
  
  
  wrapperEl.append(imgEl, titleEl, priceEl, countEl, categoryEl);
  parent.appendChild(wrapperEl);
};

export { cardFormat };
