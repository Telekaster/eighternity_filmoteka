export default function changeButtonWathed(backdrop,loginButton,watchedButton,queueButton,name, data, removeWatchedButton) {
  if (!backdrop.classList.contains('is-hidden')) {
    if (loginButton.textContent === 'Log in') {
      // watched
      watchedButton.setAttribute('disabled', true);
      watchedButton.textContent = 'Log In first';
      watchedButton.classList.add('modal-btn_disabled');
      // quenue
      queueButton.setAttribute('disabled', true);
      queueButton.textContent = 'Log In first';
      queueButton.classList.add('modal-btn_disabled');
    }
    else {
      const moviesArray = JSON.parse(localStorage.getItem(name)).watched;
      moviesArray.map((item) => {

        if (item === data.id) {
          watchedButton.classList.add('is-hidden');
          removeWatchedButton.classList.remove('is-hidden');
        };

        });
    }
  };
};