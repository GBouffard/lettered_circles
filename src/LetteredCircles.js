$( document ).ready(function() {
  $('#LC_canvas').attr('height', $('#LC_canvas').css('height'));
  $('#LC_canvas').attr('width', $('#LC_canvas').css('width'));
    
  $("#LC_canvas").click(function(page){
    var x = page.pageX - this.offsetLeft;
    var y = page.pageY - this.offsetTop;
    $('#coordinates').html(x +', '+ y);

    var ctx= this.getContext("2d");
    ctx.beginPath();
    ctx.arc(x, y, 25,0, 2*Math.PI);
    ctx.fillStyle = "#FF0000";
    ctx.fill();

    var fullText = $('#myText').val();
    var letter = fullText.charAt(0);
    ctx.fillStyle = "#000000";
    ctx.font="30px Verdana";
    ctx.fillText(letter, x-10 ,y+10);    
    ctx.stroke();
  });
});
