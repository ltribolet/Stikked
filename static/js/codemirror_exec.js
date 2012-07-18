$(function() {
	modes = $.parseJSON($('#codemirror_modes').text());

	var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
		mode: "scheme",
		lineNumbers: true,
		matchBrackets: true,
		tabMode: "indent"
	});

	$('#lang').change(function() {
			set_language();
	});

	set_syntax = function(mode) {
		editor.setOption('mode', mode);
	};

	set_language = function() {

		var lang = $('#lang').val();
		mode = modes[lang];

		$.get(base_url + 'main/get_cm_js/' + lang,
			function(data) {
				if (data !== '') {
				set_syntax(mode);
				} else {
				set_syntax(null);
				}
			},
			'script'
		);
	};
});