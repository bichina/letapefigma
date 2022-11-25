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

//팝업
// $( document ).ready( function() {
//   $( '.classBtn1' ).click( function() {
//     $( '.classBoxRight' ).slideDown();
//   } );
// } );

// $( document ).ready( function() {
//   $( '.popupClose' ).click( function() {
//     $( '.classBoxRight' ).slideUp();
//   } );
// } );

//강의소개 상단 이미지 슬라이드
$("whoClassSlider").slick({
  variableWidth: true, //컨텐츠 너비가 달라짐
  slide: "li",
  centerMode: false,
  slidesToShow: 2,
  dots: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  edgeFriction: 0.05,
  infinite: true,
  arrows: false,
  // dotsClass : "slick-dots",
  dotsClass: false,
});

//오시는 길

$(function () {
  $("#tab1").click(function () {
    $("#content3").show().siblings("#content4").hide();
  });
});

$(function () {
  $("#tab2").click(function () {
    $("#content4").show().siblings("#content3").hide();
  });
});
