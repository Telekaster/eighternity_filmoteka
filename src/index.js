// Импорты___________________
import './sass/main.scss';
import './js/footer'
import loginWindowOpen from './js/login_window';
import closeLoginWindow from './js/login_close_window';
import takeValue from './js/login_takeValue';
import sendLogin from './js/login_sendLogin';


// Переменные________________
const loginButton = document.querySelector('.log_in__button');
const search = document.querySelector('.search');
const loginWindow = document.querySelector('.login__section');
const loginClose = document.querySelector('.login__close_btn');
const loginAcceptButton = document.querySelector('.login__accept_btn');
const input = document.querySelector('.login__input');
const greetingText = document.querySelector('.login__greetings');
let nameValue = '';
const list = document.querySelector('.movies')

const user = {
    name: '',
}


// Слушатели событий_________
loginButton.addEventListener('click', () => { loginWindowOpen(search, loginWindow, loginAcceptButton) });
loginClose.addEventListener('click', () => { closeLoginWindow(search, loginWindow) });
input.addEventListener('input', (evt) => { return nameValue = takeValue(evt.target.value, loginAcceptButton) });
loginAcceptButton.addEventListener('click', () => { sendLogin(nameValue, input, user, greetingText, loginWindow, search) });


//Остальной код_______________


const API_KEY = '?api_key=61165aac189ece3ae64e67d82e58db65';
const BASE_URL = 'https://api.themoviedb.org/3/';
let params = ''


params = 'trending/all/day'

let url = BASE_URL + params + API_KEY;
fetch(url)
    .then(resp => resp.json())
    .then(data => data.results)
    .then(array => {
        let result = array.map(elem => {
            console.log('Result:', elem)
            const { poster_path, backdrop_path, name, vote_average, first_air_date, title, id } = elem

            return `
            <li class="movies__item">
            <div class="movie__card">
            <img class="movie__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" loading="lazy" alt="" data-src = "https://image.tmdb.org/t/p/w500/${backdrop_path}"/>
            
            <div class="movie__label">
            <h3 class="movie__name">${title || name}</h3>
             <p class="movie__genre">Жанр<span class="movie__year">${first_air_date || '2021'}</span></p>
            </div>
            </div>
            </li>`
        }).join('')
        list.insertAdjacentHTML('beforeend', result)

    })

