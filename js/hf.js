function onOver(n){
	var Div = "."+n;
	var lable = $(Div);
		lable.css("visibility","visible");
}
function onOut(n){
	var Div = "."+n;
	var lable = $(Div);
	lable.css("visibility","hidden");

}

function channelfouse(name) {
    document.getElementById("product").className = "nav_on icon";
    if (document.getElementById("product").hasChildNodes) {
        document.getElementById("product").childNodes[0].className = "icon on_d"
    }
}