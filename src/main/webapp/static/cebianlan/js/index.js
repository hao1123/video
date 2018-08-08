/********************************
 * webluker首页所需要的一些公共JS库
 * Author: hua.zhang
 * Creation data: 2010-12-23
 * ******************************/

$(function(){
	$(".top_menu .top_menu_child a").bind('mouseover mouseout',function(){
		$(this).toggleClass($(this).attr('class').split(' ')[0] + '_over');
	});
	
	$(".top_menu .top_menu_child a").bind('mousedown mouseup',function(){
		$(this).toggleClass($(this).attr('class').split(' ')[0] + '_press');
	});
	
	$(".msg_box_3 a").bind('mouseover mouseout',function(){
		$(this).toggleClass($(this).attr('class').split(' ')[0] + '_over');
	});
	
	$(".explorer_main .box_main .explorer_card_list a").mouseover(function(){
		$(this).animate({bottom: '+8px'}, "slow");
	}).mouseout(function(){
		$(this).animate({bottom: '-0'}, "slow");
	});
	
});

/*Error message Tooltips*/
/*点击隐藏错误提示*/
$(document).ready(function(){
	$('.control-group input').focus(function(){
		hideTooltips($(this).parent().parent().attr('id'));
	});
});
function showTooltips(msgid,msg){
	if (msgid==''){ return; }
	if (msg==''){ msg='Error!'; }
	$('#'+msgid).prepend("<div class='for_fix_ie6_bug' style='position:relative;'><div class='tooltips_main'><div class='tooltips_box'><div class='tooltips'><div class='msg'>"+msg+"</div></div><div class='ov'></div></div></div></div>");
	$('#'+msgid+' .tooltips_main').fadeIn("slow").animate({ marginTop: "-23px"}, {queue:true, duration:400});
}
function hideTooltips(msgid){
	try{
		$('#'+msgid).find('.tooltips_main').fadeOut("slow");
		$('#'+msgid).find('.tooltips_main').remove();
	}catch(e){}
}
function hideAllTooltips(){
	try{
		$('.tooltips_main').fadeOut("slow");
		$('.tooltips_main').remove();
	}catch(e){}
}
/*End error message tooltips*/

/*去除超链接的虚线框*/
$(document).ready(function(){
	$('a').bind('focus',function(){if(this.blur)this.blur();});
}); 
/*end*/

/*CopyRight*/
$(function(){
	var date = new Date();
  var year = date.getFullYear();
	$('#copyright').append(year);
});
/*end CopyRight*/