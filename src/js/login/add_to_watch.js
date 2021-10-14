export default function writeWatched(user, loginButton) {
    document.addEventListener('click', ((event) => {
        const watchedButton = document.querySelector('.btn-watched');
        const removeWatchedButton = document.querySelector('.btn-remove_watched');

        if (event.target.classList.contains('btn-watched')) {
            
            if (localStorage.getItem(user.name) === null) {
                    event.target.setAttribute('disabled', true);
            }

            if (!watchedButton.classList.contains('is-hidden')) {

                // Тянем массив из localStorage_____
                const array = JSON.parse(localStorage.getItem(user.name)).watched;
                const queue = JSON.parse(localStorage.getItem(user.name)).queue;
                // Добаляем новые фильмы_______
                array.push(Number(event.target.getAttribute('id')));
                // Отправляем объект в localStorage
                user.watched = array;
                user.queue = queue;
                localStorage.setItem(user.name, JSON.stringify(user));
                watchedButton.classList.add('is-hidden');
                removeWatchedButton.classList.remove('is-hidden');
            };

        };
        
    }));
};






