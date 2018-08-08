$(document).ready(function(){	
	/*<%if(request.getAttribute("echo")!=null){ %>
	<div style="margin-left: 90%"><%=request.getAttribute("echo") %></a></div>
	<%} %>*/

		jQuery("#ajaxbutton1").click(function(){
			var html="";
			//alert("点击了查询");
			var mess=jQuery("#usertext").val();
			if(mess==null||mess==""){
				alert("清输入查询内容！");
			}else{
							jQuery.post("userchaxunmessage1",{"message":mess},function(test){
								var ht=eval("("+test+")");
								//alert("1");
								jQuery.each(ht,function(index,m){
									//alert(m.userName);
									var userID=m.userID;
									var userName=m.userName;
									var userPhone=m.userPhone;
									var userAddress=m.userAddress;
									if(userAddress==""||userAddress==null){
										userAddress="空";
									}
										var userState=m.userState;
										//开始组装HTML
										html+=" <table width='70%' border='0' cellpadding='3' cellspacing='1' class='table1'>";
										html+="<TR><th align='center'><input type='checkbox' name='checkbox' id='checkbox'></th><th align='center'>用户ID</th><th align='center'>用户账号</th><th align='center'>联系电话</th><th align='center'>地址</th><th align='center'>审核状态</th></TR>";
										
										html+="<TR>";
										html+="<TD align='center'><input type='checkbox' name='checkbox2' id='checkbox2'></TD>";
										html+=" <TD align='center'><a href='static/Xinxi.jsp?id="+userID+"'>"+userID+"</a></TD>";
										html+="<TD align='center'>"+userName+"</TD>";
										html+="<TD align='center'>"+userPhone+"</TD>";
										html+="<TD align='center'>"+userAddress+"</TD>";
										html+="<TD align='center'>"+userState+"</TD>";
									//	html+="<TD width='160' align='center'><BUTTON style='height:21px; font-size:12px' onClick='javascript:if (confirm('查看该信息？')) location.href='static/Xinxi.jsp?id="+userID+"';else return;>查看</BUTTON>";
									//	html+="<BUTTON style='height:21px; font-size:12px' onClick='javascript:if (confirm('编辑该信息？')) location.href='01_edit.html';else return;'>编辑</BUTTON>";
									//	html+="<BUTTON style='height:21px; font-size:12px' onClick='javascript:if (confirm('通过审核？')) location.href='#';else return;'>审核</BUTTON></TD>";
										html+="<TD align='center'><a style='color:red' href='static/Xinxi.jsp?id="+userID+"'>查看</a></TD>";
										html+="</TR>";
							          	html+="</table>";
							          	
									
									});
								
									//alert(html);
									jQuery("#chaxunqu").html(html);
									html="";
								});
								
			}
		});
		//这里是根据手机号查询
		jQuery("#ajaxbutton2").click(function(){
			var html="";
			//alert("点击了查询");
			var mess=jQuery("#usertext2").val();
			if(mess==null||mess==""){
				alert("清输入查询内容！");
			}else{
							jQuery.post("userchaxunmessage2",{"message":mess},function(test){
								var ht=eval("("+test+")");
								//alert("1");
								jQuery.each(ht,function(index,m){
									//alert(m.userName);
									var userID=m.userID;
									var userName=m.userName;
									var userPhone=m.userPhone;
									var userAddress=m.userAddress;
									if(userAddress==""||userAddress==null){
										userAddress="空";
									}
										var userState=m.userState;
										//开始组装HTML
										html+=" <table width='70%' border='0' cellpadding='3' cellspacing='1' class='table1'>";
										html+="<TR><th align='center'><input type='checkbox' name='checkbox' id='checkbox'></th><th align='center'>用户ID</th><th align='center'>用户账号</th><th align='center'>联系电话</th><th align='center'>地址</th><th align='center'>审核状态</th></TR>";
										
										html+="<TR>";
										html+="<TD align='center'><input type='checkbox' name='checkbox2' id='checkbox2'></TD>";
										html+=" <TD align='center'><a href='static/Xinxi.jsp?id="+userID+"'>"+userID+"</a></TD>";
										html+="<TD align='center'>"+userName+"</TD>";
										html+="<TD align='center'>"+userPhone+"</TD>";
										html+="<TD align='center'>"+userAddress+"</TD>";
										html+="<TD align='center'>"+userState+"</TD>";
										html+="<TD align='center'><a style='color:red' href='static/Xinxi.jsp?id="+userID+"'>查看</a></TD>";
										//html+="<TD width='160' align='center'><BUTTON style='height:21px; font-size:12px' onClick='javascript:if (confirm('查看该信息？')) location.href='static/Xinxi.jsp';else return;'>查看</BUTTON>";
										//html+="<BUTTON style='height:21px; font-size:12px' onClick='javascript:if (confirm('编辑该信息？')) location.href='01_edit.html';else return;'>编辑</BUTTON>";
										//html+="<BUTTON style='height:21px; font-size:12px' onClick='javascript:if (confirm('通过审核？')) location.href='#';else return;'>审核</BUTTON></TD>";
							          	html+="</TR>";
							          	html+="</table>";
									});
								
									//alert(html);
									jQuery("#chaxunqu2").html(html);
									html="";
								});
								
			}
		});
		
					});
