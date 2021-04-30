// JavaScript Document
$(document).ready(function(){
	$('.nav ul>li').hover(function(){
		$(this).addClass('on');
		$(this).children('dl').stop().slideDown();
	},function (){
        $(this).removeClass('on');
		$(this).children('dl').stop().slideUp();
	})

});

function setTab(m,n){
 var tli=document.getElementById("menu"+m).getElementsByTagName("li");
 var tmo=document.getElementById("bmore"+m).getElementsByTagName("strong");
 var mli=document.getElementById("main"+m).getElementsByTagName("ul");
 for(i=0;i<tli.length;i++){
  tli[i].className=i==n?"hover":"";
  mli[i].style.display=i==n?"block":"none";
  tmo[i].className=i==n?"current02":"";
 }
}