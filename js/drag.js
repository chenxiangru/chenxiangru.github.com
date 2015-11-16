define(function(require,exports,module){
	var F=require('findNear');
	exports.drag=function(obj){
		var aLi=$('.pic li');
		var aPos=[];
		
		aLi.each(function (index){
			$(this).attr('data-index', index);
			aPos.push({
				left:$(this).offset().left,
				top:$(this).offset().top
			});
		});
		obj.mousedown(function (ev){
			aLi.css('z-index', 1);
			obj.css('z-index', 2);
			var disX=ev.clientX-obj.offset().left;
			var disY=ev.clientY-obj.offset().top;
			$(document).mousemove(move);
			$(document).mouseup(up);
			var oNear=null;
			function move(ev){
				var left=ev.clientX-disX;
				var top=ev.clientY-disY;
				obj.css({
					left:left,
					top:top
				});
				// 找最近
				oNear=F.findNear(obj);
				aLi.removeClass('on');
				if (oNear){
					oNear.addClass('on');
				}
			}
			function up(){
				$(document).unbind('mousemove', move);
				$(document).unbind('mouseup', up);
				if (oNear){
					// 换位置
					var objIndex=obj.attr('data-index');
					var oNearIndex=oNear.attr('data-index');
					obj.stop().animate(aPos[oNearIndex],{
						easing:'easeInBack'
					});
					oNear.stop().animate(aPos[objIndex],{
						easing:'easeInBack'
					});
					obj.attr('data-index', oNearIndex);
					oNear.attr('data-index', objIndex);
					aLi.removeClass('on');
				}else{
					// 回到原位
					obj.stop().animate(
					aPos[obj.attr('data-index')]
					);
				}
			}
			return false;
		});
		
		
		//随机变换位置
		$('#btn').click(function (){

			aPos.sort(function (){
				return Math.random()-0.5;
			});
			aLi.each(function (index){
				$(this).stop().animate(aPos[index]);
				
				
			});
		});		
		
		
		
		
		
	}

});