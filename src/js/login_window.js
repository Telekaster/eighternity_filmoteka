export default function loginWindowOpen(search, loginWindow, loginAcceptButton) {
        search.classList.add('visually-hidden')
        loginWindow.classList.remove('visually-hidden');
        loginAcceptButton.setAttribute('disabled', true);
};