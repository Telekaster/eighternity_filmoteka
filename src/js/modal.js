import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import {openTrailer} from './trailer.js';
import modalMovie from '../templates/modalMovie.hbs';
import refs from './refs.js';
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
    fetch(`${BASE_URL}/movie/${id}${API_KEY}&language=en-US`).then(response => {
      return response.json()
    }).then(data => {
      modalInfo.insertAdjacentHTML('afterbegin', modalMovie(data));

      // Дело рук Олега-----------------------------------------------------------------------------------------------------------
      const backdrop = document.querySelector('.backdrop')
      if (!backdrop.classList.contains('is-hidden')) {
        if (loginButton.textContent === 'Log in') {
          const modalButtonsList = document.querySelector('.modal-btn__list');
          // watched
          modalButtonsList.firstElementChild.nextElementSibling.firstChild.setAttribute('disabled', true);
          modalButtonsList.firstElementChild.nextElementSibling.firstChild.textContent = 'Log In first';
          modalButtonsList.firstElementChild.nextElementSibling.firstChild.classList.add('modal-btn_disabled');
          // quenue
          modalButtonsList.firstElementChild.nextElementSibling.nextElementSibling.firstChild.setAttribute('disabled', true);
          modalButtonsList.firstElementChild.nextElementSibling.nextElementSibling.firstChild.textContent = 'Log In first';
          modalButtonsList.firstElementChild.nextElementSibling.nextElementSibling.firstChild.classList.add('modal-btn_disabled');
        };
      };
           // Remove watched------------------------------------------------
      // замена текста кнопки
      const name = loginButton.getAttribute('id');
      const watchedButton = document.querySelector('.btn-watched');
      const user = JSON.parse(localStorage.getItem(name));
      const moviesArray = JSON.parse(localStorage.getItem(name)).watched;//ошибку пишет!!!!

      if (loginButton.textContent === 'log out') {
 
        moviesArray.map((item) => {

          if (item === data.id) {
            watchedButton.textContent = 'remove from watched'
          };

        });

      };

      // Удаление из массива__________________________________---
      
      watchedButton.addEventListener('click', ((event) => {
   
        if (watchedButton.textContent === 'remove from watched') {
          const index = moviesArray.indexOf(data.id);
          console.log(index);

          moviesArray.splice(index, 1);
          console.log(moviesArray);
          user.watched = moviesArray;
          console.log(user.watched);
          console.log(JSON.stringify(user));
          localStorage.setItem(name, JSON.stringify(user));
          location.reload();
          // watchedButton.textContent = 'add to watched';
        };
        
    }));

      // ----------------------------------------------------------------------------------------------------------------------------
  }
)};
});
export {onCloseImage};
