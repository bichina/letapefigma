// // 팝업 열기
// $(document).on("click", ".btn-open", function (e) {
//   var target = $(this).attr("href");
//   $(target).addClass("show");
// });

// // 외부영역 클릭 시 팝업 닫기
// $(document).mouseup(function (e) {
//   var LayerPopup = $(".layer-popup");
//   if (LayerPopup.has(e.target).length === 0) {
//     LayerPopup.removeClass("show");
//   }
// });

$( document ).ready( function() {
  $( '.classBtn1' ).click( function() {
    $( '.classBoxRight' ).slideDown();
  } );
} );

$( document ).ready( function() {
  $( '.popupClose' ).click( function() {
    $( '.classBoxRight' ).slideUp();
  } );
} );

//오시는 길

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