var $ball = $('.ball');
var $input = $('#Colour');

$('form').on('change', function () {
  var ballColor = $input.val();

  $ball.css('background-color', ballColor);

});
