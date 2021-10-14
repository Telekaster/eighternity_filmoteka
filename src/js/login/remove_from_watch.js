export default function removeWatched(removeWatchedButton, watchedButton, user, name, data) {
          removeWatchedButton.addEventListener('click', ((event) => {
        const moviesArray = JSON.parse(localStorage.getItem(name)).watched;
        const queue = JSON.parse(localStorage.getItem(name)).queue;
        const index = moviesArray.indexOf(data.id);
        moviesArray.splice(index, 1);
        user.watched = moviesArray;
        user.queue = queue;
        const jsonObj = JSON.stringify(user);
        localStorage.setItem(name, jsonObj);
        removeWatchedButton.classList.add('is-hidden');
        watchedButton.classList.remove('is-hidden');
    }));

};