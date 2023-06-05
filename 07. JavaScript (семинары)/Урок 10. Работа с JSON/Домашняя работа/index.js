import { loadData } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
  let rangeStart = 1;
  let rangeEnd = 11;
  let headers = [];
  let products = [];
  let loading = false;
  let ajaxRequests = 0;
  let loadedProducts = 0;

  const apiKey = "AIzaSyBE_nCFGQK8LnQDJlB1GmStFQhWe4Sbrp4"
  const spreadsheetId = "1oWDIHPSkir03arfVHHRUm2fX_Vh_dxOCJxlwrSprNyg"
  const listName = "GB"

  const infoElement = document.getElementById("ajax-info");

  function updateInfo() {
    ajaxRequests++; 
    infoElement.textContent = `Произведено ${ajaxRequests} AJAX запросов и загружено ${loadedProducts} строк.`;
  }

  function createProductCard(headers, product) {
    const card = document.createElement("li");
    card.classList.add("product-item");

    const name = document.createElement("h3");
    name.textContent = headers[0] + ":\n" + product[0];
    name.style.whiteSpace = "pre-wrap";
    card.appendChild(name);

    const price = document.createElement("p");
    price.textContent = headers[1] + ": " + product[1] + " руб.";
    card.appendChild(price);

    const image = document.createElement("img");
    image.src = product[2];
    card.appendChild(image);

    return card;
  }

  function onSuccess(values) {
    if (headers.length === 0) {
      headers = values[0];
    }

    if (values && Array.isArray(values) && values.length > 1) {
      products = values.slice(1);
    } else {
      return;
    }

    const productCardContainer = document.querySelector(
      ".product-card-container"
    );
    const productCard = document.querySelector(".product-card");

    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    leftArrow.addEventListener("click", () => {
      productCardContainer.scrollLeft -= 200;
    });

    rightArrow.addEventListener("click", () => {
      productCardContainer.scrollLeft += 200;
    });

    const fragment = document.createDocumentFragment();
    products.forEach((product) => {
      const card = createProductCard(headers, product);
      fragment.appendChild(card);
    });
    productCard.appendChild(fragment);

    if (productCard.children.length === 0) {
      productCard.style.width = products.length * 210 + "px";
    }
    loading = false;

    loadedProducts += products.length;
    updateInfo();
  }

  function onError(status) {
    console.error("Ошибка при получении данных:", status);
  }

  function checkLoadMore() {
    const productCardContainer = document.querySelector(
      ".product-card-container"
    );
    if (
      !loading &&
      productCardContainer.scrollLeft + productCardContainer.offsetWidth >=
        productCardContainer.scrollWidth
    ) {
      loading = true;
      const nextRowCount = 10;
      rangeStart = rangeEnd;
      rangeEnd += nextRowCount;
      loadData(rangeStart, rangeEnd, apiKey, spreadsheetId, listName, onSuccess, onError);
      productCard.style.width = products.length * 210 + "px";
    }
  }

  const productCardContainer = document.querySelector(".product-card-container");
  productCardContainer.addEventListener("scroll", checkLoadMore);

  loadData(rangeStart, rangeEnd, apiKey, spreadsheetId, listName, onSuccess, onError);
});
