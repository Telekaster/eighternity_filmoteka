import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import refs from './refs';
const{API_KEY,BASE_URL}=refs();

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
}};
export {openTrailer};