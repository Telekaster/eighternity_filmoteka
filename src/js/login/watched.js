export default function writeWatched (user) {
    document.addEventListener('click', ((event) => {
        if (event.target.className === 'modal-btn btn-watched') {

            if (localStorage.getItem(user.name) === null) {
                event.target.setAttribute('disabled', true);
            };

            // Тянем массив из localStorage_____
            user.watched = JSON.parse(localStorage.getItem(user.name)).watched;
            console.log('Старый массив' , user.watched);
            // Добаляем новые фильмы_______
            user.watched.push(Number(event.target.getAttribute('id')));
            console.log('Новый массив', user.watched);
            // Отправляем объект в localStorage
            localStorage.setItem(user.name, JSON.stringify(user));

        };
        
    }));
};






