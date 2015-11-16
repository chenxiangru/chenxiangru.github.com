define(function(require,exports,module){
	exports.opening_animation=function (){
		var n=1;
		setTimeout(function (){
			$('.figure1').stop().animate({right:$(window).width()*0.43,top:220},{duration:800, complete:function (){
				setInterval(function (){
					n++;
					if (n == 7){
						n=1;
					}
					$('.figure1').css('background-image','url(images/figure1-'+n+'.png)')
				},2000);
			}});
		},800);
	};
});