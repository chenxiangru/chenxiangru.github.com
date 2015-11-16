define(function(require,exports,module){
	exports.head_nav=function(){
		$('.navigation').stop().animate({ top: '-250px' }, 800);
		$('.navigation').hover(
			function(){ $(this).stop().animate({ top: '0px' }, 1300);  },
			function(){ $(this).stop().animate({ top: '-250px' }, 900 ); }
		);
	};
});