export default function sendLogin(
    nameValue,
    input, user, greetingText, loginWindow, search, loginButton) {
        input.value = '';
        user.name = nameValue;
    loginButton.classList.remove('current');
        const userJson = JSON.stringify(user);
        
    if (localStorage.getItem(nameValue) === null) {
        loginButton.setAttribute('id', nameValue);
        localStorage.setItem(nameValue, userJson);
        user.watched = [];
        greetingText.textContent = `Hello ${user.name.toUpperCase()}`;
        greetingText.classList.remove('visually-hidden');
        loginWindow.classList.add('visually-hidden');
        search.classList.remove('visually-hidden');
        loginButton.textContent = 'log out';

    } else {
        loginButton.setAttribute('id', nameValue);
        const localName = JSON.parse(localStorage.getItem(nameValue)).name;
        greetingText.textContent = `Hello ${localName.toUpperCase()}`;
        greetingText.classList.remove('visually-hidden');
        loginWindow.classList.add('visually-hidden');
        search.classList.remove('visually-hidden');
        loginButton.textContent = 'log out';
    };
    
};