export default
function changeButtonQueue(loginButton, queueMoviesArray, queueButton, removeQueueButton, name) {
    if (loginButton.textContent === 'log out') {
        queueMoviesArray = JSON.parse(localStorage.getItem(name)).queue;
        queueMoviesArray.map((item) => {
            if (item === data.id) {
                queueButton.classList.add('is-hidden');
                removeQueueButton.classList.remove('is-hidden');
            };
        });
    };
};