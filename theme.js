const btnTheme = document.querySelector('.btn-change-theme');
const rootStyles = document.documentElement.style;

const darkTheme = {
  '--bg-color': '#eee',
  '--bg-color-2': '#fff',
  '--text-color': '#53575a',
  '--accent-color': 'red',
  '--font': "'Open Sans', sans-serif",
  ' --fontSize': '1.6rem',
};

btnTheme.addEventListener('click', () => {
  let values = Object.keys(darkTheme);
  for (let cssVar of values) {
    rootStyles.setProperty(cssVar, darkTheme[cssVar]);
  }
});
