$(function() {
	$(window).bind('scroll', function() {
			if ($(window).scrollTop() > 50) {
					$('#branding').addClass('sticky-nav');
			} else {
					$('#branding').removeClass('sticky-nav');
			}
	});

});
