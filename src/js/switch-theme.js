import refs from './refs.js';
const { moon, sun, body, moonLibrary, sunLibrary } = refs();

moon.addEventListener('click', darkTheme);
sun.addEventListener('click', ligthTheme);
moonLibrary.addEventListener('click', darkTheme);
sunLibrary.addEventListener('click', ligthTheme);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

function darkTheme() {
  document.body.classList.add(DARK);
  moon.classList.add('accent-icon');
  sun.classList.remove('accent-icon');
  moonLibrary.classList.add('accent-icon');
  sunLibrary.classList.remove('accent-icon');
  localStorage.setItem('theme', body.classList.value);
}
function ligthTheme() {
  document.body.classList.remove(DARK);
  sun.classList.add('accent-icon');
  moon.classList.remove('accent-icon');
  sunLibrary.classList.add('accent-icon');
  moonLibrary.classList.remove('accent-icon');
  localStorage.setItem('theme', body.classList.value);
}

function onSwitcherChange() {
  const userTheme = localStorage.getItem('theme');
  if (userTheme === DARK) {
    document.body.classList.add(DARK);
    moon.classList.add('accent-icon');
    sun.classList.remove('accent-icon');
    moonLibrary.classList.add('accent-icon');
    sunLibrary.classList.remove('accent-icon');
  } else {
    sun.classList.add('accent-icon');
    moon.classList.remove('accent-icon');
    sunLibrary.classList.add('accent-icon');
    moonLibrary.classList.remove('accent-icon');
  }
}

onSwitcherChange();
