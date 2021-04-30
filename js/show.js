// JavaScript Document
function show(){
	
var oTil = document.getElementById('btil');
	var oBox = document.getElementById('box');
	var aLi= oTil.getElementsByTagName('li');
	var aDl = oBox.getElementsByTagName('dl');
	var timer2 = null;
	
	for(var i=0;i<aLi.length;i++)
	{
		aLi[i].index = i;
		aLi[i].onmouseover = function ()
		{
			clearTimeout(timer2);
			for(var j=0;j<aLi.length;j++)
			{
			    aLi[j].className = '';
				aDl[j].className = '';	
			};
			this.className = 'hover';
			aDl[this.index].className = 'on';
		};
		
		aLi[i].onmouseout = function ()
		{
			var that = this;
			timer2 = setTimeout(function (){
			that.className = '';
			aDl[that.index].className = '';
			},100);
		};
	};
	
	for(var i=0;i<aDl.length;i++)
	{
		aDl[i].index = i;
		aDl[i].onmouseover = function ()
		{
			clearTimeout(timer2);
			for(var j=0;j<aLi.length;j++)
			{
			    aLi[j].className = '';
				aDl[j].className = '';	
			};
			aLi[this.index].className = 'hover';
			this.className = 'on';
		};
		
		aDl[i].onmouseout = function ()
		{
			var that = this;
			timer2 = setTimeout(function (){
			aLi[that.index].className = '';
			that.className = '';
			},100);
		};
	};

}
