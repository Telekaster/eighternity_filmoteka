import refs from './refs.js';

const {

    btnHomeOpen,
    btnLibOpen,
    headerMain,
    headerLib,

} = refs();

// ====== простіша версія==========
// btnLibOpen.addEventListener('click', openLibrary);
// btnHomeOpen.addEventListener('click', openLibrary);

// function openLibrary() {
    // headerMain.classList.toggle('current');
   // headerLib.classList.toggle('current');
// }
// ========================




// ========симпатичніша версія==========
btnLibOpen.addEventListener('click', 
nextSlide   
 );
btnHomeOpen.addEventListener('click', prevSlide);
function nextSlide() {
    
     headerMain.classList.add('to-left');
    headerMain.addEventListener('animationend', function () {
        
        this.classList.remove('active', 'to-left' );

    });

 headerLib.classList.add('next', 'from-right');
   headerLib.addEventListener('animationend', function () {
        this.classList.remove('next', 'from-right');
        this.classList.add('active');
        
    });

     }
function prevSlide() {
    
        headerLib.classList.add('to-right');
    headerLib.addEventListener('animationend', function () {
    this.classList.remove('active','to-right');

    });



 headerMain.classList.add('next', 'from-left');
   headerMain.addEventListener('animationend', function () {
        this.classList.remove('next', 'from-left');
        this.classList.add('active');
        
    });
}
// =======================================================
