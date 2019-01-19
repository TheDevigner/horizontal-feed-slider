class Slider {

  constructor(columns = 2, rows = 3, auto_play = false, total_items) {
    this.grid_columns = columns;
    this.grid_rows = rows;
    this.auto_play = auto_play;
    this.current_slide = 0;
    this.first_slide = 0;
    this.items_per_slides = columns * rows;
    this.total_items = total_items;
    this.slide_count = Math.ceil((this.total_items - this.items_per_slides) / this.grid_rows);
    this.docElementStyle = document.documentElement.style;
  }

  render(isOnMobile) {
    this.updateSlider(isOnMobile);
  }

  updateSlider(isOnMobile) {
    this.updateSliderProperties(columns, rows, isOnMobile);
    this.updateSliderView();
  }

  updateSliderProperties(columns, rows, isOnMobile) {
    this.grid_columns = isOnMobile ? 1 : columns;
    this.grid_rows = isOnMobile ? 1 : rows;
    this.current_slide = 0;
    this.items_per_slides = this.grid_columns * this.grid_rows;
    this.slide_count = Math.ceil((this.total_items - this.items_per_slides) / this.grid_rows);
  }

  updateSliderView() {
    this.docElementStyle.setProperty('--columns', this.grid_columns);
    this.docElementStyle.setProperty('--rows', this.grid_rows);
    this.docElementStyle.setProperty('--current-slide', this.current_slide);
    sliderProgressBar.style.width = this.current_slide / this.slide_count * 100 + '%';
  }

  nextSlide() {
    // check if there is still content to preview
    if (!this.isOnLastSlide()) {
      // update current slide number and shift slider content one row to the left 
      this.current_slide++;
      this.updateSliderView();
    }
  }

  previousSlide() {
    // Check the slider is not on the first Slide
    if (!this.isOnFirstSlide()) {
      // update current slide number and shift slider content one row to the right
      this.current_slide--;
      this.updateSliderView();
    }
  }

  isOnLastSlide() {
    return this.current_slide === this.slide_count;
  }

  isOnFirstSlide() {
    return this.current_slide === this.first_slide;
  }

  autoPlayOn() {
    return auto_play === 'true';
  }

}
