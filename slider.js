class Slider {
    
    constructor(columns = 2, rows = 3, auto_play = false, total_items){
        this.grid_columns = columns;
        this.grid_rows = rows;
        this.auto_play = auto_play;
        this.current_slide = 0;
        this.first_slide = 0;
        this.items_per_slides = columns * rows;
        this.total_items = total_items;
        this.slide_count = Math.ceil((this.total_items - this.items_per_slides) / this.grid_rows);
        this.docElementStyle = document.documentElement.style;
        console.log(this);
    }

    render(){
        this.grid_columns = columns;
        this.grid_rows = rows;
        this.current_slide = 0;
        this.items_per_slides = columns * rows;
        this.slide_count = Math.ceil((this.total_items - this.items_per_slides) / this.grid_rows);
        
        // init slider rows and columns
        this.docElementStyle.setProperty('--columns', this.grid_columns);
        this.docElementStyle.setProperty('--rows', this.grid_rows);
        this.docElementStyle.setProperty('--current-slide', this.current_slide);

        sliderProgressBar.style.width = this.current_slide / this.slide_count * 100 + '%';
    }

    renderMobileView(){
        this.grid_columns = 1;
        this.grid_rows = 1;
        this.current_slide = 0;
        this.items_per_slides = this.grid_columns * this.grid_columns;
        this.slide_count = Math.ceil((this.total_items - this.items_per_slides) / this.grid_rows);
        console.log(this.grid_columns + ' ' + this.grid_rows + ' ' + this.items_per_slides + ' ' + this.slide_count);

        this.docElementStyle.setProperty('--columns', this.grid_columns);
        this.docElementStyle.setProperty('--rows', this.grid_rows);
        this.docElementStyle.setProperty('--current-slide', this.current_slide);

        sliderProgressBar.style.width = this.current_slide / this.slide_count * 100 + '%';
    }

    nextSlide(){
        
        // check if there is still content to preview
        if ( !this.isOnLastSlide() ){
            // shift content to the left and current slide number
            
            this.docElementStyle.setProperty('--current-slide', ++this.current_slide);
            
            // update slider progress bar
            sliderProgressBar.style.width = this.current_slide / this.slide_count * 100 + '%';
         }   
    }

    previousSlide(){
        // Check the slider is not on the first Slide
        if( !this.isOnFirstSlide() ){
            // shift slid one block to the right and current slide number
            this.docElementStyle.setProperty('--current-slide', --this.current_slide);  
            
            // update slider progress bar 
            sliderProgressBar.style.width = this.current_slide / this.slide_count * 100 + '%';
        }
    }

    isOnLastSlide(){
        return this.current_slide === this.slide_count;
    }

    isOnFirstSlide(){
        return this.current_slide  === this.first_slide;
    }

    autoPlayOn(){
        return auto_play === 'true';
    }

}