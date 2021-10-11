export default function sendLogin(
    nameValue,
    input, user, greetingText, loginWindow, search, loginButton) {
        input.value = '';
        user.name = nameValue;
    
        const userJson = JSON.stringify(user);
        
    if (localStorage.getItem(nameValue) === null) {
        localStorage.setItem(nameValue, userJson);
        console.log(user.watched);
        user.watched = [];
        greetingText.textContent = `Hello ${user.name.toUpperCase()}`;
        greetingText.classList.remove('visually-hidden');
        loginWindow.classList.add('visually-hidden');
        search.classList.remove('visually-hidden');
        loginButton.textContent = 'log out';

    } else {
        // console.log(false);
        const localName = JSON.parse(localStorage.getItem(nameValue)).name;
        greetingText.textContent = `Hello ${localName.toUpperCase()}`;
        greetingText.classList.remove('visually-hidden');
        loginWindow.classList.add('visually-hidden');
        search.classList.remove('visually-hidden');
        loginButton.textContent = 'log out';
    };
    
    
};