import filmCards from "../templates/film-keyword.hbs"
import dataGenres from "../data/genres_id.json"
const list = document.querySelector('.movies')
const searchInput = document.querySelector('.search')


const API_KEY = '61165aac189ece3ae64e67d82e58db65';
const BASE_URL = `https://api.themoviedb.org/3`


//получить массив жанров

// const urlGanreList =`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
// const requestGanreList = fetch(urlGanreList)
// .then((response)=>response.json())
// .then((data)=>{
//     console.log(data.genres);
//     return data.genres
// })
         


const onSubmit = event => {
    event.preventDefault();
    clearListMovie();
    
    const userRequest = event.currentTarget.elements.query.value.trim();
     
    let params = `/search/movie?api_key=${API_KEY}&query=${userRequest}&language=en-US&page=1&include_adult=false`
    const url = BASE_URL + params
    
    fetch(url).then((response)=>{
        return response.json()
    }).then(data=>{
        if(data.results.length ===0){
            throw new Error ('ничего не найдено')
        }
        return data.results
    }).then(array=>{

        list.insertAdjacentHTML('beforeend', filmCards(array))
    })
    
    searchInput.reset();
};

function clearListMovie() {
    list.innerHTML = '';
}

searchInput.addEventListener('submit', onSubmit)