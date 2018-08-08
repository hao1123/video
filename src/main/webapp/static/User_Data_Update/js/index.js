$(function(){
	/*top*/
	$(".top").css({width:"100%",background:"#767676",height:"40px"})
	$(".top_in").css({width:"1200px",height:"40px",margin:"0 auto"})
	$(".top_in em").css({float:"left",lineHeight:"40px",fontSize:"14px",color:"#fefefe",marginRight:"10px"})
	$(".zcdl").css({float:"left",height:"40px",marginLeft:"20px"})
	$(".zcdl a").css({fontSize:"14px",color:"#fefefe",lineHeight:"40px",float:"left",paddingLeft:"6px",paddingRight:"6px",display:"block"})
	$(".zcdl a").mouseenter(function(){
		$(this).css({color:"#ff7800"})
		}).mouseleave(function(){
			$(this).css({color:"#fefefe"})
			})
	$(".zcdl i").css({display:"block",height:"14px",width:"1px",background:"#c4c4c4",float:"left",marginTop:"14px"})
	$(".sjwx").css({float:"right",height:"20px",position:"relative",marginTop:"10px",zIndex:"10000"})
	$(".sjwx em").css({width:"24px",height:"20px",marginLeft:"20px"})
	$(".none").css({width:"80px",height:"80px",position:"absolute",display:"none",zIndex:"800"})
	$(".wxgzh").css({top:"30px",left:"0",background:"red"})
	$(".sjapp").css({top:"30px",right:"0",background:"blue"})
	$("#wxgzh").mouseenter(function(){
		$(".wxgzh").css({display:"block"})
		}).mouseleave(function(){
			$(".wxgzh").css({display:"none"})
			})
	$("#sjapp").mouseenter(function(){
		$(".sjapp").css({display:"block"})
		}).mouseleave(function(){
			$(".sjapp").css({display:"none"})
			})
	$(".kfdh").css({float:"right",fontSize:"16px",color:"white",lineHeight:"40px",marginLeft:"10px"})
	/*导航加搜索框*/
	$(".dhjssk").css({width:"1200px",height:"107px",margin:"0 auto",overglow:"hidden",background:"none",position:"relative",zIndex:"5000"})
	$(".logo").css({width:"160px",height:"66px",float:"left",marginTop:"20px",marginRight:"156px"})
	$(".searchk").css({width:"442px",height:"40px",float:"left",marginTop:"22px",background:"#e50012",border:"1px solid #e50012"})
	$(".sjhcp").css({width:"86px",height:"40px",float:"left",background:"#fff"})
	$(".sjhcp_in").css({width:"60px",height:"40px",float:"left",position:"relative",zIndex:"600"})
	$(".sjhcp_in span").css({width:"60px",height:"40px",fontSize:"16px",color:"#2f2f2f",textIndent:"23px",lineHeight:"40px",cursor:"pointer"})
	$(".little_list").css({width:"85px",height:"auto",position:"absolute",top:"40px",left:"-1px",display:"none",border:"1px solid #e50012",zIndex:"200",background:"#fff"})
	$(".little_list em").css({width:"85px",height:"34px",textIndent:"23px",lineHeight:"34px",cursor:"pointer",fontSize:"16px",fontStyle:"normal"})
	$(".sjhcp").mouseenter(function(){
		$(".little_list").css({display:"block"})
		}).mouseleave(function(){
			$(".little_list").css({display:"none"})
			})
	$(".little_list em").mouseenter(function(){
		$(this).css({color:"#fff",background:"#ff7800"}).siblings().css({color:"#2f2f2f",background:"none"})
		}).mouseleave(function(){
			$(this).css({color:"#2f2f2f",background:"none"})
			})	
	$(".little_list em").click(function(){
		$(".little_list").css({display:"none"})
		})	
	$(".jiantou").css({width:"17px",height:"40px",float:"left",borderRight:"1px solid #ff7800",paddingRight:"8px"})
	$(".jiantou img").css({width:"8px",height:"4px",margin:"0 auto",marginTop:"18px"})
	$(".ssl").css({width:"49px",height:"40px",background:"#e50012",float:"right",cursor:"pointer"})
	$(".ssl").mouseenter(function(){
		$(this).css({background:"#cd0010"})
		}).mouseleave().css({background:"#e50012"})
	$(".wmdys").css({height:"67px",float:"right",marginTop:"22px",overflow:"hidden"})	
	$(".wmdys ul").css({height:"67px",overflow:"hidden"})
	$(".wmdys ul li").css({height:"67px",overflow:"hidden",width:"100px",float:"left"})	
	$(".wmdys ul li b").css({height:"36px",overflow:"hidden",width:"36px",display:"block",margin:"0 auto"})		
	$(".wmdys ul li p").css({height:"31px",width:"100%",display:"block",textAlign:"center",lineHeight:"31px",fontSize:"16px",color:"#605f5f"})	
	$(".hot_ss").css({ height:"22px",width:"auto",position:"absolute",bottom:"16px",left:"318px",zIndex:"1"})	
	$(".hot_ss a").css({fontSize:"14px",color:"#9d9d9d",paddingLeft:"8px",paddingRight:"8px",lineHeight:"22px",float:"left"})	
	$(".hot_ss a").mouseenter(function(){
		$(this).css({color:"#e50012"}).siblings().css({color:"#9d9d9d"})
		}).mouseleave(function(){
			$(this).css({color:"#9d9d9d"})
			})	
	$(".dao_list a").click(function(){
					$(this).addClass("color").siblings().removeClass("color")
					});
				/*控制显示或消失1	*/
				$(".cates").mouseenter(function(){
					var cat=$(this).attr("mt-ct");
					$(".b-"+cat+"").show().siblings().hide();
					})
				$(".important").mouseleave(function(){
					$(".import_list").hide()
					})
				/*侧边栏每块划上的时候添加颜色块*/
				$("aside ul li").mouseenter(function(){
					$(this).addClass("yanses").siblings().removeClass("yanses")
					})
		
		
		/*模拟下拉菜单js时*/
		$(".time_list").mouseleave(function(){
			$(this).css({display:"none"})
			})
		$(".qjwxlk").on("mouseenter", function(e){
					if($(".time_list").is(":hidden")){
						$(".time_list").show();
					}else{
						$(".time_list").hide();
					}
						$(".time_list em").click(function(){
							var txt=$(this).text();
							$(".qjwxlk").text(txt);
							$(".time_list").hide();
						})
						$(document).one("click", function(){
							$(".time_list").hide();
						});
							e.stopPropagation();
					});
						$(".time_list").on("click", function(e){
						e.stopPropagation();
				});
		/*模拟下拉菜单js时*/
		$(".time_lists").mouseleave(function(){
			$(this).css({display:"none"})
			})
		$(".qjwxlks").on("mouseenter", function(e){
					if($(".time_lists").is(":hidden")){
						$(".time_lists").show();
					}else{
						$(".time_lists").hide();
					}
						$(".time_lists em").click(function(){
							var txt=$(this).text();
							$(".qjwxlks").text(txt);
							$(".time_lists").hide();
						})
						$(document).one("click", function(){
							$(".time_lists").hide();
						});
							e.stopPropagation();
					});
						$(".time_lists").on("click", function(e){
						e.stopPropagation();
				});
		/*餐位预订下面*/		
		$(".two_nxs ul li").click(function(){
			$(this).addClass("senmai").siblings().removeClass("senmai")
			})
		$("#datingq").click(function(){
			$(".da_tingf").css({display:"block"}).siblings().css({display:"none"})
			})
		$("#baojianq").click(function(){
			$(".bao_jianf").css({display:"block"}).siblings().css({display:"none"})
			})
		/*预定的时候对号的切换*/
		$(".da_tingf ul li").click(function(){
			$(".da_tingf ul li img").css({marginTop:"0"})	
				$(this).find("b img").css({marginTop:"-28px"})
				})
			$(".bao_jianf ul li").click(function(){
			$(".bao_jianf ul li img").css({marginTop:"0"})	
				$(this).find("b img").css({marginTop:"-28px"})
				})
		$(".two_nxs b").click(function(){
			$(".da_tingf ul li img,.bao_jianf ul li img").css({marginTop:"0"})
			})
		/*菜品预定的导航块分别添加颜色*/
		$(".wanyf_lt ul li").click(function(){
			$(this).addClass("wsczz").siblings().removeClass("wsczz")
			})
		/*菜品导航对应的各个块的显示或消失*/
		$(".wanyf_lt ul li").click(function(){
	   	var dogs=$(this).attr("dg-floor")
	   	var dog=$(this).attr("dg-ct");
	   	$(".f-"+dogs+"-"+dog+"").slideDown().siblings().slideUp();
			})
		/*这个是每一个菜品的增加或者减少*/	
		//初始化数量为1,并失效减
		$('.min').attr('disabled',false);/*disabled为true的时候为按钮失效*/
		$(".min").css({display:"none"});
		$(".text_box").css({display:"none"})
		//数量增加操作
		$(".add").click(function(){  
		$(this).siblings(".min").css({display:"block"}) 
		$(this).siblings(".text_box").css({display:"block"}) 
		$(this).siblings(".text_box").val(parseInt($(this).siblings(".text_box").val())+1)
		if (parseInt($(this).siblings(".text_box").val())!=1){
			$(this).siblings(".min").attr('disabled',false);
			}
		})
		//数量减少操作
		$(".min").click(function(){
		$(this).siblings(".text_box").val(parseInt($(this).siblings(".text_box").val())-1)
		if($(this).siblings(".text_box").val()==0){
			$(this).attr('disabled',false)
			$(this).css({display:"none"})
			$(this).siblings(".text_box").css({display:"none"})
		}
		})
		/*点击我的菜单里面的按钮时，这个对应的div消失*/
		$(".close_one").click(function(){
					$(this).parent().css({display:"none"})
					})
		////////////////////////////////////////
		
		$(".mins").attr('disabled',false);/*disabled为true的时候为按钮失效*/
		//数量增加操作
		$(".adds").click(function(){    
			$(this).siblings(".text_boxs").val(parseInt($(this).siblings(".text_boxs").val())+1)
			if (parseInt($(this).siblings(".text_boxs").val())!=1){
			$(this).siblings(".mins").attr('disabled',false);
				}
			})
		//数量减少操作
		$(".mins").click(function(){
			$(this).siblings(".text_boxs").val(parseInt($(this).siblings(".text_boxs").val())-1)
			if($(this).siblings(".text_boxs").val()==0){
				$(this).siblings(".text_boxs").val(1);
			}
		})	
		/*选择各种支付方式*/
		$("#zfbzf").click(function(){
			$(this).css({backgroundPosition:"0 -50px"}).siblings().css({backgroundPosition:"0 0"})
			$(".zhyezfmm span").css({display:"none"})
			})
		$("#wxzf").click(function(){
			$(this).css({backgroundPosition:"0 -50px"}).siblings().css({backgroundPosition:"0 0"})
			$(".zhyezfmm span").css({display:"none"})
			})	
		$("#yezf").click(function(){
			$(this).css({backgroundPosition:"0 -50px"}).siblings().css({backgroundPosition:"0 0"})
			$(".zhyezfmm span").css({display:"block"})
			})						
		/*会员中心*/
		var wait=60;
		document.getElementById("btnsj").disabled = false;   
		function time(o) {
        if (wait == 0) {
            o.removeAttribute("disabled");           
            o.value="获取验证码";
            wait = 60;
        } else {
            o.setAttribute("disabled", true);
            o.value="重新发送(" + wait + ")";
            wait--;
            setTimeout(function() {
                time(o)
            	},
            	1000)
        }
    }
document.getElementById("btnsj").onclick=function(){time(this);}		
	/*会员中心首页的大包*/
	$(".thisis_m ul").first().css({display:"block"}).siblings().css({display:"none"})
	var numbs=$(".q-1-lq01 li").length
	var numbb=$(".q-1-lq02 li").length
	if(numbs==6){
		$(".q-1-lq01 li").last().css({marginRight:"0"})
		}else{
			$(".q-1-lq01 li").css({marginRight:"15px"})
			};
	if(numbb==6){
		$(".q-1-lq02 li").last().css({marginRight:"0"})
		}else{
			$(".q-1-lq02 li").css({marginRight:"15px"})
			};
		
		
		
		
		
	
		
	
		
			
	
		
	})		