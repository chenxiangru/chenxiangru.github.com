// JavaScript Document
window.onload=function (){
	/*banner*/			
	(function (){
		var aPic=document.getElementsByClassName('pic_a');
		var aBg=document.getElementsByClassName('bg');
		var aBorder=document.getElementsByClassName('border');
		var aBanner=document.getElementById('banner');
		var aBannerfather=document.getElementById('bannerfather');
		var aA=aBanner.getElementsByTagName('a');
		var oUl=document.getElementById('ul1');
		var aLi=oUl.getElementsByTagName('li');
		var timer=null;
		for (var i=0; i<aPic.length; i++)
		{	
			aPic[i].index=i;
			aPic[i].onmouseover=function (){
				n=this.index;
				for (var i=0; i<aPic.length; i++)
				{
					aBg[i].className='bg';
					aBorder[i].className='border';
					aA[i].className='';
					aLi[i].className='';
				}
				aBg[this.index].className='bg active';
				aBorder[this.index].className='border active';
				aA[this.index].className='active';
				aLi[this.index].className='active';
			};
		}
		//自动播放
		var n=0;
		tab();
		timer=setInterval(tab,3000);
		aBannerfather.onmouseover=function (){
			clearInterval(timer);
		};
		aBannerfather.onmouseout=function (){
			timer=setInterval(tab,3000);
		};
		function tab(){
			for (var i=0; i<aPic.length; i++)
			{
				aBg[i].className='bg';
				aBorder[i].className='border';
				aA[i].className='';
				aLi[i].className='';
			}
			aBg[n].className='bg active';
			aBorder[n].className='border active';
			aA[n].className='active';
			aLi[n].className='active';
			n++;
			if (n == aPic.length)
			{
				n=0;
			}
		}
	})();
	/*ct1*/				//看一下
	(function (){
		var aMain=document.getElementsByClassName('ct_jiqimao');
		var oLeft=document.getElementById('left');
		var oRight=document.getElementById('right');
		var now=0;
		function tab(now)
		{
			for (var i=0; i<aMain.length; i++)
			{
				aMain[i].style.display='none';
			}
			aMain[now].style.display='block';
		}
		oLeft.onclick=function (){
			now--;
			if (now == -1)
			{
				now=aMain.length-1;
			}
			tab(now);
		};
		oRight.onclick=function (){
			now++;
			if (now == aMain.length)
			{
				now=0;
			}
			tab(now);
		};
	})();
	/*大块背景层*/
	(function(){
		var aMain=document.getElementsByClassName('main_one');
		var aMain_bg=document.getElementsByClassName('main_bg');
		for ( var i=0;i<aMain.length; i++)
		{	
			aMain[i].index=i;
			aMain[i].onmouseover=function (){
				for ( var i=0;i<aMain.length; i++)
				{
					aMain_bg[i].className='main_bg';
				}
				aMain_bg[this.index].className='main_bg active';
			};
			aMain[i].onmouseout=function (){
				aMain_bg[this.index].className='main_bg';
			};
		}
	})();
	/*小块背景层*/
	(function (){
		var aBtn1=document.getElementsByClassName('ct2_one');
		var aBtn2=document.getElementsByClassName('ct2_one2');
		var aBg1=document.getElementsByClassName('ct2_bg_ct');
		var aBg2=document.getElementsByClassName('ct2_bg_ct2');
		for (var i=0; i<aBtn1.length; i++)
		{
			aBtn1[i].index=i;
			aBtn1[i].onmouseover=function (){
				aBg1[this.index].className='ct2_bg_ct active';
			};
			aBtn1[i].onmouseout=function (){
				aBg1[this.index].className='ct2_bg_ct';
			};
		}
		for (var i=0; i<aBtn2.length; i++)
		{
			aBtn2[i].index=i;
			aBtn2[i].onmouseover=function (){
				aBg2[this.index].className='ct2_bg_ct2 active';
			};
			aBtn2[i].onmouseout=function (){
				aBg2[this.index].className='ct2_bg_ct2';
			};
		}
	})();
	/*隔行变色+移入移出显示*/
	(function (){
		var aMovie=document.getElementsByClassName('movie');
		for (var i=0; i<aMovie.length; i++)
		{
			tab(aMovie[i]);
			color(aMovie[i]);
		}
		function tab(obj)
		{
			var aBtn1=obj.getElementsByTagName('li');
			var aBtn2=obj.getElementsByTagName('p');
			for (var i=0; i<aBtn1.length; i++)
			{
			aBtn1[i].index=i;
			aBtn1[i].onmouseover=function (){
				for (var i=0; i<aBtn1.length; i++)
				{
					aBtn1[i].className='';
					aBtn2[i].className='';
				}
				this.className='active';
				aBtn2[this.index].className='active';
			};
			}
		}
		function color(obj)
		{
			var aBtn1=obj.getElementsByTagName('li');
			for (var i=0; i<aBtn1.length; i++)
			{
				if (i%2 == 0)
				{
					aBtn1[i].style.background='#eee';
				}
			}
		}
	})();
	/*大选项卡重用*/
	(function (){
		var aParent=document.getElementsByClassName('tab');
		for (var i=0; i<aParent.length; i++)
		{
			tab(aParent[i]);
		}	
		function tab(obj)
		{
			var aHead=obj.getElementsByClassName('ct_left_hd');
			var aLi=obj.getElementsByClassName('tt');
			var aDiv=obj.getElementsByClassName('ct2_first');
	
			for (var i=0; i<aLi.length; i++)
			{
				aLi[i].index=i;
				aLi[i].onmouseover=function (){
					for (var i=0; i<aLi.length; i++)
					{
						aLi[i].className='tt';
						aDiv[i].className='ct2_first';
					}
					this.className='tt active';
					aDiv[this.index].className='ct2_first active';
				};
			}
		}
	})();
	/*pic选项卡*/
	(function (){
		var aTxte=document.getElementsByClassName('txte');
		var aMain=document.getElementsByClassName('ct2_main');
		for (var i=0; i<aTxte.length; i++)
		{
			aTxte[i].index=i;
			aTxte[i].onmouseover=function (){
				for (var i=0; i<aTxte.length; i++)
				{
					aTxte[i].className='txte';
					aMain[i].className='ct2_main';
				}
				this.className='txte active';
				aMain[this.index].className='ct2_main active';
			};
		}
	})();
	/*picHover*/
	(function (){
		var aBtn=document.getElementsByClassName('picture');
		var aPict=document.getElementsByClassName('pict');
		for (var i=0; i<aBtn.length; i++)
		{
			aBtn[i].index=i;
			aBtn[i].onmouseover=function (){
				aPict[this.index].className='pict active';
			};
			aBtn[i].onmouseout=function (){
				aPict[this.index].className='pict';
			};
		}
	})();
};
