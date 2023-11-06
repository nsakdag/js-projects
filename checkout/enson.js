const minusButtons = document.querySelectorAll(".minus-button");
const plusButtons = document.querySelectorAll(".plus-button");
const quantityEls = [document.getElementById("quantity-1"), document.getElementById("quantity-2")];
const dollarEls = [document.getElementById("product-price"), document.getElementById("product-price2")];
const productPriceAltEls = [document.getElementById("product-pricealt"), document.getElementById("product-pricealt2")];
const dollartotalEl = document.querySelector(".dollartotal");
const shippingEl = document.getElementById("shipping");
const taxEl = document.getElementById("tax");
const totalEl = document.getElementById("total");


const prices = [1474.99, 185.99];
const shippingRate = 25.99;

const updateValues = () => {
  let totalQuantity = 0;
  let totalAmount = 0;

  quantityEls.forEach((quantityEl, index) => {
    const quantity = parseInt(quantityEl.textContent);
    totalQuantity += quantity;
    totalAmount += prices[index] * quantity;
  });

  dollartotalEl.textContent = totalAmount.toFixed(2);
  shippingEl.textContent = (totalQuantity * shippingRate).toFixed(2);
  taxEl.textContent = (totalAmount * 0.18).toFixed(2);
  totalEl.textContent = (parseFloat(dollartotalEl.textContent) + parseFloat(shippingEl.textContent) + parseFloat(taxEl.textContent)).toFixed(2);

  // product-pricealt ve product-pricealt2'yi güncelleyin.
  updateProductPriceAlt();
};

const updateProductPriceAlt = () => {
  quantityEls.forEach((quantityEl, index) => {
    const quantity = parseInt(quantityEl.textContent);
    const priceAltEl = productPriceAltEls[index];
    priceAltEl.textContent = (prices[index] * quantity).toFixed(2);
  });
};

minusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const quantityEl = quantityEls[index];
    let quantity = parseInt(quantityEl.textContent);
    if (quantity > 1) {
      quantityEl.textContent = quantity - 1;
      updateValues();
    }
  });
});

plusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const quantityEl = quantityEls[index];
    quantityEl.textContent = parseInt(quantityEl.textContent) + 1;
    updateValues();
  });
});

updateValues();