$(document).ready(function () {
	$('#search').hideseek({
		attribute: 'title',
		nodata: 'No results found',
		hidden_mode: false,
		highlight: false,		
		min_chars: 2
	});
});