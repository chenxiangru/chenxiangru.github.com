define(function(require,exports,module){
	var C=require('collTest');
	var G=require('getDis');
	exports.findNear=function(obj){
		var aLi=$('.pic li');
		var nMin=999999999999;
		var nMinIndex=-1;
		// 碰上 找距离
		aLi.each(function (index){
			if (obj.index() != index){
				if (C.collTest(obj, $(this))){
					var dis=G.getDis(obj, $(this));
					if (dis < nMin){
						nMin=dis;
						nMinIndex=index;
					}
				}
			}
		});
		
		if (nMinIndex == -1){
			return null;
		}else{
			return aLi.eq(nMinIndex);
		}
	}
});