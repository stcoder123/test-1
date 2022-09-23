import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
Swiper.use([Navigation, Pagination, Autoplay])

export default function sliders() {
	;(function ($) {
		$(window).on('load', function () {
			// get all sliders, we need to loop them due to different settings + nav
			var swipers = document.querySelectorAll('.swiper-logos')
			swipers.forEach(function (el, index) {
				var closestSection = el.closest('section')
				var controls = closestSection.querySelector('.control')

				// slider settings
				var options = {
					speed: 600,
					loop: true,
					slidesPerView: 3,
					spaceBetween: 12,
					breakpoints: {
						640: {
							spaceBetween: 15,
							slidesPerView: 4,
						},
						992: {
							spaceBetween: 10,
							slidesPerView: 5,
						},
						1199: {
							spaceBetween: 10,
							slidesPerView: 7,
						},
					},
					autoplay: {
						delay: 5000,
						disableOnInteraction: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					thumbs: {},
				}

				// For gallery sliders
				if (controls) {
					options.thumbs.swiper = new Swiper(controls, {
						speed: 600,
						loop: true,
						slidesPerView: 2,
						spaceBetween: 10,
						freeMode: true,
						centeredSlides: true,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						autoplay: {
							delay: 5000,
							disableOnInteraction: true,
						},
						breakpoints: {
							640: {
								slidesPerView: 3,
							},
							992: {
								slidesPerView: 4,
							},
						},
					})
				}

				// init slider
				new Swiper(el, options)
			})

			var swipers = document.querySelectorAll('.award-swiper')
			swipers.forEach(function (el, index) {
				var closestSection = el.closest('section')
				var controls = closestSection.querySelector('.control')

				// slider settings
				var options = {
					speed: 600,
					loop: true,
					slidesPerView: 3,
					breakpoints: {
						640: {
							spaceBetween: 10,
							slidesPerView: 3,
						},
						992: {
							spaceBetween: 10,
							slidesPerView: 4,
						},
						1199: {
							spaceBetween: 10,
							slidesPerView: 5,
						},
					},
					autoplay: {
						delay: 5000,
						disableOnInteraction: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					thumbs: {},
				}

				// For gallery sliders
				if (controls) {
					options.thumbs.swiper = new Swiper(controls, {
						speed: 600,
						loop: true,
						slidesPerView: 2,
						spaceBetween: 10,
						freeMode: true,
						centeredSlides: true,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						autoplay: {
							delay: 5000,
							disableOnInteraction: true,
						},
						breakpoints: {
							640: {
								slidesPerView: 3,
							},
							992: {
								slidesPerView: 4,
							},
						},
					})
				}

				// init slider
				new Swiper(el, options)
			})

			var swipers = document.querySelectorAll('.reviews')
			swipers.forEach(function (el, index) {
				var closestSection = el.closest('section')
				var controls = closestSection.querySelector('.control')

				// slider settings
				var options = {
					speed: 600,
					loop: true,
					slidesPerView: 1,
					breakpoints: {
						640: {
							spaceBetween: 0,
							slidesPerView: 1,
						},
						992: {
							spaceBetween: 0,
						},
						1172: {
							spaceBetween: 0,
							slidesPerView: 1,
						},
					},
					autoplay: {
						delay: 5000,
						disableOnInteraction: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					thumbs: {},
				}

				// For gallery sliders
				if (controls) {
					options.thumbs.swiper = new Swiper(controls, {
						speed: 600,
						loop: true,
						slidesPerView: 2,
						spaceBetween: 10,
						freeMode: true,
						centeredSlides: true,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						autoplay: {
							delay: 5000,
							disableOnInteraction: true,
						},
						breakpoints: {
							640: {
								slidesPerView: 3,
							},
							992: {
								slidesPerView: 4,
							},
						},
					})
				}

				// init slider
				new Swiper(el, options)
			})

			var swipers = document.querySelectorAll('.client-reviews')
			swipers.forEach(function (el, index) {
				var closestSection = el.closest('section')
				var controls = closestSection.querySelector('.control')

				// slider settings
				var options = {
					speed: 600,
					loop: true,
					slidesPerView: 1,
					breakpoints: {
						640: {
							spaceBetween: 0,
							slidesPerView: 1,
						},
						992: {
							spaceBetween: 0,
						},
						1172: {
							spaceBetween: 0,
							slidesPerView: 1,
						},
					},
					autoplay: {
						delay: 5000,
						disableOnInteraction: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					pagination: {
						el: '.swiper-pagination',
						clickable: true,
					},
					thumbs: {},
				}

				// For gallery sliders
				if (controls) {
					options.thumbs.swiper = new Swiper(controls, {
						speed: 600,
						loop: true,
						slidesPerView: 2,
						spaceBetween: 10,
						freeMode: true,
						centeredSlides: true,
						watchSlidesVisibility: true,
						watchSlidesProgress: true,
						autoplay: {
							delay: 5000,
							disableOnInteraction: true,
						},
						breakpoints: {
							640: {
								slidesPerView: 3,
							},
							992: {
								slidesPerView: 4,
							},
						},
					})
				}

				// init slider
				new Swiper(el, options)
			})
		})
	})(jQuery)
}
