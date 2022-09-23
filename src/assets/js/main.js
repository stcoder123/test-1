// enable these three for the multistep form
import './vendor/jquery.min.js'
import './vendor/jquery.easing.min.js'
import multistep from './multi-step-form.js'

import './vendor/jquery.viewportchecker.min.js'
import contentLoaded from './vendor/contentloaded.min.js'
//import accordion from './accordion.js'
import images from './images.js'
import phoneConcat from './phone-concatination.js'
import polyfill from './polyfills.js'
import sliders from './sliders.js'
import smoothScroll from './smooth-scroll.js'
import stickyHeader from './sticky-header.js'
//import timer from './timer.js'
//import videos from './video-embeds.js'
import viewAnimation from './view-animation.js'
import getCurrentMonth from './month.js'
import kkThankYou from './thank-you.js'
import readMore from './read-more.js'

contentLoaded()

window.contentLoaded(window, function (e) {
	polyfill()
	kkThankYou()
	// phoneConcat()
	images()
	getCurrentMonth()
	sliders()
	readMore()
	smoothScroll()
	stickyHeader()
	// videos()
	viewAnimation()
	getCurrentMonth()
	multistep()

	//accordion()
	//timer()

	// enable for multistep form
	// use jquery ready() function instead of contentLoaded if using multistep form
	// jQuery(document).ready(function($){ // functions to run });
	// multistep();
})
