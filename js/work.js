define(function(require,exports,module){
	exports.work=function (){
		var oUl=$('.work_box');
		var w=oUl.outerWidth();
		oUl.append(oUl.html());
		oUl.css('width',oUl.children(0).outerWidth()*oUl.children().length);
		var left=0;
		var timer=null;
		timer=setInterval(function (){
			left+=4;
			oUl.css('left',left%w-w);
		},30);
		oUl.hover(function (){
			clearInterval(timer);
		},function (){
			timer=setInterval(function (){
				left+=4;
				oUl.css('left',left%w-w);
			},30);
		});
	};
});