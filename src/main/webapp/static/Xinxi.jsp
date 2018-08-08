<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>	
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<base href="<%=basePath%>">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script
	src="<%=request.getContextPath()%>/static/User_Data_Update/js/jquery-1.8.3.min.js"></script>

	


<title>屄哩屄哩</title>
</head>
<body>	
<script type="text/javascript">
$(document).ready(function(){
	var userID="<%=request.getParameter("id")%>";
	//alert(userID);
	var html="";
	//根据ID ajax 查询出对应的所有信息
	jQuery.post("userID.sf",{"userID":userID},function(test){
		var ht=eval("("+test+")");
		//alert("1");
		jQuery.each(ht,function(index,m){
			var userMingzi = m.userMingzi;
			if(userMingzi==null||userMingzi==""){
				userMingzi="空";
			}
			var usersex = m.usersex;
			if(usersex==null||usersex==""){
				usersex="空";
			}
			var userAddress = m.userAddress;
			if(userAddress==null||userAddress==""){
				userAddress="空";
			}
			var userQQ = m.userQQ;
			if(userQQ==null||userQQ==""){
				userQQ="空";
			}
			var userEmial = m.userEmial;
			if(userEmial==null||userEmial==""){
				userEmial="空";
			}
				//开始组装HTML
				html+="<form action='updateuser.sf' method='post'>";
				html+="用户ID: <input type='text' name='userID' value='"+m.userID+"'> </br>";
				html+="用户名: <input type='text' name='userName' value='"+m.userName+"'> </br>";
				html+="真实姓名: <input type='text' name='userzhenshiName' value='"+userMingzi+"'></br>";
				html+="用户性别: <input type='text' name='userSex'  value='"+usersex+"'></br>";
				html+="用户密码: <input type='text' name='passWord' value='"+m.passWord+"'></br>";
				html+="用户地址: <input type='text' name='addr' value='"+userAddress+"'></br>";
				html+="用户手机: <input type='text' name='userPhone' value='"+m.userPhone+"'></br>";
				html+="用户QQ: <input type='text'  name='userQQ' value='"+userQQ+"'></br>";
				html+="用户邮箱: <input type='text' name='userEmial' value='"+userEmial+"'></br>";
				html+="<input type='submit' id='buttont' value='修改'> <a href='Houtai.sf'>取消</a>";
				html+="</form>";
			});
		
			/* alert(html); */
			jQuery("#userxinxi").html(html);
			html="";
		});
	});
</script>
		<div align="center" id="userxinxi">
					
		</div>	


</body>
</html>