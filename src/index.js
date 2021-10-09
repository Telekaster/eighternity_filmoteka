// Импорты___________________
import './sass/main.scss';
import loginWindowOpen from './js/login_window';
import sendLogin from './js/login_sendLogin';



// Переменные________________
const loginButton = document.querySelector('.log_in__button');
const loginWindow = document.querySelector('.login__section');
const loginClose = document.querySelector('.login__close_btn');
const loginAcceptButton = document.querySelector('.login__accept_btn');
const input = document.querySelector('.login__input');
const greetingText = document.querySelector('.login__greetings');
let nameValue = '';

const user = {
    name:'',
}




// Слушатели событий_________
loginButton.addEventListener('click', () => { loginWindowOpen(loginWindow, loginAcceptButton) });
loginClose.addEventListener('click', () => { loginWindow.classList.add('visually-hidden') });
input.addEventListener('input', (evt) => {
    if (evt.target.value !== '') {
        loginAcceptButton.removeAttribute('disabled');
        return nameValue = evt.target.value.toLowerCase();
    };
});
loginAcceptButton.addEventListener('click', () => { sendLogin(nameValue, input, user, greetingText, loginWindow) });





//Остальной код_______________

