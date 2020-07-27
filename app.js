import ChangeColor from './class.js';

const height = document.documentElement.scrollHeight;
const clientHeight = document.documentElement.clientHeight;
const unitScroll = (height - clientHeight) / 100;
const red = document.getElementById('red'),
  green = document.getElementById('green'),
  blue = document.getElementById('blue');

new ChangeColor(red, '--bg_color_red');
new ChangeColor(blue, '--bg_color_blue');
new ChangeColor(green, '--bg_color_green');

document.addEventListener('scroll', () => {
  const scrollWidth = (scrollY / unitScroll).toFixed(0);
  const rootStyles = document.documentElement.style;
  rootStyles.setProperty('--bar_width', scrollWidth);
});
