import filmCards from '../templates/film-keyword.hbs';
import dataGenres from '../data/genres_id.json';
import pagination from './pagination';

import refs from './refs';
const { list, search: searchInput } = refs();
const { BASE_URL, API_KEY } = refs();

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
    .then(results => {
      console.log(results);
      clearListMovie();
      list.insertAdjacentHTML('beforeend', filmCards(results));
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
