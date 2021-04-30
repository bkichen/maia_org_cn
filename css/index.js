function $(element) {
	if(!document.getElementById) { return false; }
	if (arguments.length > 1) {
		for (var i = 0, elements = [], length = arguments.length; i < length; i++) {
			elements.push($(arguments[i]));
			return elements;
		}
	}
	if (typeof element == "string") {
		element = document.getElementById(element);
		return element;
	}
}

function addOnloadEvent(func) {
	var oldOnload = window.onload;
	if(typeof oldOnload != "function") {
		window.onload = func;
	}
	else {
		window.onload = function() {
			oldOnload();
			func();
		}
	}
}

//取得外部class的属性值

function getCurrentStyle(o) {
	if (o.currentStyle) {
		return o.currentStyle;
	}
	else {
		return document.defaultView.getComputedStyle(o,null);
	}
}

//取得第一个元素子节点

function getFirstElementNode(o) {
	if(o.firstChild.nodeType == 1) {
		return o.firstChild;
	}
	if(o.firstChild.nextSibling.nodeType == 1) {
		return o.firstChild.nextSibling;
	}
	return null;
}

//将对象定时移动到某个位置

function moveElement(elementID,final_x,final_y,interval,speed) {
	if(!$(elementID)) return false;
	var o = getFirstElementNode($(elementID));
	if(o.movement) {
		clearTimeout(o.movement);
	}
	var ypos = parseInt(o.style.marginTop);
	var xpos = parseInt(o.style.marginLeft);
	if(xpos == final_x && ypos == final_y) {
		return true;
	}
	if(xpos < final_x) {
		var dist = Math.ceil((final_x - xpos)/speed);
		xpos += dist;
	}
	if(xpos > final_x) {
		var dist = Math.ceil((xpos - final_x)/speed);
		xpos -= dist;
	}
	if(ypos < final_y) {
		var dist = Math.ceil((final_y - ypos)/speed);
		ypos += dist;
	}
	if(ypos > final_y) {
		var dist = Math.ceil((ypos - final_y)/speed);
		ypos -= dist;
	}
	o.style.marginLeft = xpos + "px";
	o.style.marginTop = ypos + "px";
	var again = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + "," + speed + ")";
	o.movement = setTimeout(again,interval);
}

//对被移动对象的属性进行设置

function positionMessage(oo,oWidth,x) {
	var o1 = getFirstElementNode($(oo));
	var oStyles = getCurrentStyle(o1);
	o1.style.marginLeft = oStyles.marginLeft;
	o1.style.marginTop = oStyles.marginTop;
	var xposNow = -oWidth*x;
	moveElement(oo,xposNow,0,10,12);
}

function autoShow() {
	var oMover = getFirstElementNode($("adShowImg"));
	var adShowNow = $("adShowNow");
	var adShowAll = $("adShowAll");
	var allA = oMover.getElementsByTagName("a");
	var allALen = allA.length;
	var allALenSub = allALen - 1;
	if (opp < allALenSub && opp2 == 0) {
		positionMessage("adShowImg",200,opp + 1);
		adShowNow.innerHTML = parseInt(adShowNow.innerHTML) + 1;
		opp++;
		opp2 = 0;
	}
	else {
		if(opp != 0) {
			positionMessage("adShowImg",200,opp - 1);
			adShowNow.innerHTML = parseInt(adShowNow.innerHTML) - 1;
			opp--;
			opp2 = 1;
		}
		else {
			positionMessage("adShowImg",200,0);
			adShowNow.innerHTML = 1;
			opp = 0;
			opp2 = 0;
		}
	}
	oMover.orepeat = setTimeout(autoShow,8000);
	oMover.onmouseover = function() {
		clearTimeout(this.orepeat);
	}
	oMover.onmouseout = function() {
		this.orepeat = setTimeout(autoShow,8000);
	}
}

function clickShow() {
	opp = 0;
	opp2 = 0;
	var oMover = getFirstElementNode($("adShowImg"));
	var adShowPre = $("adShowPre");
	var adShowNext = $("adShowNext");
	var adShowNow = $("adShowNow");
	var adShowAll = $("adShowAll");
	var allA = oMover.getElementsByTagName("a");
	var allALen = allA.length;
	var allALenSub = allALen - 1;
	adShowNow.innerHTML = 1;
	adShowAll.innerHTML = allALenSub + 1;
	adShowPre.onclick = function() {
		if (opp != 0) {
			positionMessage("adShowImg",200,opp - 1);
			adShowNow.innerHTML = parseInt(adShowNow.innerHTML) - 1;
			opp--;
		}
	}
	adShowNext.onclick = function() {
		if (opp != allALenSub) {
			positionMessage("adShowImg",200,opp + 1);
			adShowNow.innerHTML = parseInt(adShowNow.innerHTML) + 1;
			opp++;
		}
	}
}

function autoShowAll() {
	clickShow();
	setTimeout(autoShow,1000);
}