export default function loginWindowOpen(search, loginWindow, loginAcceptButton, loginButton) {
        search.classList.add('visually-hidden');
        loginButton.classList.add('current');
        loginWindow.classList.remove('visually-hidden');
        loginAcceptButton.classList.add('visually-hidden');
};