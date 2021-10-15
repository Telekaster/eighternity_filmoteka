export default
function removeQueue(removeQueueButton, queueButton, user, name, data) {
    removeQueueButton.addEventListener('click', ((event) => {
        const moviesArray = JSON.parse(localStorage.getItem(name)).queue;
        const watched = JSON.parse(localStorage.getItem(name)).watched;
        const index = moviesArray.indexOf(data.id);
        moviesArray.splice(index, 1);
        user.queue = moviesArray;
        user.watched = watched;
        localStorage.setItem(name, JSON.stringify(user));
        removeQueueButton.classList.add('is-hidden');
        queueButton.classList.remove('is-hidden');
    }));
};