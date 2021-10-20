import refs from './refs.js';
import { fetchMovieList } from './api';
import { show, hide } from './spinner';
import observeCards from './intersectionObserver.js';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { container } from './pagination';

const { spinner,
    API_KEY,
    BASE_URL,
    btnLibOpen,
    btnHomeOpen,
    watchedBtn,
    queueBtn,
    list,
    libClearTxt,
    loginButton } = refs();


btnLibOpen.addEventListener('click', () => {
        if (watchedBtn.classList.contains('current')) {
            createWatchedPage()
        } else if (queueBtn.classList.contains('current')) {
            createQueuePage()
        }
  
        container.classList.add('d-none');    
 
}); 

queueBtn.addEventListener('click', createQueuePageOnClickBtn);

btnHomeOpen.addEventListener('click', async () => {
 
     libClearTxt.textContent = '';
    list.innerHTML = '';
    fetchMovieList(1); 
    container.classList.remove('d-none');
});


async function getFetch(url) {
    try {
       const response = await fetch(url);
      
    const  fetchedObj = await response.json();
    
    return fetchedObj 
    } catch (error) {
        console.log(error.message);
        Notify.warning('Ooops! Something goes wrong! Error: 404');
    }

};

function getUserData() {
    
    const userName = loginButton.id;  
        const saveData = localStorage.getItem(userName);
        return JSON.parse(saveData);       

};
function createMarkup(data) {
   
    const { poster_path,
        backdrop_path,
        title,
        id,
        genres,
       release_date
    } = data;

    const generatedTitle = generateTitle(title);
    const generatedGenres = generateGenres(genres);
    const generatedDate = generateData(release_date)
    
                     return `
                <li class="movies__item" >
                <div class="movie__card">
                <img class="movie__img"
                 id=${id} 
                 src="https://image.tmdb.org/t/p/w500/${poster_path}"
                 loading="lazy"
                alt="${title}"
                 data-src = "https://image.tmdb.org/t/p/w500/${backdrop_path}"/>
                
                <div class="movie__label">
                <h3 class="movie__name">${generatedTitle}</h3>
                 <p class="movie__genre">
                 ${generatedGenres}
                 <span class="movie__year">${generatedDate}</span></p>
                </div>
                </div>
                </li>`
};
function generateTitle(title) {
  if (title.length > 35) {
    return title.slice(0, 35) + '...';
   } return title;
  
};
function generateGenres(genres) {
    let genresId = genres.map(obj => {
       return obj.name   
  });
  if (genresId.length > 2) {
    return [genresId.slice(0, 2).join(', '), ' Other'];
  }
  if (genresId.length === 0) {
    return 'No genres';
  }
  return genresId.join(', ');
};
function generateData(release_date) {
  if (release_date) {
    return release_date.slice(0, 4);
    }  return 'No release date';
};
async function arrMarkupStrings(idArr) {
    show(spinner)
   
      return idArr.map(id => {
          let url = `${BASE_URL}/movie/${id}${API_KEY}&language=en-US`
           getFetch(url)
               .then((data) => {
                 return createMarkup(data)
               })
               
             .then((string) => {
                 hide(spinner);
                 list.insertAdjacentHTML('beforeend', string);
                 observeCards(list); 
                 
           })
                
    });
   
};
function createTxtForClearWindow(value) {
 libClearTxt.textContent = `Your ${value} list is clear. Here you  will see your movies collection. :)`
};
async function createWatchedPage() {
    list.innerHTML = '';
    libClearTxt.textContent = '';
    const idArr = getUserData().watched;
    
        
    const filteredIdArr =  idArr.filter(id=>id!==0)

  
    if (filteredIdArr.length === 0) {
        createTxtForClearWindow('watched')
    } else {
        arrMarkupStrings(filteredIdArr)
        observeCards(list); 
        }
    
};
async function createQueuePage() {
    list.innerHTML = '';
    libClearTxt.textContent = '';
    const idArr = getUserData().queue;
    const filteredIdArr = idArr.filter(id => id !== 0)
    
    if (filteredIdArr.length === 0) {
        createTxtForClearWindow('queue')
    } else {
        arrMarkupStrings(filteredIdArr)
        observeCards(list); 
    }

};
function createWatchedPageOnClickBtn() {
    watchedBtn.classList.add('current');
    queueBtn.classList.remove('current');
    createWatchedPage()
    watchedBtn.removeEventListener('click', createWatchedPageOnClickBtn)
}
function createQueuePageOnClickBtn() {
    createQueuePage()
        watchedBtn.classList.remove('current');
        queueBtn.classList.add('current');    
    watchedBtn.addEventListener('click', createWatchedPageOnClickBtn)
}



