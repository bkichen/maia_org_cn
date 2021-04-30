// JavaScript Document
$(document).ready(function(){
	$('.nav ul>li').hover(function(){
		$(this).addClass('on');
		$(this).children('dl').stop().slideDown();
	},function (){
        $(this).removeClass('on');
		$(this).children('dl').stop().slideUp();
	})

});