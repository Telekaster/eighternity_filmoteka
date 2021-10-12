export default function writeWatched (user, loginButton) {
    document.addEventListener('click', ((event) => {
        if (event.target.className === 'modal-btn btn-watched') {
            const watchedButton = document.querySelector('.btn-watched');
            
            
            if (localStorage.getItem(user.name) === null) {
                    event.target.setAttribute('disabled', true);
            }



            if (watchedButton.textContent === 'add to watched') {
                console.log(true);
                 const watchedButton = document.querySelector('.btn-watched');
            
            // Тянем массив из localStorage_____
            user.watched = JSON.parse(localStorage.getItem(user.name)).watched;
            // console.log('Старый массив' , user.watched);
            // Добаляем новые фильмы_______
            user.watched.push(Number(event.target.getAttribute('id')));
            // console.log('Новый массив', user.watched);
            // Отправляем объект в localStorage
            localStorage.setItem(user.name, JSON.stringify(user));
            // watchedButton.document.querySelector('.btn-watched');
            watchedButton.textContent = 'remove from watched';

            };

        };
        
    }));
};






