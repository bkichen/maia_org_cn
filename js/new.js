$(function () {
loadTop('top');
});

function loadTop(id) {
var topBar;
if (typeof (id) === 'string') {
	topBar = $('#' + id);
} else {
	topBar = $(id);
}
topBar.css('z-index', '100');

var $bg = $('<div style="background:#ba000a;opacity:0;"></div>');
$bg.css('position', 'absolute');
$bg.css('width', topBar.css('width'));
$bg.css('height', topBar.css('height'));
$bg.css('z-index', '99');
var isShowBackground = false;
$(window).on('scroll', function (event) {
	if ($(document).scrollTop() == 0) {
		if (isShowBackground) {
			$bg.animate({
				opacity: 0
			}, 500);
			isShowBackground = false;
		}
		$bg.css('top', topBar.offset().top);
		$bg.css('left', topBar.offset().left);
	} else {
		if (!isShowBackground) {
			$bg.animate({
				opacity: 1
			}, 500);
			isShowBackground = true;
		}
		$bg.css('top', topBar.offset().top);
		$bg.css('left', topBar.offset().left);
	}
	event.stopPropagation();
});
topBar.bind('mouseenter', function () {
	if ($(document).scrollTop() == 0 && !isShowBackground) {
	   
		$bg.animate({
			opacity: 1
		}, 500);
		isShowBackground = true;
		$bg.css('top', topBar.offset().top);
		$bg.css('left', topBar.offset().left);
	}
});
topBar.bind('mouseleave', function () {
	if ($(document).scrollTop() == 0 && isShowBackground) {
	   
		$bg.animate({
			opacity: 0
		}, 500);
		isShowBackground = false;
	}
	$bg.css('top', topBar.offset().top);
	$bg.css('left', topBar.offset().left);
});
$('body').append($bg);
}

function timer(opj){
$(opj).find('ul').animate({
marginTop : ""  
},500,function(){  
$(this).css({marginTop : ""}).find("li:first").appendTo(this);  
})  
}
$(function(){ 
var num = $('.notice_active').find('li').length;
if(num > 1){
var time=setInterval('timer(".notice_active")',3500);
$('.gg_more a').mousemove(function(){
	clearInterval(time);
}).mouseout(function(){
	time = setInterval('timer(".notice_active")',3500);
}); 
}

$(".news_ck").click(function(){
location.href = $(".notice_active .notice_active_ch").children(":input").val();
})
});