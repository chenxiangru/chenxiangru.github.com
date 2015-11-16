define(function(require,exports,module){
	require('jquery.easing.1.3.js');
	var D=require('drag');
	exports.sudoku=function (){
		var aLi=$('.pic li');
		var aPos=[];
		// 布局转换
		aLi.each(function (index){
			$(this).attr('data-index', index);
			aPos.push({
				left:$(this).offset().left,
				top:$(this).offset().top
			});
		});
		aLi.each(function (index){
			$(this).css({
				position:'absolute',
				left:aPos[index].left,
				top:aPos[index].top,
				margin:0
			});
		});
		//拖拽		
		aLi.each(function (){
			D.drag($(this));
		});
		
		
		//随机变位置（有问题）
		
		
		
		
		
	

	};
});