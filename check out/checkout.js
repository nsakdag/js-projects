const deleteEl = document.querySelector(".fa-trash-can");
const productsEl = document.querySelector(".products");
const deletediv = document.querySelector(".delete-div");

deleteEl.addEventListener("click", function () {
  noProducts();
});

const noProducts = () => {
  productsEl.textContent = "No Product";
  productsEl.classList.add("no-product");
  deletediv.style.display = "none";
};

productsEl.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    e.target.previousElementSibling.textContent++;
   calculatedproductprice(e.target);
  } else if (
    e.target.classList.contains("fa-minus") &&
    e.target.nextElementSibling.textContent > 1
  ) {
    e.target.nextElementSibling.textContent--;
   calculatedproductprice(e.target);
  } else if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest(".product").remove();
   
  }
});

const calculatedproductprice = (btn) => {
  const discountedPrice = btn
    .closest(".product-info")
    .querySelector("#discounted-price").textContent;
  const quantity = btn
    .closest(".buttons-div")
    .querySelector("#quantity").textContent;
    const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price");
    productPrice.textContent = (discountedPrice * quantity)
};

