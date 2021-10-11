export default function sendLogin(
    nameValue,
    input, user, greetingText, loginWindow, search) {
        input.value = '';
        user.name = nameValue;
    
        const userJson = JSON.stringify(user);
        
    if (localStorage.getItem(nameValue) === null) {
        console.log(true);
        localStorage.setItem(nameValue, userJson);
        console.log(user.watched);
            user.watched = [];
            greetingText.textContent = `Hello ${user.name.toUpperCase()}`;
            greetingText.classList.remove('visually-hidden');
            loginWindow.classList.add('visually-hidden');
            search.classList.remove('visually-hidden');

    } else {
        console.log(false);
            const localName = JSON.parse(localStorage.getItem(nameValue)).name;
            greetingText.textContent = `Hello ${localName.toUpperCase()}`;
            greetingText.classList.remove('visually-hidden');
            loginWindow.classList.add('visually-hidden');
            search.classList.remove('visually-hidden');
    };
    
    
};