$(function(){
	/*top*/
	
	$(".zcdl a").mouseenter(function(){
		$(this).css({color:"#ff7800"})
		}).mouseleave(function(){
			$(this).css({color:"#fefefe"})
			})
	
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
	
	/*导航加搜索框*/
	
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
	
	$(".ssl").mouseenter(function(){
		$(this).css({background:"#cd0010"})
		}).mouseleave().css({background:"#e50012"})
		
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
		
	
	
		
		
		
		
		
	})			
	
		
			
	
		
	