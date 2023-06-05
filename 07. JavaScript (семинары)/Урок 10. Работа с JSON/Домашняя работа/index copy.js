document.addEventListener("DOMContentLoaded", function () {
    let rangeStart = 1; // Начальное значение диапазона загрузки
    let rangeEnd = 11; // Количество строк для загрузки
    let headers = []; // Массив для хранения загруженных заголовков
    let products = []; // Массив для хранения загруженных товаров
    let loading = false; // Флаг для предотвращения повторной загрузки данных
  
    let productCard; // Переменная для хранения ссылки на элемент с классом "product-card"
  
    let ajaxRequests = 0; // Счетчик AJAX запросов
    let loadedProducts = 0; // Счетчик загруженных продуктов
  
    const apiKey = "AIzaSyBE_nCFGQK8LnQDJlB1GmStFQhWe4Sbrp4"
    const clientId = "1oWDIHPSkir03arfVHHRUm2fX_Vh_dxOCJxlwrSprNyg"
    const listName = "GB"
    
    const infoElement = document.getElementById("ajax-info");
  
    // Функция для обновления информации о AJAX запросах и загруженных продуктах
    function updateInfo() {
      infoElement.textContent = `Произведено ${ajaxRequests} AJAX запросов и загружено ${loadedProducts} строк.`;
    }
  
    // Создание карточки товара на основе заголовков
    function createProductCard(headers, product) {
      const card = document.createElement("li");
      card.classList.add("product-item");
  
      const name = document.createElement("h3");
      name.textContent = headers[0] + ":\n" + product[0]; // Добавляем перевод строки после заголовка
      name.style.whiteSpace = "pre-wrap"; // Задаем значение white-space
      card.appendChild(name);
  
      const price = document.createElement("p");
      price.textContent = headers[1] + ": " + product[1] + " руб.";
      card.appendChild(price);
  
      const image = document.createElement("img");
      image.src = product[2];
      card.appendChild(image);
  
      return card;
    }
  
    // Выполнение AJAX-запроса к API
    function loadData() {
      ajaxRequests++; // Увеличиваем счетчик AJAX запросов
  
      const xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        `https://sheets.googleapis.com/v4/spreadsheets/${clientId}/values/${listName}!A${rangeStart}:C${rangeEnd}?key=${apiKey}`
      );
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const values = data.values;
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
            productCard = document.querySelector(".product-card"); // Сохранение ссылки на элемент с классом "product-card"
  
            // Добавление обработчиков событий для стрелок
            const leftArrow = document.querySelector(".left-arrow");
            const rightArrow = document.querySelector(".right-arrow");
  
            leftArrow.addEventListener("click", () => {
              productCardContainer.scrollLeft -= 200;
            });
  
            rightArrow.addEventListener("click", () => {
              productCardContainer.scrollLeft += 200;
            });
  
            // Создание карточек товаров на основе данных и добавление их в конец контейнера
            const fragment = document.createDocumentFragment();
            products.forEach((product) => {
              const card = createProductCard(headers, product);
              fragment.appendChild(card);
            });
            productCard.appendChild(fragment);
  
            // Установка ширины контейнера, если в нем нет карточек товаров
            if (productCard.children.length === 0) {
              productCard.style.width = products.length * 210 + "px";
            }
            loading = false;
  
            loadedProducts += products.length; // Увеличиваем счетчик загруженных продуктов
            updateInfo(); // Обновляем информацию на странице
          } else {
            console.error("Ошибка при получении данных:", xhr.status);
          }
        }
      };
      xhr.send();
    }
  
    // Функция для проверки необходимости догрузки
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
        const nextRowCount = 10; // Количество строк для догрузки
  
        // Догрузка новых данных и пересчет ширины контейнера
        rangeStart = rangeEnd;
        rangeEnd += nextRowCount;
        loadData();
        productCard.style.width = products.length * 210 + "px";
      }
    }
  
    const productCardContainer = document.querySelector(".product-card-container");
    productCardContainer.addEventListener("scroll", checkLoadMore);
  
    loadData();
  });
  