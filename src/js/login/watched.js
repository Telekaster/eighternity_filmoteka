export default function writeWatched (user) {
    document.addEventListener('click', ((event) => {
    if (event.target.className === 'modal-btn btn-watched') {
        user.watched.push(Number(event.target.getAttribute('id')));
        // console.log(user);

        localStorage.setItem(user.name, JSON.stringify(user));
    };
}));
} 






