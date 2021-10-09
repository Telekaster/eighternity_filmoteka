// Импорты___________________
import './sass/main.scss';



// Переменные________________
const loginButton = document.querySelector('#log_in_btn');
const loginWindow = document.querySelector('.login__section');
const loginClose = document.querySelector('#login__close_btn');










// Слушатели событий_________
loginButton.addEventListener('click', () => { loginWindow.classList.remove('visually-hidden') });
loginClose.addEventListener('click', () => { loginWindow.classList.add('visually-hidden') });





//Остальной код_______________

