import LazyLinePainter from 'lazy-line-painter';
const heart = document.querySelector('#heart');
const filmLogo = document.querySelector('#film');

let config = {
  ease: 'easeLinear',
  strokeWidth: 1.5,
  strokeOpacity: 2,
  strokeColor: '#FF6B08',
  strokeCap: 'round',
  repeat: 1000,
};
const animationHaert = new LazyLinePainter(heart, config);
animationHaert.paint();

let myAnimation = new LazyLinePainter(filmLogo, {
  ease: 'easeLinear',
  strokeWidth: 1.7,
  strokeOpacity: 1,
  strokeColor: '#ff6b08',
  strokeCap: 'square',
});
myAnimation.paint();
