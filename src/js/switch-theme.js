import refs from './refs.js';
const{moon,sun,body}=refs();

moon.addEventListener('click', darkTheme);
sun.addEventListener('click', ligthTheme);

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const{LIGHT, DARK}=Theme;

function darkTheme(){
    document.body.classList.add(DARK);
    moon.classList.add('accent-icon');
    sun.classList.remove('accent-icon');
    localStorage.setItem('theme', body.classList.value);
}
function ligthTheme(){
    document.body.classList.remove(DARK);
    sun.classList.add('accent-icon');
    moon.classList.remove('accent-icon');
    localStorage.setItem('theme', body.classList.value);
}

function onSwitcherChange(){
    const userTheme = localStorage.getItem('theme');
     if (userTheme === DARK) {
        document.body.classList.add(DARK);
        moon.classList.add('accent-icon');
        sun.classList.remove('accent-icon'); 
        }else{
            sun.classList.add('accent-icon'); 
            moon.classList.remove('accent-icon');
        }
    }

  onSwitcherChange()
