let num1 = Number(prompt("lütfen birinci sayıyı giriniz:"));
let num2 = Number(prompt("lütfen ikinci sayıyı giriniz:"));
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumEL = document.getElementById("sum-el");

function add() {
  let added = num1 + num2;
  sumEL.textContent = "Sum :" + added;
}

function subtract() {
  let subtracted = num1 - num2;
  sumEL.textContent = "Sum :" + subtracted;
}
function divide() {
  let divided = (num1 / num2).toFixed(2);
  sumEL.textContent = "Sum :" + divided;
  console.log(sumEL);
}

function multiply() {
  let multiplyed = num1 * num2;
  sumEL.textContent = "Sum :" + multiplyed;
  console.log(sumEL);
}
