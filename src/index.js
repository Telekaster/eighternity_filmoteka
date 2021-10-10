// Импорты___________________
import './sass/main.scss';
import './js/open-library';
import './js/footer';
import refs from './js/refs';
import loginWindowOpen from './js/login_window';
import closeLoginWindow from './js/login_close_window';
import takeValue from './js/login_takeValue';
import sendLogin from './js/login_sendLogin';
import submitByEnter from './js/login_submit_by_enter';


// Переменные________________

const { loginButton, search, loginWindow, loginClose, loginAcceptButton, loginInput, greetingText } = refs();


let nameValue = '';

// Добавила Лиля________________
const list = document.querySelector('.movies')
// _____________________________

const user = {
    name: '',
}


// Слушатели событий_________
loginButton.addEventListener('click', () => { loginWindowOpen(search, loginWindow, loginAcceptButton) });
loginClose.addEventListener('click', () => { closeLoginWindow(search, loginWindow) });
loginInput.addEventListener('input', (evt) => { return nameValue = takeValue(evt.target.value, loginAcceptButton) });
loginAcceptButton.addEventListener('click', () => { sendLogin(nameValue, loginInput, user, greetingText, loginWindow, search) });
window.addEventListener('keydown', (evt) => { submitByEnter(loginAcceptButton, evt, nameValue, loginInput, user, greetingText, loginWindow, search) });


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
             <p class="movie__genre">Жанр <span class="movie__year">${first_air_date || '2021'}</span></p>
            </div>
            </div>
            </li>`
        }).join('')
        list.insertAdjacentHTML('beforeend', result)

    })

    // поиск по ключевому слову
    import "./js/searchByKeyword.js"