function Banner(){
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