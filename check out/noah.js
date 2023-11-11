/* ----------------------------- ana delete tusu ---------------------------- */

let deleteAll = document.querySelector(".fa-trash-can");
let productsEl = document.querySelector(".products");
let deletedivEl = document.querySelector(".delete-div");

deleteAll.addEventListener("click", function () {
  noProductPrint();
});

/* ------------------------- article kismini ayarla ------------------------- */

productsEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.innerText++;
    calculatedProductPrice(e.target);
  } else if (
    e.target.classList.contains("fa-minus") &&
    e.target.nextElementSibling.innerText > 1
  ) {
    e.target.nextElementSibling.innerText--;
    calculatedProductPrice(e.target);
  } else if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest(".product").remove();
    calculatedProductPrice(e.target);
    
  }
});

/* ---------------------------- hesaplamalari yap --------------------------- */

const calculatedProductPrice = (btn) => {
  const discountedPrice = btn
    .closest(".product-info")
    .querySelector("#discounted-price").textContent;

  const quantity = btn
    .closest(".buttons-div")
    .querySelector("#quantity").textContent;

  const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price");

  productPrice.textContent = (discountedPrice * quantity).toFixed(2);

  calculatedTotalPrice();
};

let freeshipping = 6000;
let shippingrate = 25.99;

const calculatedTotalPrice = () => {
  const prices = document.querySelectorAll("#product-price");
  let subtotalEl = [...prices].reduce(
    (sum, price) => sum + Number(price.textContent),
    0
  );
  const shippingPrice =
    subtotalEl > freeshipping || subtotalEl === 0 ? 0 : shippingrate;

  const taxEl = (subtotalEl + shippingPrice) * 0.18;

  const totalEl = subtotalEl + shippingPrice + taxEl;

  document.getElementById("selected-price").textContent = subtotalEl.toFixed(2);

  document.getElementById("shipping").textContent = shippingPrice.toFixed(2);

  document.getElementById("tax").textContent = taxEl.toFixed(2);

  document.getElementById("total").textContent = totalEl.toFixed(2);
  !totalPrice && noProductPrint();
};

const noProductPrint = () => {
  productsEl.textContent = "No Products";
  productsEl.classList.add("no-product");
  deletedivEl.style.display = "none";
  document.querySelectorAll("#selected-price, #shipping, #tax, #total").forEach((el) => {
    el.textContent = "0";
  });
};
