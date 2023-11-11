let headerEl = document.querySelector('.header');

// headerEl.style.backgroundColor = '#FF4500';
// headerEl.style.color = 'white';
// headerEl.style.textAlign = 'center';
// headerEl.style.padding = "10px"

headerEl.style.cssText = 'background-color: #FF4500; color: white; text-align: center; padding: 10px;';


let btnEl = document.querySelector('.btn')

btnEl.style.cssText = 'background-color: #C0EFC0; color: black; padding:10px; text-align:center; cursor:pointer;border:none; border-radius: 5px'
btnEl.textContent = 'Giris Yap'

let titleEl = document.getElementById('title')


titleEl.textContent = ' Javascript Dom Assignment 1'


let navitemEl = document.querySelector('.nav-item')


navitemEl.style.display = "flex";
navitemEl.style.justifyContent = 'center';
navitemEl.style.gap = '1rem'
navitemEl.style.listStyleType = 'none';

let usernameEl = document.querySelector('#username')
let passwordEl = document.querySelector('#password')

usernameEl.value = "Anthony"
passwordEl.value = '123456'
passwordEl.type = 'text'
usernameEl.disabled = true
passwordEl.disabled = true


let projectsEl = document.getElementById('projects')
let h3El = projectsEl.firstElementChild

h3El.textContent = "Js Dom Projects"

let listem = projectsEl.lastElementChild

const myProjects = ["Hello World!","Guess Number","Checkout Page","Gelir-Gider Projesi","Api Projects"];

myProjects.forEach( function(i) {
    let liElement = document.createElement('li')
    liElement.textContent = i
    listem.appendChild(liElement)
})


