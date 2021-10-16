import refs from './refs.js'
 
const { buttonUP } = refs();

// function observeBtn() {



//     if (document.body.scrollTop > document.documentElement.clientHeight) {
//       buttonUP.classList.add('show')   
//     } else {
//         buttonUP.classList.remove('show')  
//     }

    // setTimeout(() => {
    //        buttonUP.classList.add('show')   
    //  }, 2000)        

// }

// observeBtn()
 

window.addEventListener('scroll', trackScroll)


buttonUP.addEventListener('click', backToTop)

function trackScroll() {

    const scrolled = window.scrollY;

    const coords = document.documentElement.clientHeight;
     
    if (scrolled >= coords) {
        buttonUP.classList.add('show')   
    }
    if (scrolled < coords) {
       buttonUP.classList.remove('show')   
    }
}
function backToTop() {
    if (window.scrollY > 0) {
        window.scrollBy(0, -80);
        // setTimeout(backToTop, 0);
    }
}