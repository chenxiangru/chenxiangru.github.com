define(function(require,exports,module){
	exports.scrollTop=function (){
		var timer=null;
		var userScroll=false;
		$(document).scroll(function (){
			if (userScroll){
				clearInterval(timer);
			}
			userScroll=true;
		});
		$('.to_top').click(function (){
			var count=Math.floor(1000/30);
			var n=0;
			var start=$(document).scrollTop();
			var dis=0-start;
			clearInterval(timer);
			timer=setInterval(function (){
				userScroll=false;
				n++;
				var cur=start+dis*n/count;
				$(document).scrollTop(cur);
				if (n == count){
					clearInterval(timer);
				}
			}, 20);
		});
		$('.to_top').mousedown(function (){
			$('.to_top').css('background-position','-48px 0')
		});
		$('.to_top').mouseup(function (){
			$('.to_top').css('background-position','0 0');
		});
		
	};
});