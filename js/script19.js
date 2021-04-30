//判断子菜单的宽度
function snavWidth(){
  var liWidth = $('#nav li');
  liWidth.each(function(){
    $(this).find('.subNav').css('width',$(this).width());
    })
  };
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



/*tab切换*/
;(function($){
    $.fn.extend({
        tab: function (options){
            var defaults = {         //默认参数
                ev : 'mouseover',    //默认事件'mouseover','click'
                delay : 100,         //延迟时间
                auto : true,         //是否自动切换 true,false
                speed : 2000,        //自动切换间隔时间(毫秒)
                more : false         //是否有more,false,true
            };
            var options = $.extend(defaults, options);  //用户设置参数覆盖默认参数
            return this.each(function (){
                var o = options;
                var obj = $(this);
                var oTil = obj.find('.til_tab');
                var oBox = obj.find('.tabListBox');
                var oMore = null;
                var iNum = 0;
                var iLen = oTil.length;

                //鼠标事件绑定
                oTil.bind(o.ev , function (){
                    var _this = this;
                    if(o.ev == 'mouseover' && o.delay){
                        _this.timer = setTimeout(function (){
                            change(_this);
                        },o.delay);
                    }else{
                        change(_this);
                    }; 
                })

                oTil.bind('mouseout',function (){
                    var _this = this;
                    clearTimeout(_this.timer);
                });

                //自动切换效果
                (function autoPlay(){
                    var timer2 = null;
                    if(o.auto){
                        function play(){
                            iNum++;
                            if(iNum >= iLen){
                                iNum =0;
                            };
                            change(oTil.eq(iNum));
                        };
                        timer2 = setInterval(play,o.speed);

                        obj.on('mouseover',function (){
                            clearInterval(timer2);
                        })

                        obj.on('mouseout',function (){
                            timer2 = setInterval(play,o.speed);
                        })
                    };
                })();

                function change(box){
                    iNum = $(box).index();
                    oTil.removeClass('on');
                    oBox.css('display','none');
                    if(o.more){
                        oMore = obj.find('.more_tab');
                        oMore.css('display','none');
                        oMore.eq(iNum).css('display','block');
                    };
                    oTil.eq(iNum).addClass('on');
                    oBox.eq(iNum).css('display','block');
                }
            });
        }
    })
})(jQuery);

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



