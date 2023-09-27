let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let sumEL = document.getElementById("sum-el") 

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"
function add() {
   let added = (num1 + num2)
   sumEL.textContent = "Sum :" + added
//    console.log(sumEL)
    
}

function subtract() {
    let subtracted = (num1 - num2)
    sumEL.textContent = "Sum :" + subtracted
    // console.log(sumEL)
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





// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"


