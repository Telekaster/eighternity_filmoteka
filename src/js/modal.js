import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import {openTrailer} from './trailer.js';
import modalMovie from '../templates/modalMovie.hbs';
import refs from './refs.js';
const { movieImg, closeModal, modal, modalInfo, loginButton,API_KEY,BASE_URL} = refs();

closeModal.addEventListener('click', onCloseImage);
modal.addEventListener('click', onCloseBackdropClickImage);
function openModal(e) {
  modal.classList.toggle('is-hidden');
  window.addEventListener('keydown', onCloseClickEsc);
  document.addEventListener('click', openTrailer);
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
  }
)};
});
export {onCloseImage};
