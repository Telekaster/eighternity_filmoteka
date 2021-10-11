// Импорты___________________
import './sass/main.scss';
import './js/footer';
import loginWindowOpen from './js/login_window';
import closeLoginWindow from './js/login_close_window';
import takeValue from './js/login_takeValue';
import sendLogin from './js/login_sendLogin';
//Остальной код_______________
import './js/open-library';
import './js/login';
import './js/api.js';
import './js/modal.js';

import Pagination from 'tui-pagination';

// Переменные________________
const loginButton = document.querySelector('.log_in__button');
const search = document.querySelector('.search');
const loginWindow = document.querySelector('.login__section');
const loginClose = document.querySelector('.login__close_btn');
const loginAcceptButton = document.querySelector('.login__accept_btn');
const input = document.querySelector('.login__input');
const greetingText = document.querySelector('.login__greetings');
let nameValue = '';

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

const user = {
  name: '',
};

// Слушатели событий_________
loginButton.addEventListener('click', () => {
  loginWindowOpen(search, loginWindow, loginAcceptButton);
});
loginClose.addEventListener('click', () => {
  closeLoginWindow(search, loginWindow);
});
input.addEventListener('input', evt => {
  return (nameValue = takeValue(evt.target.value, loginAcceptButton));
});
loginAcceptButton.addEventListener('click', () => {
  sendLogin(nameValue, input, user, greetingText, loginWindow, search);
});
