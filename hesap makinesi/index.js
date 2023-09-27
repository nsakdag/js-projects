let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEL = document.getElementById("sum-el") 


function add() {
   let added = (num1 + num2)
   sumEL.textContent = "Sum :" + added

    
}

function subtract() {
    let subtracted = (num1 - num2)
    sumEL.textContent = "Sum :" + subtracted
   
}
function divide() {
    let divided = (num1 / num2)
    sumEL.textContent = "Sum :" + divided
    console.log(sumEL)
}

function multiply() {
    let multiplyed = (num1 * num2)
    sumEL.textContent = "Sum :" + multiplyed
    console.log(sumEL)
}







