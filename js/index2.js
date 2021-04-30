var cfg={
    "scroll":500,//滚动时间
    "stop":2000,//停留时间
    "num":5//图片数
};
function run(){
    if(parseInt($("#pnl_scroll").css("left"))>-(770*(cfg.num-1)))
    {
        run.index++;
        $("#pnl_scroll").animate({left : '-=770px'}, cfg.scroll,function(){
            $("#pnl_btn li.on").removeClass("on");
            $("#pnl_btn li").eq(run.index).addClass("on");
            start_auto();
        });
    }
    else
    {
        run.index=0;
        $("#pnl_scroll").animate({left : '0px'}, cfg.scroll,function(){
            $("#pnl_btn li.on").removeClass("on");
            $("#pnl_btn li").eq(run.index).addClass("on");
            start_auto();
        });
    }
}
run.index=0;
run.time=0;
function go_to(index){
    run.index=index;
    var left=770*index;
    $("#pnl_scroll").animate({left: '-'+left+'px'}, cfg.scroll,function(){
        $("#pnl_btn li.on").removeClass("on");
        $("#pnl_btn li").eq(run.index).addClass("on");
    });
}

function start_auto(){
    stop_auto();
    run.time=setTimeout(run,cfg.stop);
}
function stop_auto(){
    clearTimeout(run.time);
}
$(function(){
    start_auto();
    $("#pnl_btn,#pnl_scroll").hover(function(){
        stop_auto();
    },function(){
        start_auto();
    });
    $("#pnl_btn li").each(function(i,j){
        $(this).click(function(){
            go_to(i);
        });
    });
    setInterval(function(){
        $("li",$("#pnl_ey")).first().appendTo($("#pnl_ey"));
    },4000);
    $("#pnl_speak_b").mouseenter(function(){
        $("#pnl_speak").height(130);
    }).mouseleave(function(){
            $("#pnl_speak").height(55);
        });
    $("#pnl_together_b").mouseenter(function(){
        $("#pnl_together").show();
    }).mouseleave(function(){
            $("#pnl_together").hide();
        });
    $('#slide_box').mfwSlide();
});

$.fn.mfwSlide = function(options) {
    var settings = $.extend( {
        'width' : 260,
        'height': 240,
        'speed' : 300,
        'thumb_box' : '.slide_tab',
        'prev_btn' : '',
        'next_btn' : '',
        'thumb_focus_class' : 'on',
        'auto_play' : true,
        'interval' : 10
    }, options);
    return this.each(function(){
        var i = 0; //当前图片索引
        $(this).width(settings.width).height(settings.height);
        var li = $(this).find('ul>li').css('position', 'absolute');
        var n = li.length-1; //图片总数
        var speed = settings.speed;
        if(n>0){
            li.not(":first").css({left:settings.width + "px"});
            li.eq(n).css({left:'-'+settings.width + "px"});

            var thumb_box = $(this).find(settings['thumb_box']).css('overflow', 'hidden');
            var thumb = thumb_box.find('li');
            thumb.eq(0).addClass(settings['thumb_focus_class']);

            var fun_next_img = function (){
                if (!li.is(":animated")) {
                    li.eq(i).animate({left:'-' + settings.width + "px"},{duration :speed});
                    thumb.filter('.'+settings['thumb_focus_class']).removeClass(settings['thumb_focus_class']);
                    if(n==1){
                        li.eq(!i).css({left:settings.width + "px"});
                        li.eq(!i).animate({left:'0'},{duration :speed});
                        i=!i;
                        thumb.eq(i).addClass(settings['thumb_focus_class']);
                    } else {
                        if (i>=n){
                            li.eq(0).animate({left:"0"},{duration :speed, complete:function(){
                                li.eq(n-1).css({left:settings.width + "px"});
                                i = 0;
                                thumb.eq(i).addClass(settings['thumb_focus_class']);
                            }});
                        }else{
                            li.eq(i+1).animate({left:"0"},{duration :speed, complete:function(){
                                if(i==0){
                                    li.eq(n).css({left:settings.width + "px"});
                                } else {
                                    li.eq(i-1).css({left:settings.width + "px"});
                                }
                                i++;
                                thumb.eq(i).addClass(settings['thumb_focus_class']);
                            }});
                        };
                    }
                };
            };

            var fun_prev_img = function (){
                if (!li.is(":animated")) {

                    li.eq(i).animate({left:settings.width + "px"},{duration :speed});
                    thumb.filter('.'+settings['thumb_focus_class']).removeClass(settings['thumb_focus_class']);
                    if(n==1){
                        li.eq(!i).css({left:"-" + settings.width + "px"});
                        li.eq(!i).animate({left:'0'},{duration :speed});
                        i=!i;
                        thumb.eq(i).addClass(settings['thumb_focus_class']);
                    } else {
                        if (i<=0){
                            li.eq(n).animate({left:"0"},{duration :speed, complete:function(){
                                li.eq(n-1).css({left:'-'+settings.width + "px"});
                                i = n;
                                thumb.eq(i).addClass(settings['thumb_focus_class']);
                            }});
                        }else{
                            li.eq(i-1).animate({left:"0"},{duration :speed, complete:function(){
                                if(i==1){
                                    li.eq(n).css({left:'-'+settings.width + "px"});
                                } else {
                                    li.eq(i-2).css({left:'-'+settings.width + "px"});
                                }
                                i--;
                                thumb.eq(i).addClass(settings['thumb_focus_class']);
                            }});
                        }
                    }
                };
            };

            fun_jump_img = function($this){
                var id = $this.data('id');
                thumb.filter('.'+settings['thumb_focus_class']).removeClass(settings['thumb_focus_class']);
                $this.addClass(settings['thumb_focus_class']);

                if(i!=id){
                    li.eq(i).animate({left:'-' + settings.width + "px"},{duration :speed});
                    li.eq(id).css({left:settings.width + "px"});
                    li.eq(id).animate({left:'0'},{duration :speed, complete:function(){
                        if(id==0){
                            li.eq(n).css({left:'-'+settings.width + "px"});
                        } else {
                            li.eq(id-1).css({left:'-'+settings.width + "px"});
                        }
                        if(id==n){
                            li.eq(0).css({left:settings.width + "px"});
                        } else {
                            li.eq(id+1).css({left:settings.width + "px"});
                        }
                        i = id;
                    }});
                }
            };

            if(settings['auto_play']){
                time = setInterval(fun_next_img, settings['interval']*1000);
            }
            if(settings.next_btn!=''){
                $(settings['next_btn']).click(function(){
                    clearInterval(time);
                    fun_next_img();
                });
            }
            if(settings.prev_btn!=''){
                $(settings['prev_btn']).click(function(){
                    clearInterval(time);
                    fun_prev_img();
                });
            }
            thumb.click(function(){
                clearInterval(time);
                var $this = $(this);
                fun_jump_img($this);
            });

        }
    });
}
