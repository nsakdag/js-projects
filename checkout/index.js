let plus = document.querySelector(".fa-plus");
let minus = document.querySelector(".fa-minus");
let dollarEl = document.getElementById("product-price");
let quantitiyEl = document.getElementById("quantity");
let dolartotalEl = document.querySelector(".dollartotal");
let shippingEl = document.getElementById("shipping");
let price = +dollarEl.textContent;
let taxEl = document.getElementById("tax");
let totalEl = document.getElementById("total");

plus.addEventListener("click", function () {
  quantitiyEl.textContent = +quantitiyEl.textContent + 1;
  dollarEl.textContent = price * parseFloat(quantitiyEl.textContent);
  dolartotalEl.textContent = (
    parseFloat(dollarEl.textContent) + parseFloat(dollarEl2.textContent)
  ).toFixed(2);
  shippingEl.textContent = (
    (+quantitiyEl.textContent + +quantitiyEl2.textContent) *
    25.99
  ).toFixed(2);
  taxEl.textContent = (+dolartotalEl.textContent * 0.18).toFixed(2);
  totalEl.textContent = (+taxEl.textContent + +shippingEl.textContent).toFixed(
    2
  );
});

minus.addEventListener("click", function () {
  if (quantitiyEl.textContent > 1) {
    quantitiyEl.textContent = quantitiyEl.textContent - 1;
    dollarEl.textContent = price * parseFloat(quantitiyEl.textContent);
    dolartotalEl.textContent = (
      parseFloat(dollarEl.textContent) + parseFloat(dollarEl2.textContent)
    ).toFixed(2);
    shippingEl.textContent = (
      (+quantitiyEl.textContent + +quantitiyEl2.textContent) *
      25.99
    ).toFixed(2);
    taxEl.textContent = (+dolartotalEl.textContent * 0.18).toFixed(2);
    totalEl.textContent = (
      +taxEl.textContent + +shippingEl.textContent
    ).toFixed(2);
  } else {
    minus.disabled = true;
  }
});

let plus2 = document.getElementById("btn2plus");
let minus2 = document.getElementById("btn2minus");
let dollarEl2 = document.getElementById("product-price2");
let quantitiyEl2 = document.getElementById("quantity2");

let price2 = +dollarEl2.textContent;

plus2.addEventListener("click", function () {
  quantitiyEl2.textContent = +quantitiyEl2.textContent + 1;
  dollarEl2.textContent = price2 * parseFloat(quantitiyEl2.textContent);
  dolartotalEl.textContent = (
    parseFloat(dollarEl.textContent) + parseFloat(dollarEl2.textContent)
  ).toFixed(2);
  shippingEl.textContent = (
    (+quantitiyEl.textContent + +quantitiyEl2.textContent) *
    25.99
  ).toFixed(2);
  taxEl.textContent = (+dolartotalEl.textContent * 0.18).toFixed(2);
  totalEl.textContent = (+taxEl.textContent + +shippingEl.textContent).toFixed(
    2
  );
});

minus2.addEventListener("click", function () {
  if (quantitiyEl2.textContent > 1) {
    quantitiyEl2.textContent = quantitiyEl2.textContent - 1;
    dollarEl2.textContent = price2 * parseFloat(quantitiyEl2.textContent);
    dolartotalEl.textContent = (
      parseFloat(dollarEl.textContent) + parseFloat(dollarEl2.textContent)
    ).toFixed(2);
    shippingEl.textContent = (
      (+quantitiyEl.textContent + +quantitiyEl2.textContent) *
      25.99
    ).toFixed(2);
    taxEl.textContent = (+dolartotalEl.textContent * 0.18).toFixed(2);
    totalEl.textContent = (
      +taxEl.textContent + +shippingEl.textContent
    ).toFixed(2);
  } else {
    minus2.disabled = true;
  }
});
