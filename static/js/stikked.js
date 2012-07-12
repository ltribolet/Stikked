var ST = window.ST || {}

ST.init = function() {
	ST.change();
	ST.expand();
	ST.show_embed();
};

ST.change = function() {
	$('.change').oneTime(3000,
	function() {
		$(this).fadeOut(2000);
	});
};

ST.show_embed = function() {
	$embed_field = $('#embed_field');
	$embed_field.hide();
	$embed_field.after('<a id="show_code" href="#">Show code</a>');
	$('#show_code').live('click',
	function() {
		$(this).hide();
		$embed_field.show().select();
		return false;
	});
};

ST.expand = function() {
	$('.expand').click(function() {
		if ($('.paste').hasClass('full')) {
			return false;
		}
		var window_width = $(window).width();
		var spacer = 20;
		if (window_width < 900) {
			window_width = 900;
			spacer = 0;
		}
		var new_width = (window_width - (spacer * 3));
		$('.text_formatted').animate({
			'width': new_width + 'px',
			'left': '-' + (((window_width - 900) / 2 - spacer)) + 'px'
		},
		200);
		return false;
	});
};

$(document).ready(function() {
	ST.init();
});
