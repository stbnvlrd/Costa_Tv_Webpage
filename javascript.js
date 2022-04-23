$(document).ready(function() {
  var ix = 1;
  $('#btn').click(function() {
    $('#dv1').css(
    {
      'background-position': '0 '+ (100 * (ix % 2)) +'%'
    });
    ix++;
  });
});