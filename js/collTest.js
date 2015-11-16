define(function(require,exports,module){
	exports.collTest=function (obj1, obj2){
		var t1=obj1.offset().top;
		var b1=t1+obj1.height();
		var l1=obj1.offset().left;
		var r1=l1+obj1.width();
		var t2=obj2.offset().top;
		var b2=t2+obj2.height();
		var l2=obj2.offset().left;
		var r2=l2+obj2.width();
		if (t1>b2 || l1>r2 || l2>r1 || t2>b1){
			return false;
		}else{
			return true;
		}
	}
});