import refs from './refs';
import { show, hide } from './spinner';
const { spinner } = refs(); 
const { API_KEY, BASE_URL, list } = refs();

let params = '';

function fetchMovieList(page) {
    show(spinner);
    
    params = 'trending/all/day';
    const page_query = `&page=${page}`;
    let url = BASE_URL + params + API_KEY + page_query;

    fetch(url)
        .then(resp => resp.json())
        .then(data => data.results)
        .then(array => {
            let result = array.map(elem => {
                // console.log('Result:', elem)
                const { poster_path, backdrop_path, name, vote_average, first_air_date, title, id } = elem
    
                return `
                <li class="movies__item" >
                <div class="movie__card">
                <img class="movie__img" id=${id} src="https://image.tmdb.org/t/p/w500/${poster_path}" loading="lazy" alt="" data-src = "https://image.tmdb.org/t/p/w500/${backdrop_path}"/>
                
                <div class="movie__label">
                <h3 class="movie__name">${title || name}</h3>
                 <p class="movie__genre">Жанр <span class="movie__year">${first_air_date || '2021'}</span></p>
                </div>
                </div>
                </li>`
            }).join('');
            hide(spinner);
            list.insertAdjacentHTML('beforeend', result);
        })
}

export { fetchMovieList };