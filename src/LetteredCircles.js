$( document ).ready(function() {
  $('#LCcanvas').attr('height', $('#LCcanvas').css('height'));
  $('#LCcanvas').attr('width', $('#LCcanvas').css('width'));
    
  $("#LCcanvas").click(function(page){
    var x = page.pageX - this.offsetLeft;
    var y = page.pageY - this.offsetTop;
    $('#coordinates').html(x +', '+ y);

    var ctx= this.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 25,0, 2*Math.PI);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.stroke();
  });
});
