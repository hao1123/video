 	
 	window.onload = function(){
 //低版本的IE浏览器不支持getElementByClassName方法，考虑兼容性,重写方法。
 if (!document.getElementByClassName) {
  document.getElementByClassName =function(cls){
   var ret = [];
   var clsElments = document.getElementsByTagName('*');
   for (var i = 0, len = clsElments.length; i < len; i++) {
    //考虑一个标签有多个class的情况,这里用正则表达式会好一点
    if (clsElments[i].className == cls 
     || (clsElments[i].className.indexOf(cls + " ") >= 0)
     || (clsElments[i].className.indexOf(" " + cls + " ") >= 0)
     || (clsElments[i].className.indexOf(" " + cls) >= 0)) 
    {
     ret.push(clsElments[i]);
    }
   }
   return ret;
  }
 
 }
 
 var cartTable = document.getElementById("cartTable");
 var tr = cartTable.children[1].rows; //table标签特有的属性，rows可以获得表格元素的所有tr行。
 var checkInput = document.getElementByClassName('check');//获得所有的单选框
 var checkAllInput = document.getElementByClassName('check_all');//获得所有的单选框
 var priceTotle = document.getElementById("priceTotle");//总价
 var selectTotle = document.getElementById("selectTotle");//已选商品
 var selected = document.getElementById("selected");
 var footer = document.getElementById("footer");//底部标签
 var selectedViewList = document.getElementById("selectedViewList");//底部标签
 var deleteAll = document.getElementById("deleteAll");
 
 
 
 //计算总价格和数量
 function getTotle(){
  var selectNum = 0;//数量
  var priceNum = 0;//价格
  var HTMLstr = ""; //缩略图的字符串拼接
  for (var i = 0,len = tr.length; i < len; i++) {
   if (tr[i].getElementsByTagName("input")[0].checked) {
    tr[i].className ="on";
    selectNum += parseInt(tr[i].getElementsByTagName("input")[1].value);
    priceNum += parseFloat(tr[i].cells[4].innerHTML);
 
 
    //拼接字符串显示已经选择的商品 
    HTMLstr += '<div><img src="'+ tr[i].getElementsByTagName('img')[0].src +'"><span class ="del" index ="'+ i +'">取消选择</span></div>';
 
   }
   else{
    tr[i].className = "";
   }
  }
  selectTotle.innerHTML = selectNum;
  priceTotle.innerHTML = priceNum.toFixed(2);//保留两位小数
  selectedViewList.innerHTML = HTMLstr;
 }
 
 //计算小计价格
 function getSubTotle(tr){
  var tds = tr.cells;
  var price = parseFloat(tds[2].innerHTML);
  var num = parseInt(tr.getElementsByTagName("input")[1].value);
  var subTotle = parseFloat(price * num).toFixed(2);
  tds[4].innerHTML = subTotle;
 }
 
 //复选框绑定单击事件
 for (var i = 0, len = checkInput.length; i < len; i++){
  checkInput[i].onclick =function (){
   //判断全选按钮，变更
   if (this.className == "check_all check") {
    for (var j = 0; j < len; j++){
     checkInput[j].checked = this.checked;
    }
   }
   if (this.checked == false) {
    for (var k = 0,len2 = checkAllInput.length; k < len2; k++){
     checkAllInput[k].checked = false;
    }
   }
   getTotle();
  }
 }
 
 
 
 //控制底部标签的显示
 selected.onclick = function(){
  if (footer.className == "footer") {
   footer.className == "footer show";
  } else {
   footer.className == "footer"; 
  }
 }
 
 
 //图片缩略图的取消选择按钮功能,e为事件对象
 selectedViewList.onclick = function(e){
  //兼容低版本的IE
/*  if (e){
   e = e;
  }else{
   e = window.event;
  } */
  var e = e || window.event;
  var el = e.srcElement;
  if (el.className == "del") {
   var index = el.getAttribute("index");
   var input = tr[index].getElementsByTagName("input")[0];
   input.checked = false;
   input.onclick();
  }
 }
 
 //实现加减、删除操作。同样用事件代理的方法实现
 for (var i = 0, len3 = tr.length; i < len3; i++){
  tr[i].onclick = function(e){
   var e = e || window.event;
   var el = e.srcElement;
   var clsName = el.className;
   var input = this.getElementsByTagName("input")[1];
   var inputValue = parseInt(input.value);
   var reduce = this.getElementsByTagName("span")[1];
   switch (clsName){
    case "add":
     /*parseInt(inputValue) ++;*/
     input.value = inputValue + 1;
     reduce.innerHTML ="-";
     getSubTotle(this);
     break;
    case "reduce":
     if(inputValue >= 1){
      input.value = inputValue - 1;
     }else{
      reduce.innerHTML ="";
     }
     getSubTotle(this);     
     break;
    case "delete":
     var conf = confirm("确定删除这个商品？");
     if (conf) {
      this.parentNode.removeChild(this);
     }
     break;
    default:
     break;
   }
   getTotle();
  }
  //处理从手动输入商品数量
  tr[i].getElementsByTagName("input")[1].onkeyup = function(){
   var val = this.value;
   var tr = this.parentNode.parentNode;
   if (isNaN(val) || val < 0 ) {
    val = 1;
   }
   this.value = val;
   getSubTotle(tr);
  }
 }
 
 //全选删除
 deleteAll.onclick = function(){
  if (selectTotle.innerHTML !="0") {
   var conf = confirm("确定删除这些商品？");
   if (conf) {
    for (var i = 0, len = tr.length; i < len; i++) {
     var input = tr[i].getElementsByTagName("input")[0];
     if(input.checked){
      tr[i].parentNode.removeChild(tr[i]);
     }
    }
   }
  }  
 }
}
 	