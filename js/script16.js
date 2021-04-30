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
(function($){
	$.fn.tab = function (options){
		var defaults = {         //默认参数
	        parents : '#tabArticleList',
			ev : 'mouseover',    //默认事件
			delay : 150,         //延迟时间
			auto : true,         //是否自动切换
			speed : 2000,        //自动切换间隔时间
			more : false         //是否有more,默认为false,无
		};

		var options = $.extend(defaults, options);  //用户设置参数覆盖默认参数

		(function (o){
			var $This = $(o.parents);
			var oTil = $This.find('.til_tab');
			var oBox = $This.find('.tabListBox');
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

	            	$(o.parents).on('mouseover',function (){
	            		clearInterval(timer2);
	            	})

	            	$(o.parents).on('mouseout',function (){
	            		timer2 = setInterval(play,o.speed);
	            	})
	            };
			})();

			function change(obj){
				iNum = $(obj).index();
				oTil.removeClass('on');
				oBox.css('display','none');
				if(o.more){
					oMore = $This.find('.more_tab');
					oMore.css('display','none');
					oMore.eq(iNum).css('display','block');
				};
				oTil.eq(iNum).addClass('on');
				oBox.eq(iNum).css('display','block');
			}
		})(options);
	};
})(jQuery);
