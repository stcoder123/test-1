export default function readMore() {
	;(function ($) {
		$(window).on('load', function () {
			// Components loading animations
			$(document).ready(function () {
				$('.btn-opener').click(function () {
					$('.case-study-row').toggleClass('info-active')
				})
			})
		})
	})(jQuery)
}
