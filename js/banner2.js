function ScrollPlay(options){
    var oPic = document.getElementById('pic');
    var oPrev = document.getElementById('prev');
    var oNext = document.getElementById('next');
    var oCont01 = document.getElementById('cont01');
    var oImgList01 = document.getElementById('imgs_list');
    var oImgList02 = document.getElementById('img_list02');
    var moveTimeObj01;
    var scrollDir = 'scrollTop';
    var offsetSize = 'offsetHeight';
    var scrollSize = 'scrollHeight';

    var inits = {
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
            goDown01();stopDown01();
        }, init.interval01)
    };

    function goUp01() {
        if (init.moveLock01) return;
        clearInterval(init.autoPlayObj01);
        init.moveLock01 = true;
        init.moveWay01 = "bottom";
        moveTimeObj01 = setInterval(function (){
            ISL_ScrUp_1();
        }, init.speed01);
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
        oCont01[scrollDir] -= init.space01
    }
    function goDown01() {
        clearInterval(moveTimeObj01);
        if (init.moveLock01) return;
        clearInterval(init.autoPlayObj01);
        init.moveLock01 = true;
        init.moveWay01 = "top";
        ISL_ScrDown_1();
        moveTimeObj01 = setInterval(function (){
            ISL_ScrDown_1();
        }, init.speed01)
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
