import sendLogin from './login_sendLogin';
export default function submitByEnter(button, evt, nameValue, loginInput, user, greetingText, loginWindow, search) {
        if (!button.classList.contains('visually-hidden')) {
        
            if (evt.key === 'Enter') {
                console.log(true);
                evt.preventDefault()
                sendLogin(nameValue, loginInput, user, greetingText, loginWindow, search)
            };
        };
    };