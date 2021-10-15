import refs from './refs.js';
import { show, hide } from './spinner';
const { spinner, API_KEY, BASE_URL, btnLibOpen, btnHomeOpen,  watchedBtn, queueBtn, list, libClearTxt, loginButton } = refs();
// console.log(loginButton.id);



function getUserData () {
    const userName = loginButton.id;
    const saveData = localStorage.getItem(userName);
    return JSON.parse(saveData);
    
    // const targetIdArr = parseData.value;
    // return targetIdArr
    // return [...parseData];
}

async function getFetch(url) {
    // show(spinner);
    try {
       const response = await fetch(url);
      
    const  fetchedObj = await response.json();
    
    return fetchedObj 
    } catch (error) {
        console.log(error.message);
        //тут можна випливашку з меседжем повісити
    }

};
//це не працює!!! не знаю чому!_____________________________
function templateImgCheck(path) {
            
         const templateJpg = "./images/kamera-template.jpg"
        const templateWebp = "./images/kamera-template.webp"
        
        if (path === null) {
           return `${templateJpg}` 
        } else {
            return `https://image.tmdb.org/t/p/w500/${path}` 
        }         
}
    
//_______________________________________________________________


function createMarkup(data) {
   
                    const { poster_path, backdrop_path, name, vote_average, first_air_date, title, id } = data;

    
     const templateSrc =templateImgCheck(poster_path)
    const templateDataSrc = templateImgCheck(backdrop_path)
    
                     return `
                <li class="movies__item" >
                <div class="movie__card">
                <img class="movie__img" id=${id} src=${templateSrc} loading="lazy" 
                alt="${title}" data-src = "${templateDataSrc}"/>
                
                <div class="movie__label">
                <h3 class="movie__name">${title || name}</h3>
                 <p class="movie__genre">Genre <span class="movie__year">${first_air_date}</span></p>
                </div>
                </div>
                </li>`
}

async function arrMarkupStrings(idArr) {
      show(spinner)
      return idArr.map(id => {
          if (id === 0) {
              return;
          } 
        //   const page_query = `&page=${page}`;
        let url = `${BASE_URL}/movie/${id}${API_KEY}&language=en-US`
           getFetch(url)
               .then((data) => {
                  return createMarkup(data)
               })
               
             .then((string) => {
                 hide(spinner);
                 list.insertAdjacentHTML('beforeend', string);
                 
           })
                
    });
   
}

function createTxtForClearWindow(value) {
 libClearTxt.textContent = `Your ${value} list is clear. Here you can add your first movie! :)`
}
async function createWatchedPage() {
    list.innerHTML = '';
    const idArr = getUserData().watched
    if (idArr.length === 0) {
        createTxtForClearWindow('watched')
    } else {
        arrMarkupStrings(idArr)
    }
}
  
async function createQueuePage() {
     list.innerHTML = '';
    const idArr = getUserData().queue;
    if (idArr.length === 0) {
        createTxtForClearWindow('queue')
    } else {
        arrMarkupStrings(idArr)
    }


}


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


btnLibOpen.addEventListener('click', () => {
    if (watchedBtn.classList.contains('current')) {
        createWatchedPage()
    } else if(queueBtn.classList.contains('current')) {
         createQueuePage()
    }
})
 


 btnHomeOpen.addEventListener('click', async () => {
    list.innerHTML = '';
    
    if (libClearTxt.textContent!==null) {
      libClearTxt.innerText = '';
      
    }
   
    let url = BASE_URL + 'trending/all/day' + API_KEY;

    
    const response = await getFetch(url)
    const data = await response.results
  
    await data.map(el => {
     const result =  createMarkup(el)
       
         list.insertAdjacentHTML('beforeend', result)
    })

       
})

queueBtn.addEventListener('click', createQueuePageOnClickBtn)

