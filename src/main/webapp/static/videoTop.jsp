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
<title>上传状态</title>
<script
	src="<%=request.getContextPath()%>/static/Homepage/js/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/static/css.css">
</head>
<body onload="pro()">
	<div id="ddd" class="cent"></div>
</body>


<script type="text/javascript">
	function pro() {
		var t;
		var html = "";
		$.post("baifenbiAJAX", function(r) {
			//把json字符串转换为json对象
			var obj = eval("(" + r + ")");
			//alert(obj.test);
			 var a=obj.baifenbi;
			a += 1;
			//得到DIV
			html += "<div class='Bar' id='she'>";
			html += "<div style='width:" + a + "%;' >";
			html += "<span>" + a + "%</span>";
			html += "</div>";
			html += "</div>";
			//alert(html);
			$("#ddd").html(html);
			if (obj.tag != 0) {
				//alert("进入");
				clearTimeout(t);
			}

			//重复请求
			t = setTimeout("pro()", 100);
		});

	}
</script>
</html>