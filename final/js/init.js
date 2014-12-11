window.onload = function() {

	var vid = document.getElementById('bgvid');

	$('.info').children('.data').hide();

	$('.overlay').mouseover(function() {
		$('video').css('-webkit-filter','blur(2px) grayscale(1)');
	}).mouseleave(function() {
		$('video').css('-webkit-filter','blur(0px)');
	});

	$('.pt').click(function() {
		var id = $(this).attr('id').split('-')[1];
		console.log(id);

		$('#map,.pt').hide();

		$('.info').children().fadeOut();
		//window.scrollBy(0,1200);
		$('#close2').show();
		$('#l'+id).fadeIn();
		$('nav').fadeOut
		// can play audio
		// #a+id
		$('#theaudio').play();
	});

	$('#about').click(function(){
		//$('#about').fadeOut();
		$('.info').children('.data').fadeOut();
		$('#intro').fadeIn();
	});

	$('#mute').click(function(){
		var e = $(this);
		if(e.text() === 'Mute'){
			vid.muted = true;
			e.text('Unmute');
		}
		else {
			vid.muted = false;
			e.text('Mute');
		}
	});

	$('#fullscreen').click(function(){
		var elem = vid;
		if (elem.requestFullscreen) {
		  elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
		  elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
		  elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
		  elem.webkitRequestFullscreen();
		}
	});


	$('#close').click(function() {
		$('#intro').fadeOut();
	});	

	$('#close2').click(function() {
		$('#close2').hide();
		$('#map,.pt').show();
		$('.data').fadeOut();
		$('nav').fadeIn();
	});		
  
}