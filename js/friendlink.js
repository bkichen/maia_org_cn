// JavaScript Document
window.onload = function (){		
		function getByClass(sClass,parent){
		
		var aEles = (parent||document).getElementsByTagName('*');
		var arr = [];
		
		for(var i=0; i<aEles.length; i++){
			
			var aClass = aEles[i].className.split(' ');
			
			for(var j=0; j<aClass.length; j++){
				
				if( aClass[j] == sClass ){
				
					arr.push( aEles[i] );
					break;
					
				}	
			}
		}
		return arr;
	}
	
	var arr = getByClass('select');
	var arr2 = getByClass('son_select');
	var that = null;
	var onoff = true;
	
	for(var i=0;i<arr.length;i++)
	{
		arr[i].index = i;
		arr[i].onclick = function(ev) {
			var e = ev || event;
			e.cancelBubble = true;
			for(var i=0;i<arr.length;i++)
			{
				if(i!=this.index)
				{
					arr2[this.index].style.display = 'block';
					arr2[i].style.display = 'none';
				}
			};
			if(onoff)
			{
				arr2[this.index].style.display = 'block';
				onoff = false;
			}else
			{
				arr2[this.index].style.display = 'none';
				onoff = true;
			};
			that = this.index;
			document.onclick = function() {
				arr2[that].style.display = 'none';
				onoff = true;
			}
		}
	};

}