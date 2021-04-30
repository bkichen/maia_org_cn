var Tab = function (box){
    this.oBox = document.getElementById(box);
    this.aTil = this.oBox.getElementsByTagName('h3');
    this.aDiv = this.oBox.getElementsByTagName('div');
    this.iLen = this.aTil.length;
    this.num = 0;
};

Tab.prototype.init = function (attr,delay){
    var This = this;
    var timer = null;
    for(var i=0;i<this.iLen;i++)
    {
	    this.aTil[i].index = i;
	    this.aTil[i]['on'+attr] = function (){
	    	var _this = this;
	    	if(attr == 'mouseover' && delay){
		    	timer = setTimeout(function (){
		    		This.show(_this);
		    	},delay);
		    }else{
		    	This.show(_this);
		    }
	    };
	    this.aTil[i].onmouseout =function (){
		    clearTimeout(timer);
		} ;
    };
};

Tab.prototype.autoPlay = function (attr,speed){
	var This = this;
	var timer = null;

	function play(){
		for(var i=0;i<this.iLen;i++){
			this.aTil[i].index = i;
			this.aTil[i]['on'+attr] = function (){
				This.num = this.index;
			}
		};
		This.num++;
		if(This.num >= This.iLen){
			This.num = 0;
		}
		This.show(This.aTil[This.num]);
	};

    timer = setInterval(play,speed);

    this.oBox.onmouseover = function (){
    	clearInterval(timer);
    };
    this.oBox.onmouseout = function (){
    	timer = setInterval(play,speed);
    };
};

Tab.prototype.show = function (obj){
	this.num = obj.index;
    for(var i=0;i<this.iLen;i++){
    	this.aTil[i].className = '';
    	this.aDiv[i].style.display = 'none';
    };
    obj.className = 'on';
    this.aDiv[this.num].style.display = 'block';
};

var otab01 = new Tab('tab');
otab01.init('mouseover',100);
otab01.autoPlay('mouseover',3000);