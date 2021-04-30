$(function(){
    wow = new WOW({
    　　animateClass:'animated',
    });
    wow.init();

    // 新闻公告
    $(".nb_top a").hover(function(){
        var aid = $(this).attr("aa");
        $(this).addClass("fcolor").siblings("a").removeClass("fcolor");
        $(this).parent().parent().parent().find(".news_top ."+aid+"__").css("display","block").siblings("a").css("display","none");
        $(this).parent().parent().find("."+aid+"_").stop().fadeIn().siblings(".nb_bottom").css("display","none");
        $(this).parent().parent().find("."+aid+"_").stop().fadeIn().siblings(".xw_bottom").css("display","none");
    })


    // 宣讲会/双选会轮播图
    $(".sxh_l span").click(function(){
        var aa = $(this).attr("aaa");
        $(this).addClass("fcolor").siblings("span").removeClass("fcolor");
        $(this).parent().find("."+aa+'__').css("display","block").siblings("a").css("display","none");
        $(this).parent().parent().find("."+aa+'_').stop().fadeIn().siblings(".sx_bottom").css("display","none");
    })

    $.fn.xuanlunbo = function (isLeftAndRight) {
        var that = $(this);
        var ul = that.find("ul");
        ul.append(ul.find("li").eq(0).clone());
        var imgWidth = ul.find("li").eq(0).width();
        var count = ul.find("li").size();
        var imgIndex = 0;
        var timer = setInterval(autoPlay, 4000);
        function autoPlay() {
            // imgIndex++;
            // if (imgIndex > count - 1) {
            //     ul.stop().animate({
            //         left: 0
            //     }, 0);
            //     imgIndex = 1;
            // }
            // ul.stop().animate({
            //     left: -imgIndex * imgWidth
            // }, 600);
        }
        that.parent().mouseenter(function () {
            clearInterval(timer);
        });
        // that.parent().mouseleave(function () {
        //     timer = setInterval(autoPlay, 4000);
        // });
        if (isLeftAndRight) {
            //左按钮
            that.parent().find(".xjbtn").eq(0).click(function () {
                $(this).css("outline", "none");
                imgIndex--;
                if (imgIndex < 0) {
                    ul.stop().animate({
                        left: -(count - 1) * imgWidth
                    }, 0);
                    imgIndex = count - 2;
                }
                ul.stop().animate({
                    left: -imgIndex * imgWidth
                }, 600);
            })
            //右按钮
            that.parent().find(".xjbtn").eq(1).click(function () {
                $(this).css("outline", "none");
                  imgIndex++;
            if (imgIndex > count - 1) {
                ul.stop().animate({
                    left: 0
                }, 0);
                imgIndex = 1;
            }
            ul.stop().animate({
                left: -imgIndex * imgWidth
            }, 600);
            })
        }
    }
    $.fn.sxhuuilunbo = function (isLeftAndRight) {
        var that = $(this);
        var ul = that.find("ul");
        ul.append(ul.find("li").eq(0).clone());
        var imgWidth = ul.find("li").eq(0).width();
        var count = ul.find("li").size();
        var imgIndex = 0;
        var timer = setInterval(autoPlay, 4000);
        function autoPlay() {
            // imgIndex++;
            // if (imgIndex > count - 1) {
            //     ul.stop().animate({
            //         left: 0
            //     }, 0);
            //     imgIndex = 1;
            // }
            // ul.stop().animate({
            //     left: -imgIndex * imgWidth
            // }, 600);
        }
        that.parent().mouseenter(function () {
            clearInterval(timer);
        });
        that.parent().mouseleave(function () {
            timer = setInterval(autoPlay, 4000);
        });
        if (isLeftAndRight) {
            //左按钮
            that.parent().find(".sxbtn").eq(0).click(function () {
                $(this).css("outline", "none");
                imgIndex--;
                if (imgIndex < 0) {
                    ul.stop().animate({
                        left: -(count - 1) * imgWidth
                    }, 0);
                    imgIndex = count - 2;
                }
                ul.stop().animate({
                    left: -imgIndex * imgWidth
                }, 600);
            })
            //右按钮
            that.parent().find(".sxbtn").eq(1).click(function () {
                $(this).css("outline", "none");
                imgIndex++;
                if (imgIndex > count - 1) {
                    ul.stop().animate({
                        left: 0
                    }, 0);
                    imgIndex = 1;
                }
                ul.stop().animate({
                    left: -imgIndex * imgWidth
                }, 600);
            })
        }
    }

    // 新闻公告
    $(".news_li span").hover(function(){
        var aid = $(this).attr("aid");
        $(this).addClass("fcolor").siblings("span").removeClass("fcolor");
        $(this).parent().parent().parent().find("."+aid+"_").css("display","block").siblings("a").css("display","none");
        $(this).parent().parent().parent().find("."+aid+"__").stop().fadeIn().siblings(".news_wa").css("display","none");
    })

    $(".zdy_main a").hover(function(){
        $(this).find("span").stop().animate({"font-size":"16px"},500);
    },function(){
        $(this).find("span").stop().animate({"font-size":"14px"},500);
    })

    // 飘窗
    $('.automv').autoMove({angle:-Math.PI/4, speed:50});
    $(".automv span").click(function(){
        $(this).parent("a").removeAttr("href");
        $(this).parents(".automv").hide();
    })

})