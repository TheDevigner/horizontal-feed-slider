// Slider elements
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
const sliderGrid = document.querySelector('#slider');
const sliderProgressBar = document.querySelector('#slider-progress-bar');

// get url parameters or set slider properties to default (2 columns 3 rows)
const urlParams = new URLSearchParams(window.location.search);
const columns = urlParams.get('columns') || 3;
const rows = urlParams.get('rows') || 2;
const auto_play = urlParams.get('autoplay') || 'false';
const total_items = sliderGrid.childElementCount;

let slider = new Slider(columns, rows, auto_play, total_items);

// fix columns 1 and rows to 1 on mobile viewport
var mql = window.matchMedia('(max-width: 600px)');
mql.matches ? slider.render(true) : slider.render();

// viewport listener  
mql.addListener(screenTest);

function screenTest(e) {
  /* the viewport is less than than 600 pixels wide */
  (e.matches) ? slider.render(true): slider.render();
}

// move to the Next Slide on next button click
nextButton.addEventListener('click', (e) => {
  slider.nextSlide();
  e.preventDefault();
});

// move to the previous Slide on previous button click
previousButton.addEventListener('click', e => {
  slider.previousSlide();
  e.preventDefault();
});

// autoplay
let autoplay = slider.autoPlayOn() ? setInterval(() => {
  slider.nextSlide();
}, 3000) : 0;
