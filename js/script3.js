/*function Banner(){
	var t = n = 0, count;
	$(document).ready(function(){
		count=$("#banner_list a").length;
		$("#banner_list a:not(:first-child)").hide();
		$("#banner_info").html($("#banner_list a").eq(0).find("img").attr('alt'));
		$("#bannerPic li").click(function() {
			var i = $(this).text() - 1;
			n = i;
			if (i >= count) return;
			$("#banner_info").html($("#banner_list a").eq(i).find("img").attr('alt'));
			$("#banner_info").unbind().click(function(){window.open($("#banner_list a").eq(i).attr('href'), "_blank")})
			$("#banner_list a").filter(":visible").fadeOut(1000).parent().children().eq(i).fadeIn(1000);
			document.getElementById("bannerPic").style.background="";
			$(this).toggleClass("on");
			$(this).siblings().removeAttr("class");
		});
		t = setInterval(showAuto, 3000);
		$("#bannerPic").hover(function(){clearInterval(t)}, function(){t = setInterval(showAuto, 3000);});
	})
	function showAuto()
	{
		n = n >=(count - 1) ? 0 : ++n;
		$("#bannerPic li").eq(n).trigger('click');
	}
}
*/
/*------------无缝滚动------*/
/*	window.onload=function(){
		var B=document.getElementById("page-box");
		var L=document.getElementById("top"); 
		var R=document.getElementById("bottom"); 
		
		R.innerHTML=L.innerHTML;
		var timer4=setInterval(fun,40);
		function fun(){
			if(L.offsetHeight-B.scrollTop<=0) 
			{
				B.scrollTop=0;
			}
			else
			{
				B.scrollTop++;
			}
		}
        	B.onmouseover=function(){

               clearInterval(timer4);  
         	}
         	B.onmouseout=function(){

         		timer4=setInterval(fun, 40)
         	}

	}*/

(function (){
	fn1();
	function fn1(){
	var speed=40;
	var demo=document.getElementById("demo");
	var demo1=document.getElementById("demo1");
	demo1.innerHTML+=demo1.innerHTML;
	var iTop = -1;
	demo1.style.height = demo1.offsetHeight +'px';

	function Marquee(){
	    if(demo1.offsetTop<-demo1.offsetHeight/2)
	    {
	        demo1.style.top='0';
	    }else if(demo1.offsetTop>0)
	    {
	        demo1.style.top=-demo1.offsetHeight/2+'px';
	    }
	        demo1.style.top=demo1.offsetTop+iTop+'px'; 
	}

	var MyMarNew=setInterval(Marquee,speed)
	demo.onmouseover=function() {clearInterval(MyMarNew)}
	demo.onmouseout=function() {MyMarNew=setInterval(Marquee,speed)}
	};
})();


function banner_scroll(){
	$(function(){
			var num=0;
	var goto;
	var neirong=$('.banner_scroll ul .text').html();

		$('.banner_scroll .right').click(function(e) {
            num++;
			if(num>3){
				num=0;
			}
			goto=num*-294;
			$('.banner_scroll ul').animate({'left':goto});
			$('.banner_scroll ul .text').animate({'left':goto});
        });	
		$('.banner_scroll .left').click(function(e) {
            num--;
			if(num<0){
				num=3;
			}
			goto=num*-294;
			$('.banner_scroll ul').css('left',goto);
			$('.banner_scroll ul .text')
        });	

	})
}



function DY_scroll(wraper,prev,next,img,speed,or)
                                             { 
                                              var wraper = $(wraper);
                                              var prev = $(prev);
                                              var next = $(next);
                                              var img = $(img).find('ul');
                                              var w = img.find('li').outerWidth(true);
                                              var s = speed;
                                              wraper.mouseover(function (){
                                                    prev.css('display','block');  
                                                    next.css('display','block');
                                              })
                                              wraper.mouseout(function (){
                                                    prev.css('display','none');  
                                                    next.css('display','none');
                                              })
                                              next.click(function()
                                                   {
                                                    img.animate({'margin-left':-w},function()
                                                              {
                                                               img.find('li').eq(0).appendTo(img);
                                                               img.css({'margin-left':0});
                                                               });
                                                    });
                                              prev.click(function()
                                                   {
                                                    img.find('li:last').prependTo(img);
                                                    img.css({'margin-left':-w});


                                                    img.animate({'margin-left':0});
                                                    });
                                              if (or == true)
                                              {
                                               ad = setInterval(function() { next.click();},s*1000);
                                               wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});
                                              }
                                             }
                                             DY_scroll('.imgs_scroll','.prev','.next','.imgs_news_list',3,false);// true为自动播放，不加此参数或false就默认不自动



function Banner2(){
	$(document).ready(function() {
	/*banner图切换*/
	var $key=0; 
       var timer=setInterval(autoplay, 5000);
       function autoplay(){
	       	$(".Banner2 ul li").eq($key).fadeOut(600);
	    	$key++;
			$key=$key%$(".Banner2 ul li").length; 

	    	$(".Banner2 ul li").eq($key).fadeIn(600);
	    	$(".Banner2 ol li").eq($key).addClass('current').siblings().removeClass('current');
       }
       $(".banner").hover(function() {
          clearInterval(timer);
          timer=null;
       }, function() {
         clearInterval(timer);  
         timer=setInterval(autoplay, 5000);  
       });
       $(".Banner2 ol li").click(function(event) {
      	$(".Banner2 ul li").eq($key).fadeOut(600);  
      	$key=$(this).index();
      	$(this).addClass('current').siblings().removeClass("current");
      	$(".Banner2 ul li").eq($key).fadeIn(600); 
        });

});
}


function Nav(){
	var oNav = document.getElementById('nav');
	var aLi = oNav.getElementsByTagName('li');
	
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].onmouseover = function ()
		{
			this.className = 'on';
		};
		aLi[i].onmouseout = function ()
		{
			this.className = '';
		};
	};
}