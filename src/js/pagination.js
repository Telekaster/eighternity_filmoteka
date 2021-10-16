import Pagination from 'tui-pagination';
import refs from './refs';

import { show, hide } from './spinner';
const { search: searchInput } = refs();

import { getMoviesByQuery } from './searchByKeyword';


import { fetchMovieList } from './api';

const { list, spinner } = refs();

const container = document.getElementById('pagination');
const options = {
  // below default value of options
  totalItems: 1000,
  itemsPerPage: 9,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);
const currentPage = pagination.getCurrentPage();
hide(spinner);
fetchMovieList(currentPage);

pagination.on('beforeMove', event => {
  const currentPage = event.page;

  // if (currentPage === 10) {
  //   return false;
  //   // return true;
  // }
  // TODO: Add API service to fetch next portion of films
  list.innerHTML = '';
  if (searchInput.children[0].value != '') {
    const query = searchInput.children[0].value;
    getMoviesByQuery(query, currentPage);
  } else {
    fetchMovieList(currentPage);
  }
  
  console.log('Move to: ', currentPage);
});

export default pagination;