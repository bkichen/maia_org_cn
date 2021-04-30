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



// 多张图片滚动切换（可调方向）
function ScrollPlay(options){
    var inits = {
        parents : 'scroll',
        speed01 : 10,   //run duration (Millisecond)
        space01 : 20,   //Movement speed (px)
        pageWidth01 : 480,  //Movement Distance (px)
        interval01 : 3000,  //Interval time (Millisecond)
        fill01 : 0,
        moveLock01 : false,
        moveWay01 : 'top',   //Movement direction ('top' , 'right')
        comp01 : 0,
        autoPlayObj01 : null,
        auto : true    //autoplay ('true' , 'false')
    };

    var init = extend({}, [options,inits]);

    var oPic = document.getElementById(init.parents);
    var oPrev = getByClass('prev',oPic)[0];
    var oNext = getByClass('next',oPic)[0];
    var oCont01 = getByClass('scrollBox',oPic)[0];
    var oImgList01 = getByClass('left',oPic)[0];
    var oImgList02 = getByClass('right',oPic)[0];
    var moveTimeObj01;
    var scrollDir = 'scrollTop';
    var offsetSize = 'offsetHeight';
    var scrollSize = 'scrollHeight';


    function extend(des, src, override){
        if(src instanceof Array){
            for(var i = 0, len = src.length; i < len; i++)
                 extend(des, src[i], override);
        }
        for( var i in src){
            if(override || !(i in des)){
                des[i] = src[i];
            }
        } 
        return des;
    };

    function getByClass(sClass,parent){
        var aEles = (parent||document).getElementsByTagName('*');
        var arr = [];
        for(var i=0; i<aEles.length; i++){
            var aClass = aEles[i].className.split(' ');
            for(var j=0; j<aClass.length; j++){
                if( aClass[j] == sClass ){
                    arr.push( aEles[i] );
                    break;
                }   
            }
        }
        return arr;
    };

    if(init.moveWay01 == 'top'){
        scrollDir = 'scrollTop';
        offsetSize = 'offsetHeight';
        scrollSize = 'scrollHeight';
    }else{
        scrollDir = 'scrollLeft';
        offsetSize = 'offsetWidth';
        scrollSize = 'scrollWidth';
    };

    picrun_ini();

    function AutoPlay_1() {
        
        clearInterval(init.autoPlayObj01);
        init.autoPlayObj01 = setInterval(function (){
            goDown01();
            stopDown01();
        }, init.interval01)
    };

    function goUp01() {

        if (init.moveLock01) return;
        clearInterval(init.autoPlayObj01);
        init.moveLock01 = true;
        init.moveWay01 = "bottom";

        moveTimeObj01 = setInterval(ISL_ScrUp_1, init.speed01);

    }
    function stopUp01() {
        if (init.moveWay01 == "top") {
            return
        };
        clearInterval(moveTimeObj01);
        if ((oCont01[scrollDir] - init.fill01) % init.pageWidth01 != 0) {
            init.comp01 = init.fill01 - (oCont01[scrollDir] % init.pageWidth01);
            CompScr_1()
        } else {
            init.moveLock01 = false
        }
        if(init.auto){
            AutoPlay_1();
        }else{ 
            return
        };
    }
    function ISL_ScrUp_1() {
        if (oCont01[scrollDir] <= 0) {
            oCont01[scrollDir] = oCont01[scrollDir] + oImgList01[offsetSize]
        }
        oCont01[scrollDir] -= init.space01;
    }
    function goDown01() {
        clearInterval(moveTimeObj01);
        if (init.moveLock01) return;
        clearInterval(init.autoPlayObj01);
        init.moveLock01 = true;
        init.moveWay01 = "top";
        ISL_ScrDown_1();
        moveTimeObj01 = setInterval(ISL_ScrDown_1, init.speed01)
    }
    function stopDown01() {
        if (init.moveWay01 == "bottom") {
            return
        };
        clearInterval(moveTimeObj01);
        if (oCont01[scrollDir] % init.pageWidth01 - (init.fill01 >= 0 ? init.fill01: init.fill01 + 1) != 0) {
            init.comp01 = init.pageWidth01 - oCont01[scrollDir] % init.pageWidth01 + init.fill01;
            CompScr_1()
        } else {
            init.moveLock01 = false
        }
        if(init.auto){
            AutoPlay_1();
        }else{ 
            return
        };
    }
    function ISL_ScrDown_1() {
        if (oCont01[scrollDir] >= oImgList01[scrollSize]) {
            oCont01[scrollDir] = oCont01[scrollDir] - oImgList01[scrollSize]
        }
        oCont01[scrollDir] += init.space01
    }
    function CompScr_1() {
        if (init.comp01 == 0) {
            init.moveLock01 = false;
            return
        }
        var num, TempSpeed = init.speed01,
        TempSpace = init.space01;
        if (Math.abs(init.comp01) < init.pageWidth01 / 2) {
            TempSpace = Math.round(Math.abs(init.comp01 / init.space01));
            if (TempSpace < 1) {
                TempSpace = 1
            }
        }
        if (init.comp01 < 0) {
            if (init.comp01 < -TempSpace) {
                init.comp01 += TempSpace;
                num = TempSpace
            } else {
                num = -init.comp01;
                init.comp01 = 0
            }
            oCont01[scrollDir] -= num;
            setTimeout(function (){
                CompScr_1();
            }, TempSpeed)
        } else {
            if (init.comp01 > TempSpace) {
                init.comp01 -= TempSpace;
                num = TempSpace
            } else {
                num = init.comp01;
                init.comp01 = 0
            }
            oCont01[scrollDir] += num;
            setTimeout(function (){
                CompScr_1();
            }, TempSpeed)
        }
    }
    function picrun_ini() {

        oImgList02.innerHTML = oImgList01.innerHTML;
        oCont01[scrollDir] = init.fill01 >= 0 ? init.fill01: oImgList01[scrollSize] - Math.abs(init.fill01);

        oCont01.onmouseover = function() {
            clearInterval(init.autoPlayObj01)
        }

        oCont01.onmouseout = function() {
            if(init.auto){
                AutoPlay_1();
            }else{ 
                return
            };
        }
        if(init.auto){
            AutoPlay_1();
        }else{ 
            return
        };
    };

    oPrev.onmousedown= function (){
        goUp01();
    }
    oPrev.onmouseup = oPrev.onmouseout= function (){
        stopUp01();
    }

    oNext.onmousedown = function (){
        goDown01();
    }
    oNext.onmouseup = oNext.onmouseout = function (){
        stopDown01();
    }
};