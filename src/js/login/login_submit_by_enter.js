import sendLogin from './login_sendLogin';
export default function submitByEnter(loginButton, button, evt, nameValue, loginInput, user, greetingText, loginWindow, search, btnLibOpen) {
        if (!button.classList.contains('visually-hidden')) {
        
            if (evt.key === 'Enter') {
                evt.preventDefault();
                sendLogin(nameValue, loginInput, user, greetingText, loginWindow, search, loginButton, btnLibOpen);
            };
        };
    };