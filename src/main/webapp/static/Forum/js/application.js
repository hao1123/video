(function($){
  $(function(){
    //Init searchmenu
    $("#scbar_type").text($("#scbar_type_menu li .curtype").eq(0).text());
    $("#scbar_mod").val($("#scbar_type_menu li .curtype").eq(0).attr("rel"));
    $("#scbar_type_menu li a").click(function(){
      $("#scbar_type").text(this.text);
      $("#scbar_mod").val(this.rel);
    });
  });
  $(function(){
    //Init announcement
    $(".announcement").each(function(i, v){
      var $this = $(this);
      var $list = $this.children(".list");
      var $items = $list.children(".items");
      var $li = $items.children();
      var count = $li.length;
      var interval = $this.attr("data-interval") || 3000;
      var index = 0;
      
      $list.height($items.children().height());
      
      $items.append($li[0].outerHTML);
      $li = $items.children();
      setInterval(function(){
        index++;
        var top = $li.eq(index).position().top;
        $items.animate({top: -top}, 300, function(){
          if (index >= count) {
            $items.css("top", 0);
            index = 0;
          }
        });
      }, interval);
    });
  });
  $(function(){
    $(".carousel-indicators").children().each(function(i,v){
      $(this).attr('data-slide-to', $(this).attr('data-slide-to') - 1);
    })
  });
  $(function(){
    //pagination
    $(".pagination").each(function(i, v) {
      var $this = $(this);
      var code = $this.find('a,strong').map(function(i,v) {
        var $v = $(v);
        if (v.tagName == "A" && v.className =="") {
          return '<li><a href="' + $v.attr('href') + '">' + $v.text() + '</a></li>';
        }
        if (v.tagName == "STRONG") {
          return '<li class="active"><span>' + $v.text() + '</span></li>';
        }
      }).toArray().join('');
      if ($this.find('.first').length) {
        var $first = $this.find('.first');
        code = '<li><a href="' + $first.attr('href') + '">' + $first.text() + '</a></li>' + code;
      }
      if ($this.find('.last').length) {
        var $last = $this.find('.last');
        code += '<li><a href="' + $last.attr('href') + '">' + $last.text() + '</a></li>';
      }
      if ($this.find('.nxt').length) {
        var $nxt = $this.find('.nxt');
        code += '<li><a href="' + $nxt.attr('href') + '">&raquo;</a></li>';
      }
      if ($this.find('.prev').length) {
        var $prev = $this.find('.prev');
        code = '<li><a href="' + $prev.attr('href') + '">&laquo;</a></li>' + code;
      }
      code = "<ul>" + code + "</ul>"
      $(this).html(code);
    })
  });
})(jQuery);

