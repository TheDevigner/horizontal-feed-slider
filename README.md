
# Horizontal Feed Slider


# How to lunch :
Tested on the latest versions of the following browsers : 
+ chrome 
+ mozilla firefox
+ Opera

Run index.html on any http server or check out the live demo on :
## [Demo](https://horizontal-feed-slider.netlify.com)

# Languages :
* JS ES6
* CSS3
* HTML5

# Configure app :

The slider columns and rows as well as autoplay ON/OFF can be specified through url. 
if non specified, parameters will be set to the default values :
+ *rows = 2*
+ *columns = 3*
+ *autoplay = false*
	
## query examples :

* https://horizontal-feed-slider.netlify.com
* https://horizontal-feed-slider.netlify.com?columns=3&rows=2&autoplay=true
		
running the app on http server is required to set conifg slider through query parameters.
although you could always directly open the index.html on the browser.


# Todo:

* add number of content to fill the slider via url parameter
* add preview images and videos feature
* Create Slider Horizontal Feed as an HTML component that can be configured through custom properties
	```html
	<horizontal-feed-slider rows="" columns="" autoplay="true"> </horizontal-feed-slider>
	```
* fetch data from external data source 
* add lazy loading feature
* enhance Slider Responsive user experience
