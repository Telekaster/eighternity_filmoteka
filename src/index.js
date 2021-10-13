// Импорты___________________
import './sass/main.scss';
import './js/footer';
import './js/login';
import './js/open-library';
import './js/render-watched-films.js';

import './js/api.js';
import './js/modal.js';
import './js/trailer.js';


import Pagination from 'tui-pagination';


// Юля, этот код нужно вынести за пределы index.js, здесь должны остаться только инпуты------------------------
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

pagination.on('beforeMove', event => {
  const currentPage = event.page;

  if (currentPage === 10) {
    return false;
    // return true;
  }
  // TODO: Add API service to fetch next portion of films
  console.log('Move to: ', currentPage);
});
// --------------------------------------------------------------------------
