import LazyLinePainter from 'lazy-line-painter';
const heart = document.querySelector('#heart');

let config = {
  ease: 'easeLinear',
  strokeWidth: 1,
  strokeOpacity: 2,
  strokeColor: '#FF6B08',
  strokeCap: 'round',
  repeat: 1000,
};
const animationHaert = new LazyLinePainter(heart, config);

animationHaert.paint();
