<style type="text/css"><!--
#dv1 {
  background-image: url('image.jpg');
  background-repeat: no-repeat;
  background-position: center top;
  width:200px;
  height:400px;
 }
--></style>

<script type="text/javascript"><!--
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
--></script>