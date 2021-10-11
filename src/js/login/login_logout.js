export default function logOut(loginButton) {
    if (loginButton.textContent === 'log out') {
        location.reload();
    };
};