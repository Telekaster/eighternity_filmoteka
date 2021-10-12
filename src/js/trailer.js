import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import {onCloseImage} from './modal.js';
const API_KEY = '?api_key=61165aac189ece3ae64e67d82e58db65';
const BASE_URL = 'https://api.themoviedb.org/3/';

function openTrailer(e){
    if(e.target.className === 'modal-btn trailer-btn'){
           let id = e.target.getAttribute('id');
            fetch(`${BASE_URL}/movie/${id}/videos${API_KEY}`).then(response=>response.json()).then(videos=>{
                const video = videos.results.find(result => result.type === "Trailer" && result.name.includes('Trailer'));
                const trailerKey = video.key;
                const trailer = basicLightbox.create(`
            <iframe src='https://www.youtube.com/embed/${trailerKey}'frameborder="0" allowfullscreen width="75%" height="75%"></iframe>
            `);
                trailer.show();
              })
              onCloseImage()
             
}};
 
export {openTrailer};