export default function writeWatched (user) {
    document.addEventListener('click', ((event) => {
        if (event.target.className === 'modal-btn btn-watched') {
           
            console.log(localStorage.getItem(name));

            if (localStorage.getItem(user.name) === null) {
                
                console.log('log in first');
                event.target.setAttribute('disabled', true);

            }

        user.watched.push(Number(event.target.getAttribute('id')));
        localStorage.setItem(user.name, JSON.stringify(user));
        event.target.textContent = 'remove from watched'

        };
        
       
}));
} 






