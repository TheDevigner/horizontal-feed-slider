
// slider computed properties from styling file
const styles = getComputedStyle(document.body);      
const columnWidth = styles.getPropertyValue('--shift-slid');
const columnsStyle = parseInt(styles.getPropertyValue('--columns'));
const rowsStyle = parseInt(styles.getPropertyValue('--rows')); 

// Slider elements
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#previous');
const sliderGrid = document.querySelector('#slider');
const sliderProgressBar = document.querySelector('#slider-progress-bar');


// get url parameters or set to default
const urlParams = new URLSearchParams(window.location.search);
const columns = urlParams.get('columns') || columnsStyle;
const rows = urlParams.get('rows') || rowsStyle ;
const autoplay = urlParams.get('autoplay') || false;

// init slider rows and columns
const docElementStyle = document.documentElement.style;
docElementStyle.setProperty('--rows', rows);
docElementStyle.setProperty('--columns', columns);

// Slider properties
const GRID_LENGTH = sliderGrid.childElementCount; 
const GRID_COLUMNS = parseInt(columns); 
const GRID_ROWS = parseInt(rows);
const FIRST_SLIDE = 0; 
const GRID_CELLS_COUNT = GRID_ROWS * GRID_COLUMNS;
const SLIDES_COUNT = Math.ceil((GRID_LENGTH - GRID_CELLS_COUNT) / GRID_ROWS);

let currentSlide = 0;
let slidShift = 0;

console.log('Grid Length :' + GRID_LENGTH);
console.log('Slider size : ' + SLIDES_COUNT);
console.log('Grid Cells :' + GRID_CELLS_COUNT);

// move to the Next Slide on next button click
nextButton.addEventListener('click', ()=>{
    nextSlide();
} );

// move to the previous Slide on previous button click
previousButton.addEventListener('click', ()=>{
    previousSlide();
} );


let nextSlide = () => {
    // check if there is still content to preview
    if (!lastSlide()){
        // shift content to the left
        docElementStyle.setProperty('--current-slide', --slidShift);
        
        // update slider progress bar
        sliderProgressBar.style.width = ++currentSlide / SLIDES_COUNT * 100 + '%';
    }
}

let previousSlide = () =>{
    // Check the slider is not on the first Slide
    if( !firstSlide() ){
        // shift slid one block to the right
        docElementStyle.setProperty('--current-slide', ++slidShift);  
        
        // update slider progress bar and current slide number
        sliderProgressBar.style.width = --currentSlide / SLIDES_COUNT * 100 + '%';
    }
}

let lastSlide = () => {
    return currentSlide === SLIDES_COUNT;
}

let firstSlide = () =>{
    return currentSlide  === FIRST_SLIDE;
}

let autoPlayOn = () => {
    return autoplay === 'true';
}

let autoPlay = autoPlayOn() ? setInterval(nextSlide, 3000) : 0;


