var $jq = jQuery.noConflict();
function fenleipage(page,size)
{
	page = parseInt(page);
	if(page<=0)page = 1;
	if(page>=size) page = size;
	$jq('.pg #pageList').val(page);
	$jq('.pg #custompage').val(page);
	$jq('.myfenleilist').hide();
	$jq('.myfenleilist_'+page).show();
};
// 兼容 X2 X1.5 弹出菜单
function MyshowTip(ctrlobj) {
	if(!ctrlobj.id) {
		ctrlobj.id = 'tip_' + Math.random();
	}
	menuid = ctrlobj.id + '_menu';
	if(!$(menuid)) {
		var div = document.createElement('div');
		div.id = ctrlobj.id + '_menu';
		div.className = 'tip tip_4 wd_tip';
		div.style.display = 'none';
		div.innerHTML = '<div class="tip_horn"></div><div class="tip_c">' + ctrlobj.getAttribute('tip') + '</div>';
		$('append_parent').appendChild(div);
	}
	$(ctrlobj.id).onmouseout = function () { hideMenu('', 'prompt'); };
	showMenu({'mtype':'prompt','ctrlid':ctrlobj.id,'pos':'12!','duration':2,'zindex':JSMENU['zIndex']['prompt']});
}
//倒计时
function MyTime(timeStr)
{
	 timeObj = eval(''+timeStr+'');
	 var d=parseInt(timeObj.miao/86400);
	 var h=parseInt((timeObj.miao%86400)/3600);
	 var s=parseInt((timeObj.miao%3600)/60);
	 var m=parseInt(timeObj.miao%60);
	 var str = (d>0?d+timeObj.sd:'');
	 str += (h>0?h+timeObj.sh:'');
	 str += (s>0?s+timeObj.ss:'');
	 str += (m>0?m+timeObj.sm:'');
	 document.getElementById(timeObj.id).innerHTML = str;
	 timeObj.miao -= 1;
	 if(timeObj.miao>0)
	 	setTimeout('MyTime("'+timeStr+'")',1000);
};
//自定义弹出菜单
function MyshowTip2(ctrlobj,showid)
{
	if(!ctrlobj.id) {
		ctrlobj.id = 'tip_' + Math.random();
	}
	menuid = ctrlobj.id + '_menu';
	if(!$(menuid)) {
		var div = document.createElement('div');
		div.id = ctrlobj.id + '_menu';
		div.className = 'MyshowTip2';
		div.style.display = 'none';
		div.innerHTML = '<div class="mytip">' + $(showid).innerHTML + '</div>';
		$('append_parent').appendChild(div);
	}
	$(ctrlobj.id).onmouseout = function () { hideMenu('', 'prompt'); };
	showMenu({'mtype':'prompt','ctrlid':ctrlobj.id,'duration':2,'zindex':JSMENU['zIndex']['prompt']});
};