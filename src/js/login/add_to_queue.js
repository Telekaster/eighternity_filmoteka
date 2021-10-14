export default function writeQueue (user, loginButton) {
    document.addEventListener('click', ((event) => {
        const queueButton = document.querySelector('.btn-queue');
        const removeQueueButton = document.querySelector('.btn-remove_queue');

        if (event.target.classList.contains('btn-queue')) {
            
            if (localStorage.getItem(user.name) === null) {
                    event.target.setAttribute('disabled', true);
            }

            if (!queueButton.classList.contains('is-hidden')) {

                // Тянем массив из localStorage_____
                user.queue = JSON.parse(localStorage.getItem(user.name)).queue;
                user.watched = JSON.parse(localStorage.getItem(user.name)).watched;
                // Добаляем новые фильмы_______
                user.queue.push(Number(event.target.getAttribute('id')));
                // Отправляем объект в localStorage
                localStorage.setItem(user.name, JSON.stringify(user));
                queueButton.classList.add('is-hidden');
                removeQueueButton.classList.remove('is-hidden');

            };

        };
        
    }));
};






