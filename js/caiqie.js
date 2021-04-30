$(function(){
	$('#banneritem img').jqthumb({
		width: 1920,
		height: 664,
		after: function(imgObj){
			imgObj.css('opacity', 0).animate({opacity: 1}, 2000);
		}
	});

$('#nybans img').jqthumb({
		width: 1920,
		height: 400,
		after: function(imgObj){
			imgObj.css('opacity', 0).animate({opacity: 1}, 2000);
		}
	});

	
$('#D1pic1 img').jqthumb({
		width: 499,
		height: 352,
		after: function(imgObj){
			imgObj.css('opacity', 0).animate({opacity: 1}, 2000);
		}
	});

$('#imagelist img').jqthumb({
		width: 290,
		height: 203,
		after: function(imgObj){
			imgObj.css('opacity', 0).animate({opacity: 1}, 2000);
		}
	});

$('#qikanss img').jqthumb({
		width: 278,
		height: 282,
		after: function(imgObj){
			imgObj.css('opacity', 0).animate({opacity: 1}, 2000);
		}
	});

$('#actimage img').jqthumb({
		width: 100,
		height: 84,
		after: function(imgObj){
			imgObj.css('opacity', 0).animate({opacity: 1}, 2000);
		}
	});

$('.gf img').jqthumb({
		width: 240,
		height: 134,
		after: function(imgObj){
			imgObj.css('opacity', 0).animate({opacity: 1}, 2000);
		}
	});

	
});