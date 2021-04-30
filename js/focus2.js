// JavaScript Document

$(function(){
		function banner01(){
			var index = 1;
			var len = $(".banner01 .list li").length;
			var time;
			
			for(i=1;i<=len;i++){
				var Obtn = $("<li>"+i+"</li>").appendTo($(".banner01 .btn"));
				}
			$(".banner01 .btn li").eq(0).addClass('hover');
			$(".banner01 .list li").eq(0).css("z-index","1");
			$(".banner01 .btn li").mouseover(function(){
					index = $(".banner01 .btn li").index(this);
					show(index);							
				})
			time = setInterval(function(){
					show(index);
					index++;
					if(index==len){index = 0}
				},6000);
			
			function show(index){
				$(".banner01 .list li p").removeClass('hover');
				$(".banner01 .list li").eq(index).find("p").addClass('hover');

				$(".banner01 .btn li").eq(index).addClass('hover').siblings("li").removeClass('hover');
				$(".banner01 .list li").eq(index).fadeIn(900).siblings("li").fadeOut(600);
			}
		}
		banner01();
	})

