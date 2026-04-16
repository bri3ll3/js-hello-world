const miTitulo = document.querySelector("h1");
miTitulo.textContent = "¡Hola mundo!";

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Introduce tu nombre.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla es genial, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla es genial, ' + storedName;
}

myButton.addEventListener("click", () => {
  setUserName();
});