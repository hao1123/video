var localObj = window.location;

var contextPath = localObj.pathname.split("/")[1];

var basePath = localObj.protocol + "//" + localObj.host + "/" + contextPath;

var server_context = basePath;
// 这里为....获得地址 var dizhi=<%=request.getContextPath()%>;

/*
 * int y; int a=42; int b=12; int c; if(a%b!=0){ c=a/b+1; }else{ c=a/b; }
 * System.out.println(c);
 */

$(document)
		.ready(
				function() {
//					gong = Math.floor(tag1 / tag4 + 1);
					$("#page").html("共计:" + gong + "页  当前页为第:" + page + "页");
					// alert(page);
					// alert("页面加载时");//style="margin-top: 150px"
					html += "<div class='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' style='margin-top: -50px'>";
					html += "<div class='show-top-grids'>";
					html += "<div class='col-sm-10 show-grid-left main-grids' style='margin-top: -50px'>";
					html += "<div class='recommended'>";
					html += "<div class='recommended-grids english-grid'>";
					$
							.post(
									"ajaxtijiao1.sf",
									{
										"State" : State,
										"dangqianye" : dangqianye,
										"meiyexianshiduoshaoge" : tag4
									},
									function(test) {
										var ht = eval("(" + test + ")");
										// alert("1");
										var dizhi = "<%=request.getContextPath()%>";
										$
												.each(
														ht,
														function(index, m) {
															html += "<div class='recommended-info'>";
															html += "<div class='col-md-2 resent-grid recommended-grid show-video-grid' >";
															html += "<div class='resent-grid-img recommended-grid-img'>";
															html += "<a href='video.sf?dizhi="
																	+ m.videoAddress
																	+ "&shipingID="
																	+ m.videoID
																	+ "'><img src='"
																	+ server_context
																	+ m.videoImage
																	+ "' alt='' style='width: 137px;height:100px' /></a>";
															html += "<div class='clck show-clock'>";
															html += "<span class='glyphicon glyphicon-time' aria-hidden='true'></span>";
															html += "</div>";
															html += "</div>";
															html += "<div class='resent-grid-info recommended-grid-info'>";
															html += "<h5><a href='video.sf?dizhi="
																	+ m.videoAddress
																	+ "&shipingID="
																	+ m.videoID
																	+ "' class='title' >"
																	+ m.videoName
																	+ "</a></h5>";
															html += "<p class='author'><a href='video.sf?dizhi="
																	+ m.videoAddress
																	+ "&shipingID="
																	+ m.videoID
																	+ "' class='author'>时长 :"
																	+ m.videoTime
																	+ "</a></p>";
															/* html+="<p class='views'>"+m.videoTime+"</p>"; */
															html += "</div>";
															html += "</div>";
															// html+="";
														});
										// html+="<div align='center'><button
										// type='button' id='up'>上一页</button>
										// &nbsp; <button type='button'
										// id='next'>下一页</button> &nbsp;<button
										// type='button'
										// id='wei'>尾页</button></div>";
										$("#test").html(html);
										// window.location.href="index.jsp"
										// window.location.href="jb51.jsp?backurl="+window.location.href;
										html = "";
									});

				});
$("#next")
		.click(
				function() {
					// alert("下一页");
					// page=tag1/tag4;
					gong = Math.floor(tag1 / tag4 + 1);

					if (page == gong) {
						page = gong;
						dangqianye = (gong - 1) * tag4;
						;
						alert("已经是最后一页啦!!");
					} else {
						page++;
						dangqianye += tag4;
					}
					// alert(dangqianye);

					/*
					 * if(page>=gong){ page=gong; }else{
					 */
					// alert(dangqianye);
					// 总页数 / 每页多少 共分页多少页
					// alert(gong+"总共"); //总共分了几页
					// alert(page+"当前");
					if (page <= gong) {

						gong = Math.floor(tag1 / tag4 + 1);
						//alert("一共"+gong+"页");
						$("#page")
								.html("共计:" + gong + "页  当前页为第:" + page + "页");
						html += "<div class='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' style='margin-top: -50px'>";
						html += "<div class='show-top-grids'>";
						html += "<div class='col-sm-10 show-grid-left main-grids' style='margin-top: -50px'>";
						html += "<div class='recommended'>";
						html += "<div class='recommended-grids english-grid'>";
						$
								.post(
										"ajaxtijiao1.sf",
										{
											"State" : State,
											"dangqianye" : dangqianye,
											"meiyexianshiduoshaoge" : tag4
										},
										function(test) {
											var ht = eval("(" + test + ")");
											// alert("1");
											var dizhi = "<%=request.getContextPath()%>";
											$
													.each(
															ht,
															function(index, m) {
																html += "<div class='recommended-info'>";
																html += "<div class='col-md-2 resent-grid recommended-grid show-video-grid'>";
																html += "<div class='resent-grid-img recommended-grid-img'>";
																html += "<a href='video.sf?dizhi="
																		+ m.videoAddress
																		+ "&shipingID="
																		+ m.videoID
																		+ "'><img src='"
																		+ server_context
																		+ m.videoImage
																		+ "' alt='' style='width: 137px;height:100px' /></a>";
																html += "<div class='clck show-clock'>";
																html += "<span class='glyphicon glyphicon-time' aria-hidden='true'></span>";
																html += "</div>";
																html += "</div>";
																html += "<div class='resent-grid-info recommended-grid-info'>";
																html += "<h5><a href='video.sf?dizhi="
																		+ m.videoAddress
																		+ "&shipingID="
																		+ m.videoID
																		+ "' class='title'>"
																		+ m.videoName
																		+ "</a></h5>";
																html += "<p class='author'><a href='video.sf?dizhi="
																		+ m.videoAddress
																		+ "&shipingID="
																		+ m.videoID
																		+ "' class='author'>时长 :"
																		+ m.videoTime
																		+ "</a></p>";
																/* html+="<p class='views'>"+m.videoTime+"</p>"; */
																html += "</div>";
																html += "</div>";
																// html+="";
															});
											// html+="<div
											// align='center'><button
											// type='button'
											// id='up'>上一页</button> &nbsp;
											// <button type='button'
											// id='next'>下一页</button>
											// &nbsp;<button type='button'
											// id='wei'>尾页</button></div>";
											$("#test").html(html);
											// window.location.href="index.jsp"
											// window.location.href="jb51.jsp?backurl="+window.location.href;
											html = "";
										});

					} else {
						alert("已经是最后一页啦!!");
					}

				});
$("#up")
		.click(
				function() {
					// alert("上一页");
					if (dangqianye <= 0) {
						dangqianye = 0;
					} else {
						dangqianye = dangqianye - tag4;
					}
					gong = tag1 / tag4 + 1;
					// dangqianye=tag4;
					// alert(gong+"总共"); //总共分了几页
					// alert(page+"当前");
					if (page >= 1) {
						// alert(dangqianye);
						html += "<div class='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' style='margin-top: -50px'>";
						html += "<div class='show-top-grids'>";
						html += "<div class='col-sm-10 show-grid-left main-grids' style='margin-top: -50px'>";
						html += "<div class='recommended'>";
						html += "<div class='recommended-grids english-grid'>";
						$
								.post(
										"ajaxtijiao1.sf",
										{
											"State" : State,
											"dangqianye" : dangqianye,
											"meiyexianshiduoshaoge" : tag4
										},
										function(test) {
											gong = Math.floor(tag1 / tag4 + 1);
											// alert("一共"+gong+"页");
											$("#page").html(
													"共计:" + gong + "页  当前页为第:"
															+ page + "页");
											var ht = eval("(" + test + ")");
											// alert("1");
											var dizhi = "<%=request.getContextPath()%>";
											$
													.each(
															ht,
															function(index, m) {
																html += "<div class='recommended-info'>";
																html += "<div class='col-md-2 resent-grid recommended-grid show-video-grid'>";
																html += "<div class='resent-grid-img recommended-grid-img'>";
																html += "<a href='video.sf?dizhi="
																		+ m.videoAddress
																		+ "&shipingID="
																		+ m.videoID
																		+ "'><img src='"
																		+ server_context
																		+ m.videoImage
																		+ "' alt='' style='width: 137px;height:100px' /></a>";
																html += "<div class='clck show-clock'>";
																html += "<span class='glyphicon glyphicon-time' aria-hidden='true'></span>";
																html += "</div>";
																html += "</div>";
																html += "<div class='resent-grid-info recommended-grid-info'>";
																html += "<h5><a href='video.sf?dizhi="
																		+ m.videoAddress
																		+ "&shipingID="
																		+ m.videoID
																		+ "' class='title'>"
																		+ m.videoName
																		+ "</a></h5>";
																html += "<p class='author'><a href='video.sf?dizhi="
																		+ m.videoAddress
																		+ "&shipingID="
																		+ m.videoID
																		+ "' class='author'>时长 :"
																		+ m.videoTime
																		+ "</a></p>";
																/* html+="<p class='views'>"+m.videoTime+"</p>"; */
																html += "</div>";
																html += "</div>";
																// html+="";
															});
											// html+="<div
											// align='center'><button
											// type='button'
											// id='up'>上一页</button> &nbsp;
											// <button type='button'
											// id='next'>下一页</button>
											// &nbsp;<button type='button'
											// id='wei'>尾页</button></div>";
											$("#test").html(html);
											// window.location.href="index.jsp"
											// window.location.href="jb51.jsp?backurl="+window.location.href;
											html = "";
										});
					} else {

						alert("已经是第一页了");
					}
					if (page <= 1) {
						page = 1;
					} else {
						page--;
					}
				});
$("#wei")
		.click(
				function() {
					// alert("点击了尾页");
					gong = Math.floor(tag1 / tag4 + 1);
					page = gong;// 最后一页
					// alert(gong);
					dangqianye = (gong - 1) * tag4;
					// alert(dangqianye);
					html += "<div class='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main' style='margin-top: -50px'>";
					html += "<div class='show-top-grids'>";
					html += "<div class='col-sm-10 show-grid-left main-grids' style='margin-top: -50px'>";
					html += "<div class='recommended'>";
					html += "<div class='recommended-grids english-grid'>";
					$
							.post(
									"ajaxtijiao1.sf",
									{
										"State" : State,
										"dangqianye" : dangqianye,
										"meiyexianshiduoshaoge" : tag4
									},
									function(test) {
										gong = Math.floor(tag1 / tag4 + 1);
										// alert("一共"+gong+"页");
										$("#page").html(
												"共计:" + gong + "页  当前页为第:"
														+ page + "页");
										var ht = eval("(" + test + ")");
										// alert("1");
										$
												.each(
														ht,
														function(index, m) {
															html += "<div class='recommended-info'>";
															html += "<div class='col-md-2 resent-grid recommended-grid show-video-grid'>";
															html += "<div class='resent-grid-img recommended-grid-img'>";
															html += "<a href='video.sf?dizhi="
																	+ m.videoAddress
																	+ "&shipingID="
																	+ m.videoID
																	+ "'><img src='"
																	+ server_context
																	+ m.videoImage
																	+ "' alt='' style='width: 137px;height:100px' /></a>";
															html += "<div class='clck show-clock'>";
															html += "<span class='glyphicon glyphicon-time' aria-hidden='true'></span>";
															html += "</div>";
															html += "</div>";
															html += "<div class='resent-grid-info recommended-grid-info'>";
															html += "<h5><a href='video.sf?dizhi="
																	+ m.videoAddress
																	+ "&shipingID="
																	+ m.videoID
																	+ "' class='title'>"
																	+ m.videoName
																	+ "</a></h5>";
															html += "<p class='author'><a href='video.sf?dizhi="
																	+ m.videoAddress
																	+ "&shipingID="
																	+ m.videoID
																	+ "' class='author'>时长 :"
																	+ m.videoTime
																	+ "</a></p>";
															/* html+="<p class='views'>"+m.videoTime+"</p>"; */
															html += "</div>";
															html += "</div>";
															// html+="";
														});
										// html+="<div align='center'><button
										// type='button' id='up'>上一页</button>
										// &nbsp; <button type='button'
										// id='next'>下一页</button> &nbsp;<button
										// type='button'
										// id='wei'>尾页</button></div>";
										$("#test").html(html);
										// window.location.href="index.jsp"
										// window.location.href="jb51.jsp?backurl="+window.location.href;
										html = "";
										alert("已经跳转尾页");
									});

				});
$("#shou")
		.click(
				function() {
					// alert("点击了尾页");
					page = 1;// 最后一页
					dangqianye = 0;
					html += "<div class='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>";
					html += "<div class='show-top-grids'>";
					html += "<div class='col-sm-10 show-grid-left main-grids' style='margin-top: -50px'>";
					html += "<div class='recommended'>";
					html += "<div class='recommended-grids english-grid'>";
					$
							.post(
									"ajaxtijiao1.sf",
									{
										"State" : State,
										"dangqianye" : dangqianye,
										"meiyexianshiduoshaoge" : tag4
									},
									function(test) {
										gong = Math.floor(tag1 / tag4)+1;
										// alert("一共"+gong+"页");
										$("#page").html(
												"共计:" + gong + "页  当前页为第:"
														+ page + "页");
										var ht = eval("(" + test + ")");
										// alert("1");
										var dizhi = "<%=request.getContextPath()%>";
										$
												.each(
														ht,
														function(index, m) {
															html += "<div class='recommended-info'>";
															html += "<div class='col-md-2 resent-grid recommended-grid show-video-grid'>";
															html += "<div class='resent-grid-img recommended-grid-img' style='margin-top: -50px'>";
															html += "<a href='video.sf?dizhi="
																	+ m.videoAddress
																	+ "&shipingID="
																	+ m.videoID
																	+ "'><img src='"
																	+ server_context
																	+ m.videoImage
																	+ "' alt='' style='width: 137px;height:100px' /></a>";
															html += "<div class='clck show-clock'>";
															html += "<span class='glyphicon glyphicon-time' aria-hidden='true'></span>";
															html += "</div>";
															html += "</div>";
															html += "<div class='resent-grid-info recommended-grid-info'>";
															html += "<h5><a href='video.sf?dizhi="
																	+ m.videoAddress
																	+ "&shipingID="
																	+ m.videoID
																	+ "' class='title'>"
																	+ m.videoName
																	+ "</a></h5>";
															html += "<p class='author'><a href='video.sf?dizhi="
																	+ m.videoAddress
																	+ "&shipingID="
																	+ m.videoID
																	+ "' class='author'>时长 :"
																	+ m.videoTime
																	+ "</a></p>";
															/* html+="<p class='views'>"+m.videoTime+"</p>"; */
															html += "</div>";
															html += "</div>";
															// html+="";
														});
										// html+="<div align='center'><button
										// type='button' id='up'>上一页</button>
										// &nbsp; <button type='button'
										// id='next'>下一页</button> &nbsp;<button
										// type='button'
										// id='wei'>尾页</button></div>";
										$("#test").html(html);
										//window.location.href="index.jsp"
										//window.location.href="jb51.jsp?backurl="+window.location.href; 
										html = "";
										alert("已经跳转首页");
									});

				});

$("#tiaozhuan")
		.click(
				function() {
					/*alert("点击了跳转");*/
					var text = 0;
					//获得值
					var a = $("#text").val();
					if (a == null || a == "") {
						alert("请输入内容");
					} else {
						gong = Math.floor(tag1 / tag4)+1;//最大页码
						if (a == 0 || a > gong) {
							alert("页码输入不对哦!");
						} else {
							text = a;
							//alert(text);
							page = text;
							if (page == 0) {
								page++;
								dangqianye = 0;
							} else {
								dangqianye = (page - 1) * tag4;
							}

							html += "<div class='col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main'>";
							html += "<div class='show-top-grids'>";
							html += "<div class='col-sm-10 show-grid-left main-grids' style='margin-top: -50px'>";
							html += "<div class='recommended'>";
							html += "<div class='recommended-grids english-grid'>";
							$
									.post(
											"ajaxtijiao1.sf",
											{
												"State" : State,
												"dangqianye" : dangqianye,
												"meiyexianshiduoshaoge" : tag4
											},
											function(test) {
												gong = Math.floor(tag1 / tag4 + 1);
												//alert("一共"+gong+"页");
												$("#page").html(
														"共计:" + gong
																+ "页  当前页为第:"
																+ page + "页");
												var ht = eval("(" + test + ")");
												//alert("1");
												var dizhi = "<%=request.getContextPath()%>";
												$
														.each(
																ht,
																function(index,
																		m) {
																	html += "<div class='recommended-info'>";
																	html += "<div class='col-md-2 resent-grid recommended-grid show-video-grid'>";
																	html += "<div class='resent-grid-img recommended-grid-img' style='margin-top: -50px'>";
																	html += "<a href='video.sf?dizhi="
																			+ m.videoAddress
																			+ "&shipingID="
																			+ m.videoID
																			+ "'><img src='"
																			+ server_context
																			+ m.videoImage
																			+ "' alt='' style='width: 137px;height:100px' /></a>";
																	html += "<div class='clck show-clock'>";
																	html += "<span class='glyphicon glyphicon-time' aria-hidden='true'></span>";
																	html += "</div>";
																	html += "</div>";
																	html += "<div class='resent-grid-info recommended-grid-info'>";
																	html += "<h5><a href='video.sf?dizhi="
																			+ m.videoAddress
																			+ "&shipingID="
																			+ m.videoID
																			+ "' class='title'>"
																			+ m.videoName
																			+ "</a></h5>";
																	html += "<p class='author'><a href='video.sf?dizhi="
																			+ m.videoAddress
																			+ "&shipingID="
																			+ m.videoID
																			+ "' class='author'>时长 :"
																			+ m.videoTime
																			+ "</a></p>";
																	/* html+="<p class='views'>"+m.videoTime+"</p>"; */
																	html += "</div>";
																	html += "</div>";
																	//html+="";
																});
												//html+="<div align='center'><button type='button' id='up'>上一页</button>  &nbsp; <button type='button' id='next'>下一页</button> &nbsp;<button type='button' id='wei'>尾页</button></div>";
												$("#test").html(html);
												//window.location.href="index.jsp"
												//window.location.href="jb51.jsp?backurl="+window.location.href; 
												html = "";

											});

						}

					}

				});
