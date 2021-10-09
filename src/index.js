// Импорты___________________
import './sass/main.scss';
import './js/footer'
import loginWindowOpen from './js/login_window';
import closeLoginWindow from './js/login_close_window';
import takeValue from './js/login_takeValue';
import sendLogin from './js/login_sendLogin';


// Переменные________________
const loginButton = document.querySelector('.log_in__button');
const search = document.querySelector('.search');
const loginWindow = document.querySelector('.login__section');
const loginClose = document.querySelector('.login__close_btn');
const loginAcceptButton = document.querySelector('.login__accept_btn');
const loginInput = document.querySelector('.login__input');
const greetingText = document.querySelector('.login__greetings');
let nameValue = '';

const user = {
    name:'',
}




// Слушатели событий_________
loginButton.addEventListener('click', () => { loginWindowOpen(search, loginWindow, loginAcceptButton) });
loginClose.addEventListener('click', () => { closeLoginWindow(search, loginWindow) });
loginInput.addEventListener('input', (evt) => { return nameValue = takeValue(evt.target.value, loginAcceptButton) });
loginAcceptButton.addEventListener('click', () => { sendLogin(nameValue, loginInput, user, greetingText, loginWindow, search) });


// document.addEventListener('keyup', ((evt) => {
//     event.preventDefault()
//     if (loginAcceptButton.hasAttribute('desabled')) {
//         console.log('1');
//         if (evt.key === 'Enter') {
//                 // console.log(evt);
//         console.log('2');
//         sendLogin(nameValue, loginInput, user, greetingText, loginWindow, search)
//         };
//     };






// }));



//Остальной код_______________

