let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");


function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

function clearance() {
    saveEl.textContent = "Let us Count Again";
    count = 0;
    countEl.textContent = count;
  }
   
    

