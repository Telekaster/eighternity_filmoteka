export default
function removeQueue(removeQueueButton, queueMoviesArray, data, user, name, queueButton) {
    removeQueueButton.addEventListener('click', ((event) => {
        const indexQueue = queueMoviesArray.indexOf(data.id);
        queueMoviesArray.splice(indexQueue, 1);
        user.queue = queueMoviesArray;
        localStorage.setItem(name, JSON.stringify(user));
        removeQueueButton.classList.add('is-hidden');
        queueButton.classList.remove('is-hidden');
    }));
};