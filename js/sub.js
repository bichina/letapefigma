// 오시는 길

$(function() {
  $('#tab1').click(function() {
    $('#content3').show().siblings('#content4').hide();
  })
});
$(function() {
  $('#tab2').click(function() {
    $('#content4').show().siblings('#content3').hide();
  })
});
