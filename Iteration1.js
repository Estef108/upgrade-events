// /*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const button = document.createElement("button");
button.textContent = "Haz click aquí";
button.id = "btnToClick";
const body = document.querySelector("body");

body.appendChild(button);

button.addEventListener('click', () =>  {
    console.log("Has hecho click en el botón")});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focus = document.querySelector('.focus');
focus.addEventListener('focus', () => {
    console.log('Estás haciendo focus en el input con clase "focus"');
});

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const input = document.querySelector('.value');

input.addEventListener('input', (e) => {
    console.log(e.target.value);
})