export default function loginWindowOpen(loginWindow, loginAcceptButton) {
        loginWindow.classList.remove('visually-hidden');
        loginAcceptButton.setAttribute('disabled', true);
};