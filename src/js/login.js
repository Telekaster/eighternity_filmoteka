import refs from './refs';
import loginWindowOpen from './login/login_window';
import closeLoginWindow from './login/login_close_window';
import takeValue from './login/login_takeValue';
import sendLogin from './login/login_sendLogin';
import submitByEnter from './login/login_submit_by_enter';
import writeWatched from './login/watched';
import logOut from './login/login_logout';
let nameValue = '';

const user = {
    name: '',
    watched: [],
};

const { loginButton, search, loginWindow, loginClose, loginAcceptButton, loginInput, greetingText } = refs();

login(loginButton, search, loginWindow, loginClose, loginAcceptButton, loginInput, greetingText);
writeWatched(user);

function login(loginButton, search, loginWindow, loginClose, loginAcceptButton, loginInput, greetingText) {
    loginButton.addEventListener('click', () => { loginWindowOpen(search, loginWindow, loginAcceptButton, loginButton) });
    loginClose.addEventListener('click', () => { closeLoginWindow(search, loginWindow, loginButton) });
    loginInput.addEventListener('input', (evt) => { return nameValue = takeValue(evt.target.value, loginAcceptButton) });
    loginAcceptButton.addEventListener('click', () => { sendLogin(nameValue, loginInput, user, greetingText, loginWindow, search, loginButton) });
    window.addEventListener('keydown', (evt) => { submitByEnter(loginButton, loginAcceptButton, evt, nameValue, loginInput, user, greetingText, loginWindow, search) });
    loginButton.addEventListener('click', (() => { logOut(loginButton) }));
};