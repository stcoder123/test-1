export default function multistep() {
	window.setFormHeight = function(form) {
		form = $(form);

		form.closest('form').css('height', ''); // reset
	
		var elementHeights = form.map(function () {
			return $(this).innerHeight();
		}).get();
	
		var maxHeight = Math.max.apply(null, elementHeights);

		maxHeight += $('.progressbar').outerHeight();

		// Set each height to the max height
		form.closest('form').height(maxHeight);
	}

	//jQuery time
	if ($('.questionnaire-form').length) {

		$('.questionnaire-form').each(function(){	
			
			// Check which CRM is used
			var form = $('fieldset', this);
			var q_form = this;

			/* Make the outer wrapper the same height as the tallest field. */
			// Get an array of all element heights
			
			var resizeTimerForms;
			$(window).on('resize load', function () {
				clearTimeout(resizeTimerForms);
				resizeTimerForms = setTimeout(function () {
					setFormHeight(form);
				});
			});

			setFormHeight(form);
			
			// multistep form code
			var current_fs, next_fs, previous_fs; //fieldsets
			var left, opacity, scale; //fieldset properties which we will animate
			var checkboxChecked = false, radioChecked = false, textInput = false, phoneInput = false;
			var thisPhoneEl = false;
			var phoneValid = true;

			// With radio buttons, no need of next button
			$("form input[type=radio]").click(function() { 
				//Find nearest "next" button and activate it
				$(this).closest(form).find('input.next').click();
			});

			var processingClick = false;
			$(".next, ._submit", q_form).click(function(e){
				e.preventDefault();

				if(processingClick){
					return;
				}

				processingClick = true;
				
				current_fs = $(this).closest('.form-group');
				next_fs = current_fs.next();

				/* validation - if fails display an error message. */
				checkboxChecked = current_fs.find('input[type=checkbox]').is(":checked");
				radioChecked = current_fs.find('input[type=radio]').is(":checked");
				textInput = false;
				phoneInput = false;

				if (current_fs.find('input[type=text]').val() || current_fs.find('input[type=email]').val() || current_fs.find('input[type=tel]').val() || current_fs.find('textarea').val() || current_fs.find('select').val()) { 
					textInput = true 
				}

				thisPhoneEl = current_fs.find('input[name*="Phone"]');
				phoneValid = true;
				if(thisPhoneEl.length){
					phoneValid = _validatePhone(thisPhoneEl, false);
				}

				var thisEmail = current_fs.find('input[type=email]').val();
				if(textInput && thisEmail){
					textInput = _validateEmail(thisEmail);
				}

				if (checkboxChecked == false && radioChecked == false && textInput == false)
				{
					Sweetalert2.fire({
						title: "Something went wrong!",
						text: 'Please provide an answer to this question before moving on...',
						icon: 'error',
						showConfirmButton: false,
						timer: 5000,
					})
					processingClick = false;
				}
				else if(phoneValid == false){
					Sweetalert2.fire({
						title: "Something went wrong!",
						text: 'Please enter a valid phone number',
						icon: 'error',
						showConfirmButton: false,
						timer: 5000,
					})
					processingClick = false;
				}
				else {

					if(!$(this).hasClass('_submit')){
						//activate next step on progressbar using the index of next_fs
						$(".progressbar li", form.parent()).eq($(form).index(next_fs)).addClass("active");
						next_fs.css('visibility','visible'); 
						
						//hide the current fieldset with style
						current_fs.animate({opacity: 0}, {
							step: function(now, mx) {
								//1. scale current_fs down to 80%
								scale = 1 - (1 - now) * 0.2;
								//2. bring next_fs from the right(50%)
								left = (now * 50)+"%";
								//3. increase opacity of next_fs to 1 as it moves in
								opacity = 1 - now;
								
								current_fs.css({
									'transform': 'scale('+scale+')', 
									'pointer-events': 'none',
								});
								next_fs.css({ 
									'left': left, 
									'opacity': opacity, 
									'pointer-events': 'all',
								});
							}, 
							duration: 1000,

							//this comes from the custom easing plugin
							easing: 'easeInOutBack', 

							complete: function(){
								processingClick = false;
							}
						});
					}else{
						q_form.submit();
					}
				}

			});

			$(".previous", q_form).click(function(){

				if(processingClick){
					return;
				}

				processingClick = true;

				current_fs = $(this).closest('.form-group');
				previous_fs = current_fs.prev();
				
				//de-activate current step on progressbar & show previous step
				$(".progressbar li", form.parent()).eq($(form).index(current_fs)).removeClass("active");
				next_fs.css('visibility', 'visible'); 

				//hide the current fieldset with style
				current_fs.animate({opacity: 0}, {
					step: function(now, mx) {
						//1. scale previous_fs from 80% to 100%
						scale = 0.8 + (1 - now) * 0.2;
						//2. take current_fs to the right(50%) - from 0%
						left = ((1-now) * 50)+"%";
						//3. increase opacity of previous_fs to 1 as it moves in
						opacity = 1 - now;
						
						current_fs.css({
							'left': left,
							'pointer-events': 'none',
						});
						previous_fs.css({
							'transform': 'scale('+scale+')', 
							'opacity': opacity,
							'pointer-events': 'all',
						});
					}, 
					duration: 1000, 
					
					//this comes from the custom easing plugin
					easing: 'easeInOutBack',

					complete: function(){
						processingClick = false;
					}	
				});
			});

			// stop enter key submitting form
			document.addEventListener('keydown', function(e) {
			    if (e.which == '13') {
			      e.preventDefault();
			    }
			});

			function _validateEmail(emailVal){
				var reg = new RegExp(/.*@.*\..*/);
				return reg.test(emailVal);
			}	

			function _validatePhone(phoneInput, submitOnly){
				// remove this line if you want to validate phone numbers
				return true;

				var phoneVal = phoneInput.val();
				var reg = new RegExp(/^[0-9\s-+()]*$/m);	

				if(submitOnly){
					Sweetalert2.fire({
						title: "Something went wrong!",
						text: 'Please enter a valid phone number',
						icon: 'error',
						showConfirmButton: false,
						timer: 5000,
					})
					processingClick = false;
				}

				return reg.test(phoneVal);
			}
		});
	}
}
