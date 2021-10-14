import refs from './refs.js';



const { API_KEY, BASE_URL, btnLibOpen, btnHomeOpen, headerLib, watchedBtn, list, loginButton } = refs();
// console.log(loginButton.id);



function getNameUser() {
const userName = loginButton.id
    const saveData = localStorage.getItem(userName);
const parseData = JSON.parse(saveData);
     
return [...parseData.watched];
}

async function getFetch(url) {
    try {
       const response = await fetch(url);
      
    const  fetchedObj = await response.json();
    
    return fetchedObj 
    } catch (error) {
        console.log(error.message);
    }

};

function createMarkup (data) {
                  
                    const { poster_path, backdrop_path, name, vote_average, first_air_date, title, id } = data;
                    
                     return `
                <li class="movies__item" >
                <div class="movie__card">
                <img class="movie__img" id=${id} src="https://image.tmdb.org/t/p/w500/${poster_path}" loading="lazy" 
                alt="${title}" data-src = "https://image.tmdb.org/t/p/w500/${backdrop_path}"/>
                
                <div class="movie__label">
                <h3 class="movie__name">${title || name}</h3>
                 <p class="movie__genre">Genre <span class="movie__year">${first_air_date}</span></p>
                </div>
                </div>
                </li>`
}

  async function arrMarkupStrings(idArr) {
       return idArr.map(id => {
        let url = `${BASE_URL}/movie/${id}${API_KEY}&language=en-US`
           getFetch(url)
               .then((data) => {
                  return createMarkup(data)
               })
               
             .then((string) => {
                //  console.log(string);
                 list.insertAdjacentHTML('beforeend', string)
                 
           })
                
    });
   
}


  
    //кнопка для створення тексту для користувача з пустим списком фільмів.
    //value для функції це або watched або queue
function createTxtForClearWindow(value) {
    const libClear = document.createElement('h3')
        libClear.textContent = `Your ${value} list is clear. Here you can add your first movie! :)`
        libClear.classList.add('lib-clear-txt')
        list.before(libClear)
}


btnLibOpen.addEventListener('click', async() => {
   
    list.innerHTML = '';
    const idArr = getNameUser()

    if (idArr.length === 0) {
        createTxtForClearWindow('watched')
    } else {
        arrMarkupStrings(idArr)
    }
    
})

    
                
btnHomeOpen.addEventListener('click', async () => {
   list.innerHTML = '';
    // document.querySelector('.lib-clear-txt').remove();
    let url = BASE_URL + 'trending/all/day' + API_KEY;
// const markupArr = []
    const response = await getFetch(url)
    const data = await response.results
   const markupArr = await data.map(el => {
     const result =  createMarkup(el)
       
         list.insertAdjacentHTML('beforeend', result)
    })

       
})