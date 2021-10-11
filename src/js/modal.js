import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import modalMovie from '../templates/modalMovie.hbs';
import refs from './refs.js';
const { movieImg, closeModal, modal, modalInfo, loginButton} = refs();
const API_KEY = '?api_key=61165aac189ece3ae64e67d82e58db65';
const BASE_URL = 'https://api.themoviedb.org/3/';


movieImg.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);
modal.addEventListener('click', onCloseBackdropClickImage);

function toggleModal(e) {
  modal.classList.toggle('is-hidden');
  window.addEventListener('keydown', onCloseClickEsc);
}
  

  
  function onCloseClickEsc(event){
    if(event.code==='Escape'){
        onCloseImage()
    }
};
function onCloseImage(){
    window.removeEventListener('keydown', onCloseClickEsc);
    modal.classList.toggle('is-hidden');
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
  fetch(`${BASE_URL}/movie/${id}${API_KEY}&language=en-US`).then(response => {
    return response.json()
  }).then(data => {
    modalInfo.insertAdjacentHTML('afterbegin', modalMovie(data))
      
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
    // ----------------------------------------------------------------------------------------------------------------------------

  });
});
