document.addEventListener('DOMContentLoaded', function () {
  const cartItemsContainer = document.getElementById('cart-items');
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function updateCartDisplay() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;

      const itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.name}" width="100">
        <div>
          <h4>${item.name}</h4>
          <p>Price: $${item.price.toFixed(2)}</p>
          <button onclick="removeItem(${index})">Remove</button>
        </div>
      `;

      cartItemsContainer.appendChild(itemElement);
    });

    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
  }

  window.removeItem = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
  };

  updateCartDisplay();
});
