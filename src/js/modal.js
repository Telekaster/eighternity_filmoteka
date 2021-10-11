import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import {getFetch} from './api.js';
import modalMovie from '../tamplates/modalMovie.hbs';
import movieCard from '../tamplates/movieCard.hbs';
const API_KEY = '?api_key=61165aac189ece3ae64e67d82e58db65';
const BASE_URL = 'https://api.themoviedb.org/3/';

const movieImg = document.querySelector('.movies');
const closeModal = document.querySelector('.modal__btn');
const modal = document.querySelector('.js-backdrop');
const modalInfo = document.querySelector('.modal__info');

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
movieImg.addEventListener('click', (e)=>{
  modalInfo.innerHTML='';
     id=e.target.getAttribute('id');
    fetch(`${BASE_URL}/movie/${id}${API_KEY}&language=en-US`).then(response => {
      return response.json()
    }).then(data=>{
      console.log(data);


modalInfo.insertAdjacentHTML('afterbegin',modalMovie(data))  
    })
})

