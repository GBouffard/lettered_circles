$( document ).ready(function() {
  $('#LCcanvas').attr('height', $('#LCcanvas').css('height'));
  $('#LCcanvas').attr('width', $('#LCcanvas').css('width'));
    
  $("#LCcanvas").click(function(page){
    var x = page.pageX - this.offsetLeft;
    var y = page.pageY - this.offsetTop;
    $('#coordinates').html(x +', '+ y);
  });
});
