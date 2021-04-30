function lunbo(){
	//程序的最开始，复制一个li，追加到ul的最后
	$("#banner .tupian li:first").clone().appendTo("#banner .tupian ul");

	var nowimg = 0;	//信号量，指示的是当前图片的编号。
	var mytimer;
	
	//自动轮播
	

	//右按钮的监听，绑定的是一个有名函数youanniudongzuo，目的是为了定时器也方便调用
	$("#banner .youanniu").click(youanniudongzuo);
	
	//右按钮动作函数
	function youanniudongzuo(){
		if(!$("#banner .tupian ul").is(":animated")){
			if(nowimg < $("#banner .tupian li").length - 2){
				//当还没有滚动到最后一张图的时候，进行正常的轮播
				nowimg ++;
				//动画！
				$("#banner .tupian ul").animate({"left":-1329 * nowimg},1429);
			}else{
				nowimg = 0;
				//当到了最后一张图的时候，往猫腻图上拉一次，然后瞬间变为0；
				$("#banner .tupian ul").animate({"left":-1329 * ($("#banner .tupian li").length-1)},1429,function(){
					//动画执行之后，往0上面瞬移
					$("#banner .tupian ul").css("left",0);
				});
			}
			//小圆点
			$("#banner .xiaoyuandianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	}

	//左按钮的监听
	$("#banner .zuoanniu").click(
		function(){
			if(!$("#banner .tupian ul").is(":animated")){
				if(nowimg > 0){
					//还没有到第1张图的时候，所以正常执行动画
					nowimg --;
					//动画！
					$("#banner .tupian ul").animate({"left":-1329 * nowimg},1429);
				}else{
					nowimg = $("#banner .tupian li").length - 2;

					//已经到达最后一张图了
					$("#banner .tupian ul").css("left",-1329 * ($("#banner .tupian li").length-1));
					$("#banner .tupian ul").animate({"left":-1329 * nowimg},1429);
				}

				
				$("#banner .xiaoyuandianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
			}
		}
	);

	//小圆点的监听
	$("#banner .xiaoyuandianul li").click(
		function(){
			if(!$("#banner .tupian ul").is(":animated")){
				nowimg = $(this).index();
				//动画！
				$("#banner .tupian ul").animate({"left":-1329 * nowimg},1429);
				$("#banner .xiaoyuandianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
			}
		}
	);

	$("#banner").mouseenter(
		function(){
			window.clearInterval(mytimer);
		}
	);

	$("#banner").mouseleave(
		function(){
			window.clearInterval(mytimer);
			//自动轮播
			
		}
	);
}



/*tab切换*/
(function($){
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
