//判断子菜单的宽度
function snavWidth(){
  var liWidth = $('#nav li');
  liWidth.each(function(){
    $(this).find('.subNav').css('width',$(this).width());
    })
  };
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
function tab(id){
  var oTab = $(id);
  var oLi = oTab.find('ul').eq(0).find('li');
  var oDd = oTab.find('dd')
   oLi.hover(function(e) {
     var thisLi =$(this);
            //$(this).addClass('active').sibling('li').removeClass('active');
           //setTimeout(function(){
         thisLi.siblings('li').removeClass('active');  // 删除其他兄弟元素的样式
        thisLi.addClass('active');                            // 添加当前元素的样式
        oDd.css('display','none');
        oDd.eq(thisLi.index()).css('display','block').siblings().css('display','none');
         }
         //,100)
        //}
    );
  }


