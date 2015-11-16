define(function(require,exports,module){
	exports.getDis=function (obj1, obj2){
		var b=obj2.offset().left+obj2.width()/2-(obj1.offset().left+obj1.width()/2);
		var a=obj2.offset().top+obj2.height()/2-(obj1.offset().top+obj1.height()/2);
		return Math.sqrt(a*a+b*b);
	}
});