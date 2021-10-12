import filmCards from '../templates/film-keyword.hbs';
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
      console.log(array);
      clearListMovie();
      list.insertAdjacentHTML('beforeend', filmCards(array));
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
