$(document).ready(function () {

	/* This is basic - uses default settings */

	// $("a#single_image").lightbox();

	/* Using custom settings */

	$("a#inline").lightbox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */

	$("a.group").lightbox({
		'transitionIn': 'elastic',
		'transitionOut': 'elastic',
		'speedIn': 600,
		'speedOut': 200,
		'overlayShow': false
	});

});