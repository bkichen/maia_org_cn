//下拉菜单 例调用：Nav('#nav');
function Nav(id){
	var oNav = $(id);
	var aLi = oNav.find('li');
	
	aLi.hover(function (){
        $(this).addClass('on');
	},function (){
        $(this).removeClass('on');
	})	
};

//select表单友情链接   例调用：onChange="location1(this)";
//链接网站在新标签页打开
function location1(s)
{       
	var d = s.options[s.selectedIndex].value;
    window.open(d);
    s.selectedIndex=0;	
};
//链接网站在本页面打开
function location2(s)
{  
	var d = s.options[s.selectedIndex].value;
	s.selectedIndex=0;
	window.top.location.href = d;	
};










function DY_scroll(wraper,prev,next,img,speed,or)
                                             { 
                                              var wraper = $(wraper);
                                              var prev = $(prev);
                                              var next = $(next);
                                              var img = $(img).find('dl');
                                              var w = img.find('dd').outerWidth(true);
                                              var s = speed;
                                              wraper.mouseover(function (){
                                                    prev.css('display','block');  
                                                    next.css('display','block');
                                              })
                                              wraper.mouseout(function (){
                                                    prev.css('display','block');  
                                                    next.css('display','block');
                                              })
                                              next.click(function()
                                                   {
                                                    img.animate({'margin-left':-w},function()
                                                              {
                                                               img.find('dd').eq(0).appendTo(img);
                                                               img.css({'margin-left':0});
                                                               });
                                                    });
                                              prev.click(function()
                                                   {
                                                    img.find('dd:last').prependTo(img);
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
											
											
											
						
											
											
											
