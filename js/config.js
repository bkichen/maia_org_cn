var host = "/mobile.php";
var apiuser = "10246";
var apipass = "10246";

var wxpage = sessionStorage.getItem("wx");//是否渲染微信版

browserRedirect();
function browserRedirect() {
    var browser = {
        versions: function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                trident: u.indexOf('Trident') > -1, //IE内核
                presto: u.indexOf('Presto') > -1, //opera内核
                webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
                webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
    if (browser.versions.mobile || browser.versions.ios || browser.versions.android) {
    	sessionStorage.setItem("phone",true);
    	//是否选择微信版
		if (wxpage == true) {
			//判断是否是移动设备打开。browser代码在下面
	        var host = 'http://w.jiuyeb.cn/';
	        var wxa = "wx18b479414f688786";

	        var lu = window.location.pathname;
	        var opt = window.location.search;
	        var opts = new Object();
	        if (opt.indexOf("?") != -1) {
	            var str = opt.substr(1);
	            strs = str.split("&");
	            for (var i = 0; i < strs.length; i++) {
	                opts[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
	            }
	        }
	        var id = opts.id;
	        var jobtype = opts.jobtype;
	        var comid = opts.comid;

	        if (lu.split('/')[1] == 'Chuangye') {
	            //双选会
	            if (lu.split('/')[2].indexOf('sxlb') >= 0) {
	                window.location.href = host + "shuangxh/lists.html?wxappid=" + wxa;
	                return false;
	            }
	            if (lu.split('/')[2].indexOf('detail') >= 0) {
	                window.location.href = host + "shuangxh/details.html?id=" + id + "&wxappid=" + wxa;
	                return false;
	            }
	        } else if (lu.split('/')[1] == 'Zhaopin') {
	            //招聘相关
	            if (lu.split('/')[2].indexOf('talk') >= 0) { //宣讲会列表
	                window.location.href = host + "teachIn/index1.html?wxappid=" + wxa;
	                return false;
	            }
	            if (lu.split('/')[2].indexOf('zuijin') >= 0) { //宣讲会详情
	                window.location.href = host + "teachIn/details.html?id=" + id + "&wxappid=" + wxa;
	                return false;
	            }
	            //校招公告
	            if (lu.split('/')[2].indexOf('zhaopinList') >= 0) { //校招公告列表
	                window.location.href = host + "xiaozhao/fairs.html?wxappid=" + wxa;
	                return false;
	            }
	            if (lu.split('/')[2].indexOf('xiaozhao') >= 0) { //校招公告
	                window.location.href = host + "xiaozhao/details.html?id=" + id + "&wxappid=" + wxa;
	                return false;
	            }
	            if (lu.split('/')[2].indexOf('zhiweiList') >= 0) {
	                if (jobtype == 1) {
	                    window.location.href = host + "myjob/position.html?wxappid=" + wxa;
	                    return false;
	                } else if (jobtype == 2) {
	                    window.location.href = host + "Trainee/machen_list.html?wxappid=" + wxa;
	                    return false;
	                }
	            }
	            if (lu.split('/')[2].indexOf('zhiweiDetail') >= 0) {
	                if (jobtype == 1) {
	                    window.location.href = host + "myjob/delivery_one.html?id=" + id + "&wxappid=" + wxa;
	                    return false;
	                } else if (jobtype == 2) {
	                    window.location.href = host + "Trainee/delivery_one.html?id=" + id + "&wxappid=" + wxa;
	                    return false;
	                }
	            }
	            window.location.href = host + "index.html?wxappid=" + wxa;
	            return false;
	        } else if (lu.split('/')[1] == 'News') {
	            if (lu.split('/')[2].indexOf('zdydetail') >= 0 || lu.split('/')[2].indexOf('newsXiang') >= 0) {
	                window.location.href = host + "catelist/info.html?id=" + id + "&wxappid=" + wxa;
	                return false;
	            } else if (lu.split('/')[2].indexOf('comdetail') >= 0) {
	                window.location.href = host + "company/cominfo.html?com_id=" + comid + "&wxappid=" + wxa;
	                return false;
	            } else {
	                //其他
	                window.location.href = host + "index.html?wxappid=" + wxa;
	                return false;
	            }
	        } else {
	            //其他
	            window.location.href = host + "index.html?wxappid=" + wxa;
	            return false;
	        }
		}else{
			sessionStorage.setItem("wx",false);
		}
    }else{
    	sessionStorage.setItem("phone",false);
    }
}









