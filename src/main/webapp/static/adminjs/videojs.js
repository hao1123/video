$(document).ready(function(){
		var html="";
		$("#button").click(function(){
				var shipingID= $("#shipingID").val(); //获取  视频ID
				var message= $("#message").val(); //获取  留言内容
					if(message==null||message==""){
						alert("请输入内容");
						
				}else{
			$.post("messageuser.sf",{"shipingID":shipingID,"message":message},function(test){
				var ht=eval("("+test+")");
				//alert("1");
					$.each(ht,function(index,m){
						html+=m;
					});
					alert(html);
					//window.location.href="index.jsp"
					//window.location.href="jb51.jsp?backurl="+window.location.href; 
					html="";
				});
			}
			});
	});