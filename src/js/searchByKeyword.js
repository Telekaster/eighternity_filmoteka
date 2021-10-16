// import filmCards from '../templates/film-keyword.hbs';
import dataGenres from '../data/genres_id.json';

import refs from './refs';
const { list, search: searchInput } = refs();

import { getFetch } from './api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

//получить массив жанров

// const urlGanreList =`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
// const requestGanreList = fetch(urlGanreList)
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data.genres);
//     return data.genres
// })

const API_KEY = '61165aac189ece3ae64e67d82e58db65';
const BASE_URL = `https://api.themoviedb.org/3`;
let userRequest = '';

function getFetchByKeyword() {
  let params = `/search/movie?api_key=${API_KEY}&query=${userRequest}&language=en-US&page=1&include_adult=false`;
  let url = BASE_URL + params;

  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.results.length === 0) {
        Notify.warning('По вашему запросу ничего не найдено');
        getFetch();
      }
      return data.results;
    })
    .then(array => {
      let result = array
        .map(elem => {
          const { poster_path, backdrop_path, original_title, genre_ids, release_date, title, id } =
            elem;
          if (poster_path !== null) {
            return `<li class='movies__item'>
              <div class='movie__card'>
                <img
                  class='movie__img' 
                  id=${id}
                  src="https://image.tmdb.org/t/p/w500/${poster_path}"
                  loading='lazy'
                  alt='${original_title}'
                  data-src="https://image.tmdb.org/t/p/w500/${backdrop_path}"
                />
            
                <div class='movie__label'>
                  <h3 class='movie__name'>${title}</h3>
                  <p class='movie__genre'>${genre_ids}<span class='movie__year'>${release_date}</span></p>
                </div>
              </div>
            </li>`;
          }else{
            // console.log("есть результат без постера");
           return `<li class='movies__item'>
              <div class='movie__card'>
                <img
                  class='movie__img' 
                  id=${id}
                  src='https://www.kino-teatr.ru/static/images/no_poster.jpg'
                  loading='lazy'
                  alt='${original_title}'
                  data-src="https://image.tmdb.org/t/p/w500/${backdrop_path}"
                />
            
                <div class='movie__label'>
                  <h3 class='movie__name'>${title}</h3>
                  <p class='movie__genre'>${genre_ids}<span class='movie__year'>${release_date}</span></p>
                </div>
              </div>
            </li>`;
            
          }
        })
        .join('');
      clearListMovie();
      list.insertAdjacentHTML('beforeend', result);
    });
}

const onSubmit = event => {
  event.preventDefault();

  userRequest = event.currentTarget.elements.query.value.trim();
  console.log('поиск', userRequest);

  if (userRequest !== '') {
    getFetchByKeyword();
  } else {
    Notify.info('Введите запрос');
    searchInput.reset();
    return;
  }
};

function clearListMovie() {
  list.innerHTML = '';
}

searchInput.addEventListener('submit', onSubmit);

export { getFetchByKeyword };