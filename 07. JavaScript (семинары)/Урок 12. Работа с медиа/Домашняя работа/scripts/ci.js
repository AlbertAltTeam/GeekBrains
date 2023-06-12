import { getCartItems, removeById } from './cart.js';


export async function updateCart() {
  const productData = getCartItems();
  const cartCount = document.getElementById('cartCount');

  if (productData.length === 0) {
    cartCount.style.display = 'none';
  } else {
    cartCount.style.display = 'flex';
    cartCount.textContent = productData.length;
  }
  
  cartCount.textContent = productData.length;
  const productBox = document.querySelector('.ci-item');
  productBox.innerHTML = '';

  productData.forEach(({ id, imgSrc, name, description, price, cur, quantity }) => {
    const productEl = `
        <div id="product_${id}" class="product">
          <button class="btn__del" value="${id}" id="remove_${id}" type="button">удалить</button>
          <div class="product__content">
            <img class="product__img" src="${imgSrc}" alt="${name}">
            <div class="product__desc">
              <h2 class="product__name">${name}</h2>
              <p class="product__price_label">Price: <span class="product__price">${cur} ${price}</span></p>
              <div class="product__qty">
                <label class="input__label">Quantity:</label>
                <input class="input__quantity" type="text" value="${quantity}">
              </div>
            </div>
          </div>
        </div>
      `;
    productBox.insertAdjacentHTML('beforeend', productEl);
  });

  const deleteButtons = document.querySelectorAll('.btn__del');
  deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => {


      const product = button.closest('.product');
      removeById(event.target.value)
      updateCart()
    });
  });
}

document.addEventListener('DOMContentLoaded', updateCart);
