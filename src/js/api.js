import refs from './refs';
import { show, hide } from './spinner';
import observeCards from './intersectionObserver.js';
import {generateTitle, generateGenres, generateData} from "./function"
const { spinner } = refs();
const { API_KEY, BASE_URL, list, buttonUP } = refs();

let params = '';

function fetchMovieList(page) {
  show(spinner);

  params = 'trending/movie/day';
  const page_query = `&page=${page}`;
  let url = BASE_URL + params + API_KEY + page_query;

  fetch(url)
    .then(resp => resp.json())
    .then(data => data.results)
    .then(array => {
    //   console.log(array);
      let result = array
        .map(elem => {
          // console.log('Result:', elem)
          const {
            poster_path,
            backdrop_path,
            name,
            vote_average, //можно удалить
            first_air_date, //можно удалить
            title, //можно удалить
            id,
            genre_ids, //можно удалить
          } = elem;
        //   const getUserById = function (arr, id) {
        //     let res = arr.find(x => x.id === id);

        //     if (res === undefined) {
        //       return 0;
        //     } else {
        //       return { ...res };
        //     }
        //   };

          // console.log(...genre_ids)
          // console.log(getUserById(genres, ...genre_ids).name);
          // console.log(getUserById(genres, genre_ids[0, 1]).name);

          return `
                <li class="movies__item" >
                <div class="movie__card">
                <img 
                class="movie__img" 
                id=${id} 
                src="https://image.tmdb.org/t/p/w500/${poster_path}" 
                loading="lazy" 
                alt="" 
                data-src = "https://image.tmdb.org/t/p/w500/${backdrop_path}"/>
                
                <div class="movie__label">
                <h3 class="movie__name">${generateTitle(elem)}</h3>
                 <p class="movie__genre">${
                    generateGenres(elem)
                 }<span class="movie__year">${generateData(elem)}</span></p>
                </div>
                </div>
                </li>`;
        })
        .join('');
      hide(spinner);
      list.insertAdjacentHTML('beforeend', result);
      //-------------------------Маріна
      observeCards(list);
      //-------------------------------
    });
}


export { fetchMovieList };
