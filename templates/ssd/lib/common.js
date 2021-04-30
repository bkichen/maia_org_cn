function AESEncrypt(str){
    var key = CryptoJS.enc.Utf8.parse("12345678900000001234567890000000"); 
    var iv = CryptoJS.enc.Utf8.parse("1234567890000000");
    var encrypted = '';

    var srcs = CryptoJS.enc.Utf8.parse(str);
    encrypted = CryptoJS.AES.encrypt(srcs, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });

        return encrypted.ciphertext.toString();
}
function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if(fIEVersion == 7) {
            return 7;
        } else if(fIEVersion == 8) {
            return 8;
        } else if(fIEVersion == 9) {
            return 9;
        } else if(fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }   
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11  
    }else{
        return -1;//不是ie浏览器
    }
}

function browserRedirect() { 
    var sUserAgent= navigator.userAgent.toLowerCase(); 
    var bIsIpad= sUserAgent.match(/ipad/i) == "ipad"; 
    var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os"; 
    var bIsMidp= sUserAgent.match(/midp/i) == "midp"; 
    var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 
    var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb"; 
    var bIsAndroid= sUserAgent.match(/android/i) == "android"; 
    var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce"; 
    var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile"; 
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 
        return true;
    } else { 
        return false;
    } 
}
function queryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
function isEmail(str){ 
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/; 
    return reg.test(str); 
}

//切换验证码
function ToggleCode(obj, codeurl) {
    $(obj).children("img").eq(0).attr("src", codeurl + "?time=" + Math.random());
    return false;
}

function SiteSearch(send_url, divTgs) {

    var str = $.trim($(divTgs).val());
    if (str.length > 0) {
        window.location.href = send_url + "?keyword=" + encodeURI($(divTgs).val());
    }
}

function common_img_error(imgObject, default_src) {
    imgObject.src = default_src + "/images/nopic.png";
    imgObject.onerror = null;
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //¹¹ÔìÒ»¸öº¬ÓÐÄ¿±ê²ÎÊýµÄÕýÔò±í´ïÊ½¶ÔÏó
    var r = window.location.search.substr(1).match(reg);  //Æ¥ÅäÄ¿±ê²ÎÊý
    if (r != null) return decodeURI(r[2]); return null; //·µ»Ø²ÎÊýÖµ
}

function GoTo() {
    window.location.reload();
}




$(document).ready(function(){
  var ieVersion = IEVersion();
  //alert("ie:"+ieVersion);
  if(ieVersion!=-1 && ieVersion<=8){
    window.location.href = "/upgrade.html";
  }
  var protocal =  window.location.protocol;
  var url = window.location.href;
  var domain = window.location.host;
  var isdc = true;//is domain correct
  var re=/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/;//正则表达式   
  if(domain=="www.lib.cnu.edu.cn")
  {
  	url = url.replace("www.lib.cnu.edu.cn","lib.cnu.edu.cn");
  	isdc = false;
  }

  //if(protocal=="http:"&&!re.test(domain)&&domain.indexOf("localhost")<0){
  	//url = url.replace("http:","https:");
    //isdc = false;
  //}
  if(!isdc){
  	window.location.href = url;
  }
  
})

$("#search_btn").on('click', function (event) {
    SiteSearch('/search.html', '#keywords');   
})

$("#keywords,.search-keyword").on('keydown', function (event) {
    var browser = navigator.appName;
    var userAgent = navigator.userAgent;
    var code;
    if (browser.indexOf('Internet') > -1) {
        code = window.event.keyCode;  //IE
    }

    else if (userAgent.indexOf("Firefox") > -1) {
        code = event.which;
    } //»ðºü  

    else  //ÆäËüä¯ÀÀÆ÷  
    {
        code = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    }


    if (code == 13) {
        SiteSearch('/search.html', '#keywords');
    }  

    
})




