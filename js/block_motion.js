define(function(require,exports,module){
	exports.block_motion=function (){
		var arr=['百度搜索下拉框：百度下拉菜单反馈性关键词是用户在搜索时与搜索引擎的第一步互动，在互动过程中，搜索引擎的反馈关键词不断调整来满足用户的个性需求。采用jsonp跨域数据访问技术。',
		'拉勾网首页特效：拉勾网首页以及百度搜索图片都以不同方向进入方式效果，采用原声JS自定特效，给使用者以视觉上的错觉，带来及其惊艳的视觉特效。',
		'苹果菜单：原生JS仿苹果任务栏菜单，具备图标放大效果的菜单，原生JavaScript自定的特效，鼠标放到菜单上就把图标放大，类似使用了jQuery的效果。',
		'手风琴效果：基于各个网站常见效果，当你想在有限的页面空间内展示多个内容片段的时候，手风琴（Accordion）效果就显得非常有用，它可以帮助你以对用户非常友好的方式实现多个内容片段之间的切换。',
		'购物放大镜：根据设计页面和参考网站，制作购物页面效果，给使用者以更好的视觉体验。'];
		var oFav=document.getElementById('fav');
		var aLi=oFav.getElementsByTagName('li');
		var oP=document.getElementById('text');
		for (var i=0; i<aLi.length; i++)
		{
			(function (index){
				aLi[index].onmouseover=function (){
					oP.innerHTML='';
					oP.style.padding='0 5px';
					oP.style.border='3px solid #f1871a';
					var aSpan=[];
					for (var i=0; i<arr[index].length; i++)
					{
						var oSpan=document.createElement('span');
						oSpan.innerHTML=arr[index].charAt(i);
						aSpan.push(oSpan);
						oP.appendChild(oSpan);
					}
					var n=0;
					var timer=setInterval(function (){
						move(aSpan[n], {opacity:1});
						aSpan[n].style.display='block';
						aSpan[n].style.float='left';
						n++;
						if (n == arr[index].length){
							clearInterval(timer);
						}
					}, 50);
					move(oP,{'height':100})
				};
			})(i);
			aLi[i].onmouseout=function (){
				oP.innerHTML='';
				oP.style.padding='0';
				oP.style.border='none';
				move(oP,{'height':0})
			};
		}
		
		
var Tween={Linear:function(t,b,c,d){return c*t/d+b},Quad:{easeIn:function(t,b,c,d){return c*(t/=d)*t+b},easeOut:function(t,b,c,d){return -c*(t/=d)*(t-2)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t+b}return -c/2*((--t)*(t-2)-1)+b}},Cubic:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t+b}return c/2*((t-=2)*t*t+2)+b}},Quart:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t+b},easeOut:function(t,b,c,d){return -c*((t=t/d-1)*t*t*t-1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t+b}return -c/2*((t-=2)*t*t*t-2)+b}},Quint:{easeIn:function(t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOut:function(t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return c/2*t*t*t*t*t+b}return c/2*((t-=2)*t*t*t*t+2)+b}},Sine:{easeIn:function(t,b,c,d){return -c*Math.cos(t/d*(Math.PI/2))+c+b},easeOut:function(t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOut:function(t,b,c,d){return -c/2*(Math.cos(Math.PI*t/d)-1)+b}},Expo:{easeIn:function(t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOut:function(t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOut:function(t,b,c,d){if(t==0){return b}if(t==d){return b+c}if((t/=d/2)<1){return c/2*Math.pow(2,10*(t-1))+b}return c/2*(-Math.pow(2,-10*--t)+2)+b}},Circ:{easeIn:function(t,b,c,d){return -c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOut:function(t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOut:function(t,b,c,d){if((t/=d/2)<1){return -c/2*(Math.sqrt(1-t*t)-1)+b}return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b}},Elastic:{easeIn:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return -(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOut:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d)==1){return b+c}if(!p){p=d*0.3}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}return(a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b)},easeInOut:function(t,b,c,d,a,p){if(t==0){return b}if((t/=d/2)==2){return b+c}if(!p){p=d*(0.3*1.5)}if(!a||a<Math.abs(c)){a=c;var s=p/4}else{var s=p/(2*Math.PI)*Math.asin(c/a)}if(t<1){return -0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b}return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b}},Back:{easeIn:function(t,b,c,d,s){if(s==undefined){s=1.70158}return c*(t/=d)*t*((s+1)*t-s)+b},easeOut:function(t,b,c,d,s){if(s==undefined){s=1.70158}return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOut:function(t,b,c,d,s){if(s==undefined){s=1.70158}if((t/=d/2)<1){return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b}return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b}},Bounce:{easeIn:function(t,b,c,d){return c-Tween.Bounce.easeOut(d-t,0,c,d)+b},easeOut:function(t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else{if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+0.75)+b}else{if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+0.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+0.984375)+b}}}},easeInOut:function(t,b,c,d){if(t<d/2){return Tween.Bounce.easeIn(t*2,0,c,d)*0.5+b}else{return Tween.Bounce.easeOut(t*2-d,0,c,d)*0.5+c*0.5+b}}}};


function move(obj, json, options)
{
	// 默认值
	options=options || {};
	options.duration=options.duration || 300;
	options.easing=options.easing || Tween.Linear;
	
	var start={};
	var dis={};
	
	for (var name in json)
	{
		start[name]=parseFloat(getStyle(obj, name));
		dis[name]=json[name]-start[name];
	}
	
	var count=Math.floor(options.duration/30);
	var n=0;
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		n++;
		
		for (var name in json)
		{
			var cur=options.easing(options.duration*n/count, start[name], dis[name], options.duration);
			
			if (name == 'opacity')
			{
				obj.style[name]=cur;
			}
			else
			{
				obj.style[name]=cur+'px';
			}
		}
		
		if (n == count)
		{
			clearInterval(obj.timer);
			options.complete && options.complete();
		}
	}, 30);
}

function getStyle(obj, name)
{
	return (obj.currentStyle || getComputedStyle(obj, false))[name];
}
		
		
		
		
		
	};
});