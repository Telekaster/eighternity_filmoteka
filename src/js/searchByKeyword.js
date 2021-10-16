// import filmCards from '../templates/film-keyword.hbs';
import dataGenres from '../data/genres_id.json';
import pagination from './pagination';

import refs from './refs';
const { list, search: searchInput } = refs();
const { BASE_URL, API_KEY } = refs();

import { getFetch } from './api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import observeCards from './intersectionObserver.js';

//получить массив жанров

// const urlGanreList =`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
// const requestGanreList = fetch(urlGanreList)
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data.genres);
//     return data.genres
// })


const clearListMovie = () => list.innerHTML = '';

let query = '';

export function getMoviesByQuery(query, page = 1) {
  const SEARCH_MOVIES = 'search/movie';
  const params = `${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`;
  const url = BASE_URL + SEARCH_MOVIES + params;

  fetch(url)
  .then(response => response.json())
  .then(data => {
      if (data.results.length === 0) {
        Notify.warning('По вашему запросу ничего не найдено');
        getFetch();
      }
      pagination.reset();
      const foundResults = data.total_results;
      const totalPages = data.total_pages;
      pagination.setTotalItems(foundResults);
      pagination.setItemsPerPage(data.results.length);
      return data.results;
    })
    .then(array => {
      // console.log(array);

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
          } else {
            console.log('есть результат без постера');
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

      observeCards(list);
    });
}

const onSubmit = (event) => {
  event.preventDefault();

  query = event.currentTarget.elements.query.value.trim();
  console.log('поиск', query);

  if (query !== '') {
    getMoviesByQuery(query);
  } else {
    Notify.info('Введите запрос');
    searchInput.reset();
    return;
  }
};

searchInput.addEventListener('submit', onSubmit);