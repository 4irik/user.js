// ==UserScript==
// @name Убиратор 2000
// @description Убирает со страницы посты авторов из списка `autors`
// @author 4irik
// @license AS IST
// @version 0.1
// @include https://geektimes.ru/*
// ==/UserScript==
// по мотивам:	https://habrahabr.ru/post/129343/
//		https://geektimes.ru/post/272164/
(function (window, undefined) {
	var w;
		if (typeof unsafeWindow != undefined) {
        	w = unsafeWindow
    	} else {
        	w = window;
    	}

	if (w.self != w.top) {
        	return;
    	}


	var autors = [
		'alizar',
		'marks',
		'ivansychev',
		'ragequit',
		'SLY_G',
	];

	autors.forEach(function(autor){
		document.querySelectorAll('.post-author__link[href$="/' + autor + '/"]').forEach(function(autorLink) {
			autorLink.closest('.post').style.display = 'none';
		});
	});

})(window);
