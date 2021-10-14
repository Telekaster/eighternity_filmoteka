import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import {openTrailer} from './trailer.js';
import modalMovie from '../templates/modalMovie.hbs';
import refs from './refs.js';
import changeButtonWatched from './login/watched_button_change';
import writeWatched from './login/add_to_watch';
import removeWatched from './login/remove_from_watch';
import changeButtonQueue from './login/queue_button_change';
import writeQueue from './login/add_to_queue';
import removeQueue from './login/remove_from_queue';
const body = document.querySelector('.body')
const { movieImg, closeModal, modal, modalInfo, loginButton, API_KEY, BASE_URL } = refs();

closeModal.addEventListener('click', onCloseImage);
modal.addEventListener('click', onCloseBackdropClickImage);
function openModal(e) {
  modal.classList.toggle('is-hidden');
  window.addEventListener('keydown', onCloseClickEsc);
  document.addEventListener('click', openTrailer);
  document.body.classList.add('no-scroll');
}
  function onCloseClickEsc(event){
    if(event.code==='Escape'){
        onCloseImage()
    }
};
function onCloseImage(e){
    window.removeEventListener('keydown', onCloseClickEsc);
      modal.classList.toggle('is-hidden');
      document.removeEventListener('click', openTrailer);
      document.body.classList.remove('no-scroll');
};
function onCloseBackdropClickImage(event){
if(event.target===event.currentTarget){
    onCloseImage()
}
};
let id=0;
movieImg.addEventListener('click', (e) => {
  modalInfo.innerHTML = '';
  id = e.target.getAttribute('id');
  if(e.target.nodeName !== 'IMG'){return}else{
    openModal();
    fetch(`${BASE_URL}movie/${id}${API_KEY}&language=en-US`).then(response => {
      return response.json()
    }).then(data => {
      modalInfo.insertAdjacentHTML('afterbegin', modalMovie(data));

      // Дело рук Олега-----------------------------------------------------------------------------------------------------------
      const backdrop = document.querySelector('.backdrop');
      const watchedButton = document.querySelector('.btn-watched');
      const removeWatchedButton = document.querySelector('.btn-remove_watched');
      const queueButton = document.querySelector('.btn-queue');
      const removeQueueButton = document.querySelector('.btn-remove_queue');
      const name = loginButton.getAttribute('id');
      const user = JSON.parse(localStorage.getItem(name));
      let queueMoviesArray = [];

      // watched
      changeButtonWatched(backdrop, loginButton, watchedButton, queueButton, name, data, removeWatchedButton);
      writeWatched(user, loginButton);
      removeWatched(removeWatchedButton, watchedButton, user, name, data);

      // Queue
      changeButtonQueue(loginButton, queueMoviesArray, queueButton, removeQueueButton, name);
      writeQueue(user, loginButton);
      removeQueue(removeQueueButton, queueMoviesArray, data, user, name, queueButton);
      // ----------------------------------------------------------------------------------------------------------------------------
  }
)};
});
export {onCloseImage};
