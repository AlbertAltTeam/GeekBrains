import { addToCart } from './cart.js';
import { updateCart } from './ci.js';


fetch('data/products.json')
  .then(response => response.json())
  .then(products => {

    let itemsContainer = document.getElementById('itemsContainer');
    let browseBtn = document.getElementById('browseBtn');

    let currentIndex = 0;
    let itemsPerPage = 6;
    function generateItemHTML(product) {
      let addToCartBtnId = 'addToCartBtn' + product.id;
      return `
        <div class="fi-item" id="${product.id}">
          <div class="background-fi-container">
            <div class="add-to-cart-container">
              <button id="${addToCartBtnId}" class="add-to-cart-btn" data-product-id="${product.id}">
                <img src="svg/addToCart.svg" alt="Add to Cart">
                Add to Cart
              </button>
            </div>
          </div>
          <img src="${product.imgSrc}" alt="${product.name}">
          <div class="description">${product.description}</div>
          <div class="name">${product.name}</div>
          <div class="price">${product.cur} ${product.price}</div>
        </div>
      `;
    }

    function addItemsToContainer(startIndex, endIndex) {
      let itemsHTML = '';
      for (let i = startIndex; i < endIndex; i++) {
        if (i >= products.length) break;
        itemsHTML += generateItemHTML(products[i]);


      }
      itemsContainer.insertAdjacentHTML('beforeend', itemsHTML);
    }

    addItemsToContainer(0, itemsPerPage);

    browseBtn.addEventListener('click', function () {
      currentIndex += itemsPerPage;
      let endIndex = currentIndex + itemsPerPage;
      addItemsToContainer(currentIndex, endIndex);
      if (endIndex >= products.length) {
        browseBtn.style.display = 'none';
      }
    });

    document.addEventListener('click', function (event) {
      if (event.target.classList.contains('add-to-cart-btn')) {
        event.target.classList.add('shake');
        let productId = event.target.dataset.productId;
        let itemIndex = products.findIndex(item => item.id == productId);

        if (itemIndex !== -1) {
          addToCart(products[itemIndex]);
          updateCart();
        }
      }
    });

  })

  .catch(error => {
    console.log('Error fetching data:', error);
  });

