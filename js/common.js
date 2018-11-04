$(document).ready(function() {
	$('#contacts').on("click", function() {
		$('.feedback').fadeIn().show();
	});
	$('.popup-close').on('click', function() {
		$('.feedback').fadeOut();
	});
});

var prev = document.querySelector('.slider .buttons .button-left');
var next = document.querySelector('.slider .buttons .button-right');
var img = document.querySelectorAll('.slider .slides img');
var i = 0;

prev.onclick = function(){
	alert(1);
}

next.onclick = function(){
	img[i].className = '';
	i++;
	if (i >= img.length) {
		i = 0
	}
	img[i].className = 'showed';
}

prev.onclick = function(){
	img[i].className = '';
	i--;
	if (i < 0) {
		i = img.length - 1;
	}
	img[i].className = 'showed';
}



