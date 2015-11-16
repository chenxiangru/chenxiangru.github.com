define(function(require,exports,module){
	var aSpan=$('.portfolio_holder li span');
	exports.automatic_play=function (){
		var n=0;
		setInterval(function (){
			n++;
			if (n == aLi.length){
				n=0;
			}
			aLi.each(function (index){
				aLi.css({'opacity':0,'z-index':1});
				aSpan.css('height',0);
				aLi.eq(n).stop().animate({'opacity':1,'z-index':2},{duration:500})
				aSpan.eq(n).stop().animate({'height':70});
			});
		},5000);
		var aLi=$('.portfolio_holder li');
		$('.next').click(function (){
			n++;
			if (n == aLi.length){
				n=0;
			}
			aLi.each(function (index){
				aLi.css({'opacity':0,'z-index':1});
				aLi.eq(n).stop().animate({'opacity':1,'z-index':2},{duration:500});
				aSpan.eq(n).stop().animate({'height':70});
			});
		});
		$('.prev').click(function (){
			n--;
			if (n == -1){
				n=aLi.length-1;
			}
			aLi.each(function (index){
				aLi.css({'opacity':0,'z-index':1});
				aLi.eq(n).stop().animate({'opacity':1,'z-index':2},{duration:500});
				aSpan.eq(n).stop().animate({'height':70});
			});
		});
		
	};
});