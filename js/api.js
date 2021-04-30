jQuery.support.cors = true;
//检测是否为空
function is_wxempty(obj){
	if(obj == null || obj=="" || obj == undefined || obj == "0"){
		return true;
	}else{
		return false;
	}
}

//时间转换
function timestampToTime(timestamp,type) {
	if(timestamp==0){
		return "";
	}
	var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	Y = date.getFullYear();
	M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	D = (date.getDate()<10 ? '0'+date.getDate() : date.getDate() ) + ' ';
	h = (date.getHours()<10 ? '0'+date.getHours() : date.getHours() )+ ':';
	m = (date.getMinutes()<10 ? '0'+date.getMinutes() : date.getMinutes() ) + ':';
	s = (date.getSeconds()<10 ? '0'+date.getSeconds() : date.getSeconds() );
	if(type==0){
		return Y+M+D+h+m+s;
	}else if(type==1){
		return Y+'-'+M+D;
	}else if(type==2){
		M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
		return Y+'-'+M;
	}else if(type==3){
		return D;
	}else if(type==4){
		return h+m+s;
	}else if(type==5){
		return (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
	}else if(type==6){
        M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
        return M+"-"+D;
	}else if(type==7){
        return Y;
	}else if(type==8){
		return Y+'-'+M+D;
	}
}
//薪资转换
function xinziExec(floor,ceil){
    if(floor == 0 && ceil == 0){
        return "面议";
	}else if(floor > 0 && ceil == 0){
        return floor +'以下';
    }else if(floor == 0 && ceil > 0){
        return ceil +'以上';
    }else{
        return floor+'-'+ceil;
    }
}
function UrlUpdateParams(url, name, value) {
	var r = url;
	if (r != null && r != 'undefined' && r != "") {
		value = encodeURIComponent(value);
		var reg = new RegExp("(^|)" + name + "=([^&]*)(|$)");
		var tmp = name + "=" + value;
		if (url.match(reg) != null) {
			r = url.replace(eval(reg), tmp);
		}else {
			if (url.match("[\?]")) {
				r = url + "&" + tmp;
			} else {
				r = url + "?" + tmp;
			}
		}
	}
	return r;
}

//普通异步请求
function http(method, api, data, success, error) {
    var login_admin_school_id = sessionStorage.getItem("school_id") || '';
    var login_admin_school_code = sessionStorage.getItem("login_admin_school_code") || '';
    var login_user_id = sessionStorage.getItem("userid") || 1;

	data = data || {};
	data.login_user_id = login_user_id;
	data.login_admin_school_code = login_admin_school_code;
	data.login_admin_school_id = login_admin_school_id;
	var base64 = new Base64();
	$.ajax({
	headers: {'auth': "Baisc "+base64.encode(apiuser+":"+apipass)},
	url: host + api,
	type: method,        
	data: data,
	dataType: 'json',
	success: function (response) {
			success(response);
		},
	error: function (response) {
			if (error != null) {
				error(response);
			}
		}    
	});
}
//上传图片
function http2(method, api, data, success, error) {
    var login_admin_school_id = sessionStorage.getItem("school_id") || '';
    var login_admin_school_code = sessionStorage.getItem("login_admin_school_code") || '';
    var login_user_id = sessionStorage.getItem("userid") || 1;

	data = data || {};
	data.append("login_user_id", login_user_id);
	data.append("login_admin_school_id", login_admin_school_id);
	data.append("login_admin_school_code", login_admin_school_code);
	var base64 = new Base64();
	$.ajax({
	headers: {'auth': "Baisc "+base64.encode(apiuser+":"+apipass)},
	url: host + api,
	type: method,        
	data: data,
	dataType: 'json',
	processData: false,//用于对data参数进行序列化处理 这里必须false
    contentType: false, //必须
	success: function (response) {
			success(response);
		},
	error: function (response) {
			if (error != null) {
				error(response);
			}
		}    
	});
}

//同步获取数据
function http3(method, api, data, success, error) {
    var login_admin_school_id = sessionStorage.getItem("school_id") || '';
    var login_admin_school_code = sessionStorage.getItem("login_admin_school_code") || '';
    var login_user_id = sessionStorage.getItem("userid") || 1;

	data = data || {};
	data.login_user_id = login_user_id; 
	data.login_admin_school_id = login_admin_school_id;
	data.login_admin_school_code = login_admin_school_code;
	var base64 = new Base64();
	$.ajax({
	headers: {'auth': "Baisc "+base64.encode(apiuser+":"+apipass)},
	url: host + api,
	type: method,        
	data: data,
	async:false,
    cache:false,
	dataType: 'json',
	success: function (response) {
			success(response);
		},
	error: function (response) {
			if (error != null) {
				error(response);
			}
		}    
	});
}

function httpGet(api, data, callback) {
	http("GET", api, data, callback);
}

function httpPost(api, data, callback) {
	http("POST", api, data, callback);
}
//上传文件使用
function httpPost2(api, data, callback) {
	http2("POST", api, data, callback);
}


function Base64() { 
	// private property 
	_keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; 
	// public method for encoding 
	this.encode = function (input) { 
		var output = ""; 
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4; 
		var i = 0; 
		input = _utf8_encode(input); 
		while (i < input.length) { 
			chr1 = input.charCodeAt(i++); 
			chr2 = input.charCodeAt(i++); 
			chr3 = input.charCodeAt(i++); 
			enc1 = chr1 >> 2; 
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4); 
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6); 
			enc4 = chr3 & 63; 
			if (isNaN(chr2)) { 
				enc3 = enc4 = 64; 
			} else if (isNaN(chr3)) { 
				enc4 = 64; 
			} 
			output = output + 
			_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + 
			_keyStr.charAt(enc3) + _keyStr.charAt(enc4); 
		} 
		return output; 
	} 
	// public method for decoding 
	this.decode = function (input) { 
		var output = ""; 
		var chr1, chr2, chr3; 
		var enc1, enc2, enc3, enc4; 
		var i = 0; 
		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, ""); 
		while (i < input.length) { 
			enc1 = _keyStr.indexOf(input.charAt(i++)); 
			enc2 = _keyStr.indexOf(input.charAt(i++)); 
			enc3 = _keyStr.indexOf(input.charAt(i++)); 
			enc4 = _keyStr.indexOf(input.charAt(i++)); 
			chr1 = (enc1 << 2) | (enc2 >> 4); 
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2); 
			chr3 = ((enc3 & 3) << 6) | enc4; 
			output = output + String.fromCharCode(chr1); 
			if (enc3 != 64) { 
				output = output + String.fromCharCode(chr2); 
			} 
			if (enc4 != 64) { 
				output = output + String.fromCharCode(chr3); 
			} 
		} 
		output = _utf8_decode(output); 
		return output; 
	} 
	// private method for UTF-8 encoding 
	_utf8_encode = function (string) { 
		string = string.replace(/\r\n/g,"\n"); 
		var utftext = ""; 
		for (var n = 0; n < string.length; n++) { 
			var c = string.charCodeAt(n); 
			if (c < 128) { 
				utftext += String.fromCharCode(c); 
			} else if((c > 127) && (c < 2048)) { 
				utftext += String.fromCharCode((c >> 6) | 192); 
				utftext += String.fromCharCode((c & 63) | 128); 
			} else { 
				utftext += String.fromCharCode((c >> 12) | 224); 
				utftext += String.fromCharCode(((c >> 6) & 63) | 128); 
				utftext += String.fromCharCode((c & 63) | 128); 
			} 
		} 
		return utftext; 
	} 
	// private method for UTF-8 decoding 
	_utf8_decode = function (utftext) { 
		var string = ""; 
		var i = 0; 
		var c = c1 = c2 = 0; 
		while ( i < utftext.length ) { 
			c = utftext.charCodeAt(i); 
			if (c < 128) { 
				string += String.fromCharCode(c); 
				i++; 
			} else if((c > 191) && (c < 224)) { 
				c2 = utftext.charCodeAt(i+1); 
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63)); 
				i += 2; 
			} else { 
				c2 = utftext.charCodeAt(i+1); 
				c3 = utftext.charCodeAt(i+2); 
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)); 
				i += 3; 
			} 
		} 
		return string; 
	} 
}

/*
		三个参数
		file：一个是文件(类型是图片格式)，
		w：一个是文件压缩的后宽度，宽度越小，字节越小
		objDiv：一个是容器或者回调函数
		photoCompress()
		*/
function photoCompress(file,w,objDiv){
	var ready=new FileReader();
	/*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
	ready.readAsDataURL(file);
	ready.onload=function(){
		var re=this.result;
		canvasDataURL(re,w,objDiv)
	}
}
function canvasDataURL(path, obj, callback){
	var img = new Image();
	img.src = path;
	img.onload = function(){
		var that = this;
		// 默认按比例压缩
		var w = that.width,
		h = that.height,
		scale = w / h;
		w = obj.width || w;
		h = obj.height || (w / scale);
		var quality = 0.7;  // 默认图片质量为0.7
		//生成canvas
		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		// 创建属性节点
		var anw = document.createAttribute("width");
		anw.nodeValue = w;
		var anh = document.createAttribute("height");
		anh.nodeValue = h;
		canvas.setAttributeNode(anw);
		canvas.setAttributeNode(anh);
		ctx.drawImage(that, 0, 0, w, h);
		// 图像质量
		if(obj.quality && obj.quality <= 1 && obj.quality > 0){
			quality = obj.quality;
		}
		// quality值越小，所绘制出的图像越模糊
		var base64 = canvas.toDataURL('image/jpeg', quality);
		// 回调函数返回base64的值
		callback(base64);
	}
}
/**
		* 将以base64的图片url数据转换为Blob
		* @param urlData
		*            用url方式表示的base64图片数据
		*/
function convertBase64UrlToBlob(urlData){
	var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
	bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
	while(n--){
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {type:mime});
}


var xhr;
//上传文件方法
function upload(file) {
	console.log(file);
	var fileObj = $("#"+file)[0].files[0] // js 获取文件对象
	var url = host+'index.php/Api/Shop7/update_order'; // 接收上传文件的后台地址 

	var form = new FormData(); // FormData 对象

	if(fileObj.size/1024 > 1025) { //大于1M，进行压缩上传
		photoCompress(fileObj, {
quality: 0.2
		}, function(base64Codes){
			//console.log("压缩后：" + base.length / 1024 + " " + base);
			var bl = convertBase64UrlToBlob(base64Codes);
			form.append("order_id", order_id);
			form.append(file, bl, "file_"+Date.parse(new Date())+".jpg"); // 文件对象
			xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
			xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
			xhr.onload = uploadComplete; //请求完成
			xhr.onerror =  uploadFailed; //请求失败

			xhr.send(form); //开始上传，发送form数据
			$("#loading").show();
		});
	}else{ //小于等于1M 原图上传
		form.append("order_id", order_id);
		form.append(file, fileObj); // 文件对象
		xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
		xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
		xhr.onload = uploadComplete; //请求完成
		xhr.onerror =  uploadFailed; //请求失败
		xhr.send(form); //开始上传，发送form数据
		$("#loading").show();
	}
}

//上传成功响应
function uploadComplete(evt) {
	//服务断接收完文件返回的结果

	var data = JSON.parse(evt.target.responseText);
	if(data.status==1) {
		console.log(data);
		window.location.reload();
	} 

}
//上传失败
function uploadFailed(evt) {
	alert("上传失败！");
}


(function ($) {
 $.extend({
  getUrlParam: function (m) {
   var sValue = location.search.match(new RegExp("[\?\&]" + m + "=([^\&]*)(\&?)", "i"));
   return sValue ? decodeURIComponent(sValue[1]) : sValue;
  },
  UrlUpdateParams: function (url, name, value) {
   var r = url;
   if (r != null && r != 'undefined' && r != "") {
    value = encodeURIComponent(value);
    var reg = new RegExp("(^|)" + name + "=([^&]*)(|$)");
    var tmp = name + "=" + value;
    if (url.match(reg) != null) {
     r = url.replace(eval(reg), tmp);
    }
    else {
     if (url.match("[\?]")) {
      r = url + "&" + tmp;
     } else {
      r = url + "?" + tmp;
     }
    }
   }
   return r;
  },
  is_wxempty: function (obj) {
   if(obj == null || obj=="" || obj == undefined || obj == "0"){
		return true;
	}else{
		return false;
	}
  },
  timestampToTime: function (timestamp,type) {
   if(timestamp==0){
		return "";
	}
	var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	Y = date.getFullYear() + '-';
	M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
	D = date.getDate() + ' ';
	h = date.getHours() + ':';
	m = date.getMinutes() + ':';
	s = date.getSeconds();
	if(type==0){
		return Y+M+D+h+m+s;
	}else if(type==1){
		return Y+M+D;
	}else if(type==2){
		return Y+M;
	}else if(type==3){
		return D;
	}
  }
 
 });
})(jQuery);


function addcookie(name,value,expireHours){
	var cookieString=name+"="+escape(value)+"; path=/";
	//判断是否设置过期时间
	if(expireHours>0){
		var date=new Date();
		date.setTime(date.getTime+expireHours*3600*1000);
		cookieString=cookieString+"; expire="+date.toGMTString();
	}
	document.cookie=cookieString;
}
 
function getcookie(name){
	var strcookie=document.cookie;
	var arrcookie=strcookie.split("; ");
	for(var i=0;i<arrcookie.length;i++){
	var arr=arrcookie[i].split("=");
	if(arr[0]==name)return decodeURIComponent(arr[1]); //增加对特殊字符的解析
	}
	return "";
}
 
function delCookie(name){//删除cookie
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval=getcookie(name);
	if(cval!=null) document.cookie= name + "="+cval+"; path=/;expires="+exp.toGMTString();
}

function timeToDate(time){
    var date = new Date(time*1000);
    return date.getFullYear()+"/"+ (date.getMonth()+1)+"/"+date.getDate();
}