// JavaScript Document
	
$(function(){
		$('.top_nav ul>li.top_nav_li').hover(function(){
			$(this).toggleClass('top_on');
			$(this).children('dl').stop().slideToggle();
		})

})

$(function(){
		$('.nav ul>li').hover(function(){
			$(this).toggleClass('on');
			$(this).children('dl').stop().slideToggle();
		})

})