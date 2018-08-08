$(document).ready(
		function() {
				//隐藏
			$("#div2").hide();
/*			$("#div2").hide();
			function asjdh() {//移出
	          	//alert("1");
        		$("#div2").hide();
	      	  }
	        function project() {//移入
	        	//alert("2");
	        	$("#div2").show();
	      	  }*/
	        
			var html = "";
			$.post("ajaxTuiJian", function(test) {
				var ht = eval("(" + test + ")");
				var i = 0;
				$.each(ht, function(index, m) {
					html += "<li class='item'><a href='video.sf?dizhi="
							+ m.videoAddress + "&shipingID=" + m.videoID
							+ "'><i class='n2'>"+(++i)+"</i>" + m.videoName
							+ "</a></li>";
				});
				// alert(html);
				$("#did4").html(html);
				html = "";
			});
			$.post("ajaxTuiJian", function(test) {
				var ht = eval("(" + test + ")");
				var i=0;
				$.each(ht, function(index, m) {
					html += "<li class='item'><a href='video.sf?dizhi="
							+ m.videoAddress + "&shipingID=" + m.videoID
							+ "'><i class='n2'>"+(++i)+"</i>" + m.videoName
							+ "</a></li>";
				});
				// alert(html);
				$("#did3").html(html);
				html = "";
			});
			$.post("ajaxTuiJian", function(test) {
				 var i=0;
				var ht = eval("(" + test + ")");
				$.each(ht, function(index, m) {
					html += "<li class='item'><a href='video.sf?dizhi="
							+ m.videoAddress + "&shipingID=" + m.videoID
							+ "'><i class='n2'>"+(++i)+"</i>" + m.videoName
							+ "</a></li>";
				});
				// alert(html);
				$("#did2").html(html);
				html = "";
			});

			$("#qiulingyang").click(function() {
				alert("欢迎观看！");
			})
//			$("#shuaxin").click(function() {
//				alert("数据库视频不够... 神经病  瞄~");
//			})
//			$("#shuaxin1").click(function() {
//				alert("数据库视频不够... 神经病  瞄~");
//			})
//			$("#shuaxin2").click(function() {
//				alert("数据库视频不够... 神经病  瞄~");
//			})

		});

function asjdh() {//移出
  	//alert("1");
	$("#div2").hide();
	  }
function project() {//移入
	//alert("2");
	$("#div2").show();
	  }


window.onload = function() {
	document.getElementById('chakan4').onclick = function() {
		this.disabled = true;
		var html = "";
		var i = 0;
		// 向后台ajax
		$.post("ajaxTuiJian", function(test) {
			var ht = eval("(" + test + ")");
			$.each(ht, function(index, m) {
				html += "<li class='item'><a href='video.sf?dizhi="
						+ m.videoAddress + "&shipingID=" + m.videoID
						+ "'><i class='n2'>"+(++i)+"</i>" + m.videoName + "</a></li>";
			});
			// alert(html);
			$("#did4").html(html);
			html = "";
		});
		x = document.getElementById("chakan4");
		x.innerHTML = "正在刷新....";
		setTimeout(function() {
			x = document.getElementById("chakan4");
			x.innerHTML = "随机刷新";
			document.getElementById('chakan4').disabled = false;
		}, 4000);

	}
	document.getElementById('chakan3').onclick = function() {
		this.disabled = true;
		var html = "";
		var i=0;
		// 向后台ajax
		$.post("ajaxTuiJian", function(test) {
			var ht = eval("(" + test + ")");
			$.each(ht, function(index, m) {
				html += "<li class='item'><a href='video.sf?dizhi="
						+ m.videoAddress + "&shipingID=" + m.videoID
						+ "'><i class='n2'>"+(++i)+"</i>" + m.videoName + "</a></li>";
			});
			// alert(html);
			$("#did3").html(html);
			html = "";
		});
		x = document.getElementById("chakan3");
		x.innerHTML = "正在刷新....";
		setTimeout(function() {
			x = document.getElementById("chakan3");
			x.innerHTML = "随机刷新";
			document.getElementById('chakan3').disabled = false;
		}, 4000);

	}

	document.getElementById('chakan').onclick = function() {
		this.disabled = true;
		var html = "";
		// 向后台ajax
		$.post("ajaxTuiJian", function(test) {
			var ht = eval("(" + test + ")");
			var i=0;
			$.each(ht, function(index, m) {
				html += "<li class='item'><a href='video.sf?dizhi="
						+ m.videoAddress + "&shipingID=" + m.videoID
						+ "'><i class='n2'>"+(++i)+"</i>" + m.videoName + "</a></li>";
			});
			// alert(html);
			$("#did2").html(html);
			html = "";
		});
		x = document.getElementById("chakan");
		x.innerHTML = "正在刷新....";
		setTimeout(function() {
			x = document.getElementById("chakan");
			x.innerHTML = "随机刷新";
			document.getElementById('chakan').disabled = false;
		}, 2000);

	}

}
