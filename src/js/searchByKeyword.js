import { generateTitle, generateGenres, generateData } from './function';
import { fetchMovieList } from './api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import observeCards from './intersectionObserver.js';
import pagination from './pagination';
import { show, hide } from './spinner';
import refs from './refs';
const { list, search: searchInput, BASE_URL, API_KEY, spinner } = refs();

const clearListMovie = () => (list.innerHTML = '');

let query = '';

export function getMoviesByQuery(query, page = 1) {
  show(spinner);

  const SEARCH_MOVIES = 'search/movie';
  const params = `${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`;
  const url = BASE_URL + SEARCH_MOVIES + params;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.results.length === 0) {
        Notify.warning('No result for your request');
        fetchMovieList(1);
        return;
      }

      const foundResults = data.total_results;
      const totalPages = data.total_pages;
      pagination.setTotalItems(foundResults);
      pagination.setItemsPerPage(data.results.length);

      return data.results;
    })
    .then(array => {

      let result = array
        .map(elem => {
          const {
            poster_path, backdrop_path, original_title, id} = elem;

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
                  <h3 class='movie__name'>${generateTitle(elem)}</h3>
                  <p class='movie__genre'>${generateGenres(elem)}<span class='movie__year'>${generateData(elem)}</span></p>
                </div>
              </div>
            </li>`;
          } else {

            return `<li class='movies__item'>
              <div class='movie__card'>
                <img
                  class='movie__img' 
                  id=${id}
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8n_VcmefHmHxO3n9bXSMODS_8pGjmKKGbA&usqp=CAU'
                  loading='lazy'
                  alt='${original_title}'
                  data-src="https://image.tmdb.org/t/p/w500/${backdrop_path}"
                />
            
                <div class='movie__label'>
                  <h3 class='movie__name'>${generateTitle(elem)}</h3>
                  <p class='movie__genre'>${generateGenres(elem)}<span class='movie__year'>${generateData(elem)}</span></p>
                </div>
              </div>
            </li>`;
          }
        })
        .join('');

      hide(spinner);
      clearListMovie();
      list.insertAdjacentHTML('beforeend', result);

      observeCards(list);
    });
}

const onSubmit = event => {
  event.preventDefault();

  query = event.currentTarget.elements.query.value.trim();

  if (query !== '') {
    pagination.reset();
    getMoviesByQuery(query);
  } else {
    Notify.info('Enter your request');
    searchInput.reset();
    return;
  }
};

searchInput.addEventListener('submit', onSubmit);