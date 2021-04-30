//初始化信息
var initMConfig=function(){
	var gb_color = '#0e4493';
	var a = 11;
	var gb_img = '1-6';
	var gb_detail = '#0b3766';
	$('#eol_float').css('background-color',gb_color);
	$('#eol_float .askurl').css('background-color',gb_color);
	$('#eol_float .weixin').css('background-color',gb_detail);
	$('#eol_float .float-a2').css('background-color',gb_detail);
	$(".zsedlogo").attr('src','https://eda.eol.cn/app/static/images/e-'+gb_img+'.jpg');/*//自定义的图片logo链接*/
	
	var location = 2; /*//浮窗位置  1 左 2 右   */
			var location_top = '20%'; /*//上距离 */
				var location_left = '20px';/*//下距离 */
		
	if(location == 1){
					var location_left = '20px';/*//下距离 */
				$('.float').addClass('f-left');		
		$(".float").css("left",location_left);
		$(".float").css("top",location_top);
	}else if(location == 2){
					var location_left = '20px';/*//下距离 */
				$('.float').addClass('f-right');
		$(".float").css("right",location_left);
		$(".float").css("top",location_top);
	}
	
	var headImg = 1;/*//浮窗头图  1 开启  2 关闭  */
	if(headImg == 1){		
					$(".float-head").attr('src','https://eda.eol.cn//app/static/images/1-6.png');/*//自定义的图片logo链接*/
				
	}else{
		$('.float-head').hide();/*//隐藏*/
	}

	var board = 1;/*//1 开启 2 关闭*/
	if(board == 1){
		$('.board').attr('href','https://eda.eol.cn/board/index?id=4795');/*//给留言板的链家地址每个学校一个*/
	}else{
		$('.board').hide();/*//隐藏*/
	}
	var schoolid = '4795';
	var chinaSchoolid = '7405';
	/*//在线问答链接设置*/
	if(schoolid == chinaSchoolid){
		$('.askurl').attr('href','https://eda.eol.cn/moreschool');
	}else{
		$('.askurl').attr('href','https://eda.eol.cn/fillmess/index?id='+schoolid+'');
	}	

			$('.urllinks').hide();/* //隐藏*/
		

	var weixin = 1;/* //微信二维码  1展现   2隐藏*/
	if(weixin == 2){
		$('.weixin').hide();
	}else{
		if(location == 1){
							$('.wx-pic-left img').attr('src','https://eda.eol.cn//app/upload/image/202009/1598944564_6714_thumb.jpg');/*//给微信图片链接*/			
						
			$('.wx-pic-right').addClass('hide');
		}else if(location == 2){
							$('.wx-pic-right img').attr('src','https://eda.eol.cn//app/upload/image/202009/1598944564_6714_thumb.jpg');/*//给微信图片链接*/	
						
			$('.wx-pic-left').addClass('hide');
		}
	}
}
var html = '<div class="float" id="eol_float">'+
			'<img class="float-head" src="./images/head1.png" >'+
			'<img class="e-da zsedlogo" src="https://eda.eol.cn/app/static/images/e.png" >'+
			'<a class="float-a1 askurl" target="_blank" href="#">'+
				'<img src="https://eda.eol.cn/app/static/images/xinxi.png">'+
				'<span>智能问答</span>'+
			'</a>'+
			'<a class="float-a2 board" target="_blank" href="#">留言板</a>'+
			'<div class="urllinks">'+
			'</div>'+
			'<a class="float-a1 weixin" id="wx-postion" href="#">'+
				'<div id="mouse-event">'+
					'<img src="https://eda.eol.cn/app/static/images/weixin.png">'+
					'<span>招办微信</span>'+
				'</div>'+
				'<p class="wx-pic wx-pic-left"><img src="https://eda.eol.cn/app/static/images/auto_06.png"></p>'+
				'<p class="wx-pic wx-pic-right"><img src="https://eda.eol.cn/app/static/images/auto_06.png"></p>'+		
			'</a>'+		
		'</div>';

$("body").append(html);
initMConfig();
// 微信二维码
var wx_length = $('.wx-pic').length; //获取页面wxpic的个数
var has_hide = true;  //是否含有hide这个class名
var locationtmp = 2; /*//浮窗位置  1 左 2 右   */
$('#mouse-event').on('mouseenter',function(event){		
		event.stopPropagation();
		for(var i = 0;i<wx_length;i++){
			has_hide = $('.wx-pic').eq(i).hasClass('hide');
			if(!has_hide){
				if(locationtmp == 1){
					$('.wx-pic-left').fadeIn();
				}else{
					$('.wx-pic-right').fadeIn();
				}
			}
		}
		
	})
	$('#mouse-event').on('mouseleave',function(event){
		event.stopPropagation();
		if(locationtmp == 1){
			$('.wx-pic-left').fadeOut();
		}else{
			$('.wx-pic-right').fadeOut();
		}
	})