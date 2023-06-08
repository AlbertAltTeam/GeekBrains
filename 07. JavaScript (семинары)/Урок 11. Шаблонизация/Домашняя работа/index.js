fetch('data.json')
  .then(response => response.json())
  .then(products => {

    // Rest of your code that depends on the product
    let itemsContainer = document.getElementById('itemsContainer');
    let browseBtn = document.getElementById('browseBtn');
    let currentIndex = 0;
    let itemsPerPage = 6;

    // Function to generate item HTML
    function generateItemHTML(product) {
      return `
      <div class="item">
        <img src="${product.imgSrc}" alt="${product.name}">
        <div class="description">${product.description}</div>
        <div class="name">${product.name}</div>
        <div class="price">${product.price}</div>
      </div>
      `;
    }

    // Function to add items to the container
    function addItemsToContainer(startIndex, endIndex) {
      let itemsHTML = '';
      for (let i = startIndex; i < endIndex; i++) {
        if (i >= products.length) break;
        itemsHTML += generateItemHTML(products[i]);
      }
      itemsContainer.insertAdjacentHTML('beforeend', itemsHTML);
    }

    // Initial items
    addItemsToContainer(0, itemsPerPage);

    // Event listener for Browse All Products button
    browseBtn.addEventListener('click', function () {
      currentIndex += itemsPerPage;
      let endIndex = currentIndex + itemsPerPage;
      addItemsToContainer(currentIndex, endIndex);
      if (endIndex >= products.length) {
        browseBtn.style.display = 'none';
      }
    });
  })
  .catch(error => {
    console.log('Error fetching data:', error);
  });
