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

function setTab(m,n){
var tli=document.getElementById("menu"+m).getElementsByTagName("li");
var mli=document.getElementById("main"+m).getElementsByTagName("ul");
for(i=0;i<tli.length;i++){
   tli[i].className=i==n?"hover":"";
   mli[i].style.display=i==n?"block":"none";
}
}


/*显示年月日时间*/
function showLocale(objD)
{
	var str,colorhead,colorfoot;
	var yy = objD.getYear();
	if(yy<1900) yy = yy+1900;
	var MM = objD.getMonth()+1;
	if(MM<10) MM = '0' + MM;
	var dd = objD.getDate();
	if(dd<10) dd = '0' + dd;
	var hh = objD.getHours();
	if(hh<10) hh = '0' + hh;
	var mm = objD.getMinutes();
	if(mm<10) mm = '0' + mm;
	var ss = objD.getSeconds();
	if(ss<10) ss = '0' + ss;
	var ww = objD.getDay();
	if  ( ww==0 )  colorhead="<font color=\"#fffff\">";
	if  ( ww > 0 && ww < 6 )  colorhead="<font color=\"#fffff\">";
	if  ( ww==6 )  colorhead="<font color=\"#fffff\">";
	if  (ww==0)  ww="星期日";
	if  (ww==1)  ww="星期一";
	if  (ww==2)  ww="星期二";
	if  (ww==3)  ww="星期三";
	if  (ww==4)  ww="星期四";
	if  (ww==5)  ww="星期五";
	if  (ww==6)  ww="星期六";
	colorfoot="</font>"
	str = colorhead + "今天是：" + yy + "年" + MM + "月" + dd + "日" + "  " + ww + colorfoot;
	return(str);
}
function tick()
{
	var today;
	today = new Date();
	document.getElementById("localtime").innerHTML = showLocale(today);
	window.setTimeout("tick()", 1000);
}
tick();