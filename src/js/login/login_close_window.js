export default function closeLoginWindow(search, loginWindow, loginButton) {
    loginWindow.classList.add('visually-hidden');
    loginButton.classList.remove('current');
    search.classList.remove('visually-hidden');
};
    