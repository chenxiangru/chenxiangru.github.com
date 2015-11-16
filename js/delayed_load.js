define(function(require,exports,module){
	exports.delayed_load=function (){
		var aImg=$('* img');
		setSrc();
		$(window).scroll(setSrc);
		$(window).resize(setSrc);
		function setSrc(){
			var clientHeight=$(window).height();
			var scrollTop=$(window).scrollTop();
			var bottom=scrollTop+clientHeight;
			aImg.each(function (){
				var top=$(this).offset().top;
				if (bottom >= top){
					var _src=$(this).attr('_src');
					$(this).attr('src', _src);
				}
			});
		}
	};
});