export default function refs() {
  return {
    // Олег_______________________________________________
    loginButton: document.querySelector('.log_in__button'),
    search: document.querySelector('.search'),
    loginWindow: document.querySelector('.login__section'),
    loginClose: document.querySelector('.login__close_btn'),
    loginAcceptButton: document.querySelector('.login__accept_btn'),
    loginInput: document.querySelector('.login__input'),
    greetingText: document.querySelector('.login__greetings'),
    // Юля__________________________________________________________
    spinner: document.querySelector('.lds-spinner'),
    // Лиля_________________________________________________
    list: document.querySelector('.movies'),
    API_KEY: '&api_key=61165aac189ece3ae64e67d82e58db65',
    libClearTxt: document.getElementById('libClearTxt'),
    BASE_URL: 'https://api.themoviedb.org/3/',
    // Марина_______________________________________________
    // элементы хедера:
    headerMain: document.getElementById('headerMain'),
    headerLib: document.getElementById('headerLib'),
    btnHomeOpen: document.getElementById('btn-home-open'),
    btnLibOpen: document.getElementById('btn-lib-open'),
    // кнопки в бібліотеці:
    watchedBtn: document.getElementById('watched__btn'),
    queueBtn: document.getElementById('queue__btn'),
    

    // Женя_______________________________________________
    movieImg: document.querySelector('.movies'),
    closeModal: document.querySelector('.modal__btn'),
    modal: document.querySelector('.js-backdrop'),
    modalInfo: document.querySelector('.modal__info'),
    body: document.querySelector(`body`),
    moon: document.querySelector('.theme-switch__moon'),
    sun: document.querySelector('.theme-switch__sun')
  };
}