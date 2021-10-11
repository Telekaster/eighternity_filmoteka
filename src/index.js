// Импорты___________________
import './sass/main.scss';
import './js/footer'
import refs from './js/refs';
import loginWindowOpen from './js/login_window';
import closeLoginWindow from './js/login_close_window';
import takeValue from './js/login_takeValue';
import sendLogin from './js/login_sendLogin';
import submitByEnter from './js/login_submit_by_enter';
import API from './js/api.js';
import './js/modal.js';
// Переменные________________

const { loginButton, search, loginWindow, loginClose, loginAcceptButton, loginInput, greetingText } = refs();


let nameValue = '';

// Добавила Лиля________________
const list = document.querySelector('.movies')
// _____________________________

const user = {
    name: '',
}


// Слушатели событий_________
loginButton.addEventListener('click', () => { loginWindowOpen(search, loginWindow, loginAcceptButton) });
loginClose.addEventListener('click', () => { closeLoginWindow(search, loginWindow) });
loginInput.addEventListener('input', (evt) => { return nameValue = takeValue(evt.target.value, loginAcceptButton) });
loginAcceptButton.addEventListener('click', () => { sendLogin(nameValue, loginInput, user, greetingText, loginWindow, search) });
window.addEventListener('keydown', (evt) => { submitByEnter(loginAcceptButton, evt, nameValue, loginInput, user, greetingText, loginWindow, search) });


//Остальной код_______________

