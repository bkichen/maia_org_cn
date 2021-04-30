$(document).ready(function() {  
    var today=new Date(); 
    var chinese = ['日', '一', '二', '三', '四', '五', '六', '七', '八', '九']; 
    var y = today.getFullYear().toString();  
    var m = (today.getMonth()+1).toString();  
    var d = today.getDate().toString();  
    var result = "";  
    for (var i = 0; i < y.length; i++) {  
        result += chinese[y.charAt(i)];  
    }  
    if (m.length == 2) {  
        if (m.charAt(0) == "1") {  
            result += ("月" + chinese[m.charAt(1)] + "月");  
        }  
    }   
    else {  
        result += (chinese[m.charAt(0)] + "月");  
    }    
    $("date").innerHTML = result;
}); 

var calUtil = {
  showYear:2016,
  showMonth:1,
  showDays:1,
  eventName:"load",
  init:function(signList){
    //   console.log(signList);
    calUtil.draw(signList);
    calUtil.bindEnvent();
  },
  draw:function(signList){
    var str = calUtil.drawCal(calUtil.showYear,calUtil.showMonth,signList);
    $("#calendar").html(str);
    var chinese = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var result = "";  
    if (calUtil.showMonth.toString().length == 2) {  
        if (calUtil.showMonth.toString().charAt(0) == "1") {  
           if (calUtil.showMonth.toString().charAt(1) == "0") { 
              result += ("10"); 
            }
            else{
            result += ("1" + chinese[calUtil.showMonth.toString().charAt(1)]); 
          } 
        }  
    }   
    else {  
        result += (chinese[calUtil.showMonth.toString().charAt(0)]);  
    }      
    var calendarName=calUtil.showYear+"/"+result;
    $(".calendar_month_span").html(calendarName);
  },    

  bindEnvent:function(){
    $(".calendar_month_prev").click(function(){
      calUtil.eventName="prev";
      calUtil.setMonthAndDay();
      var year = calUtil.showYear;
      var month = calUtil.showMonth;
      month = (month<10 ? "0"+month:month); 
      calUtil.init(CreatZczphArea(year+"-"+month));
    });
    $(".calendar_month_next").click(function(){
      calUtil.eventName="next";
      calUtil.setMonthAndDay();
      var year = calUtil.showYear;
      var month = calUtil.showMonth;
      month = (month<10 ? "0"+month:month); 
      calUtil.init(CreatZczphArea(year+"-"+month));
    });

    $('#calendar .sign .on').hover(function(){
        $(this).find(".text").show();
        $(this).find(".arrow").show();
        $(this).siblings().find(".text").hide();
        $(this).siblings().find(".arrow").hide();
        $(this).parent().siblings().find(".text").hide();
        $(this).siblings().find(".arrow").hide();
        var height = $(this).find(".text").height();
        $(this).find(".text").css('top',-height-20);
    },function(){
        $(this).find(".text").hide();
        $(this).find(".arrow").hide();
    });
    $('#calendar .sign .on').click(function(){
        if($(this).find(".text").css("display")=="none"){
            $(this).find(".text").css("display","block");
            $(this).find(".arrow").show();
            $(this).siblings().find(".text").hide();
            $(this).siblings().find(".arrow").hide();
            $(this).parent().siblings().find(".text").hide();
            $(this).siblings().find(".arrow").hide();
            var height = $(this).find(".text").height();
            $(this).find(".text").css('top',-height-30);
        }else if($(this).find(".text").css("display")=="block"){
            $(this).find(".text").css("display","none");
            $(this).find(".arrow").hide();
        }
    });
    $(".today>span").html("今");
  },
  setMonthAndDay:function(){
    switch(calUtil.eventName)
    {
      case "load":
        var current = new Date();
        calUtil.showYear=current.getFullYear();
        calUtil.showMonth=current.getMonth() + 1;
        break;
      case "prev":
        var nowMonth=calUtil.showMonth;
        calUtil.showMonth=parseInt(nowMonth)-1;
        if(calUtil.showMonth==0)
        {
            calUtil.showMonth=12;
            calUtil.showYear-=1;
        }
        break;
      case "next":
        var nowMonth = calUtil.showMonth;
        calUtil.showMonth=parseInt(nowMonth)+1;
        if(calUtil.showMonth==13)
        {
            calUtil.showMonth=1;
            calUtil.showYear+=1;
        }
        break;
    }
  },
  getDaysInmonth : function(iMonth, iYear){
   var dPrevDate = new Date(iYear, iMonth, 0);
   return dPrevDate.getDate();
  },
  bulidCal : function(iYear, iMonth) {
   var aMonth = new Array();
   aMonth[0] = new Array(7);
   aMonth[1] = new Array(7);
   aMonth[2] = new Array(7);
   aMonth[3] = new Array(7);
   aMonth[4] = new Array(7);
   aMonth[5] = new Array(7);
   aMonth[6] = new Array(7);
   var dCalDate = new Date(iYear, iMonth - 1, 1);
   var iDayOfFirst = dCalDate.getDay();
   var iDaysInMonth = calUtil.getDaysInmonth(iMonth, iYear);
   var iVarDate = 1;
   var d, w;
   aMonth[0][0] = "日";
   aMonth[0][1] = "一";
   aMonth[0][2] = "二";
   aMonth[0][3] = "三";
   aMonth[0][4] = "四";
   aMonth[0][5] = "五";
   aMonth[0][6] = "六";
   for (d = iDayOfFirst; d < 7; d++) {
    aMonth[1][d] = iVarDate;
    iVarDate++;
   }
   for (w = 2; w < 7; w++) {
    for (d = 0; d < 7; d++) {
     if (iVarDate <= iDaysInMonth) {
      aMonth[w][d] = iVarDate;
      iVarDate++;
     }
    }
   }
   return aMonth;
  },
  ifHasSigned : function(signList,day){
   var signed = false;
   $.each(signList,function(index,item){
    if(item.signDay == day) {
     signed = true;
     return false;
    }
   });
   return signed ;
  },
  drawCal : function(iYear, iMonth ,signList) {
    //   console.log(signList[2].zczphclass)
   var myMonth = calUtil.bulidCal(iYear, iMonth);
   var htmls = new Array();
   htmls.push("<div class='sign_main' id='sign_layer'>");
   htmls.push("<div class='sign_succ_calendar_title'>");
   htmls.push("<div class='calendar_month_prev'><</div>");
   htmls.push("<div class='calendar_month_next'>></div>");
   htmls.push("<div class='calendar_month_span' ref='calendar_span'></div>");
   htmls.push("</div>");
   htmls.push("<div class='sign' id='sign_cal'>");
   htmls.push("<table>");
   htmls.push("<tr>");
   htmls.push("<th><span>" + myMonth[0][0] + "</span></th>");
   htmls.push("<th><span>" + myMonth[0][1] + "</span></th>");
   htmls.push("<th><span>" + myMonth[0][2] + "</span></th>");
   htmls.push("<th><span>" + myMonth[0][3] + "</span></th>");
   htmls.push("<th><span>" + myMonth[0][4] + "</span></th>");
   htmls.push("<th><span>" + myMonth[0][5] + "</span></th>");
   htmls.push("<th><span>" + myMonth[0][6] + "</span></th>");
   htmls.push("</tr>");
   var d, w;
   var mydate = new Date();
   var str = "" + mydate.getFullYear() + "年";
   str += (mydate.getMonth()+1) + "月";
   str += mydate.getDate() + "日";
   for (w = 1; w < 7; w++) {
    htmls.push("<tr>");
    for (d = 0; d < 7; d++) {
     var ifHasSigned = calUtil.ifHasSigned(signList,myMonth[w][d]);
//     console.log(ifHasSigned);
     if(ifHasSigned&&str!=(iYear+"年"+iMonth+"月"+myMonth[w][d])+"日"){
    	 var text = "";
         var count = 0;
         htmls.push("<td class='on' >" + "<span data-val="+(myMonth[w][d]<10?'0'+myMonth[w][d]:myMonth[w][d])+" onclick='zprl_djrq_index(\""+iYear+"-"+iMonth+"-"+(myMonth[w][d]<10?"0"+myMonth[w][d]:myMonth[w][d])+"\")'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</span>");
    	 for(var i=0;i<signList.length;i++){
    		 if(signList[i].signDay==myMonth[w][d]){
                // if(count<=signList[i].signDay){
                    text+='<p>';
                    // text+='<a title="'+signList[i].signBt+'" href="javascript:void(0);" onclick="TzZczphXq(\''+signList[i].zczphid+'\')" >'+signList[i].signBt+'</a>';
                    text+='<a title="'+signList[i].signBt+'" href="/Zhaopin/zuijin.html?id='+signList[i].zczphid+'&hold_date='+iYear+'-'+iMonth+'-'+(myMonth[w][d]<10?'0'+myMonth[w][d]:myMonth[w][d])+'" >'+signList[i].signBt+'</a>';
                    text+='<i>'+signList[i].signmon+'-'+signList[i].signDay+'</i>';
                    text+='</p>';
                    //text += "<a href=''>【宣】"+ signList[i].signBt +"</a>";
                    count+=1;
                // }
    		 }
         }
    	 htmls.push("<div class='text'>" +text + "</div>");
	    //  htmls.push("<div class='arrow'>" + "<img src='image/arrow_2.png' height='100%' width='100%'>"+ "</div>")
         htmls.push("</td>");
     } 
     else if(str==(iYear+"年"+iMonth+"月"+myMonth[w][d])+"日"){
    	 var text = "";
    	 var count = 0;
    	 var flag = false;
    	 for(var i=0;i<signList.length;i++){
    		 if(signList[i].signDay==myMonth[w][d]){
    			 flag = true;
    			 // if(count<10){
                    text+='<p>';
                    text+='<a title="'+signList[i].signBt+'" href="javascript:void(0);" onclick="TzZczphXq(\''+signList[i].zczphid+'\')" >'+signList[i].signBt+'</a>';
                    text+='<i>'+signList[i].signmon+'-'+signList[i].signDay+'</i>';
                    text+='</p>';
                    //text += "<a href=''>【宣】"+ signList[i].signBt +"</a>";
                    count+=1;
                // }
    		 }
    	 }
    	 if(flag == false){
    		 htmls.push("<td class='today'>" + "<span>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</span>");
    	 }else{
    		 htmls.push("<td class='today on' >" + "<span data-val="+(myMonth[w][d]<10?'0'+myMonth[w][d]:myMonth[w][d])+" onclick='zprl_djrq_index(\""+iYear+"-"+iMonth+"-"+(myMonth[w][d]<10?"0"+myMonth[w][d]:myMonth[w][d])+"\",1)'>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</span>");
    		 htmls.push("<div class='text'>" +text + "</div>");
    	    //  htmls.push("<div class='arrow'>" + "<img src='image/arrow.png' height='100%' width='100%'>"+ "</div>")
    	 }
    	 htmls.push("</td>");
    }
     else {
      htmls.push("<td><span>" + (!isNaN(myMonth[w][d]) ? myMonth[w][d] : " ") + "</span></td>");
     }
    }
    htmls.push("</tr>");
   }
   htmls.push("</table>");
   htmls.push("</div>");
   htmls.push("</div>");
   return htmls.join('');
  }

};
