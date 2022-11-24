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

/*test*/
let pages = 0; //현재 인덱스 번호
let positionValue = 0; //images 위치값
const IMAGE_WIDTH = 250; //한번 이동 시 IMAGE_WIDTH만큼 이동한다.
//DOM
const backBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");

function next() {
  if (pages < 2) {
    backBtn.removeAttribute("disabled"); //뒤로 이동해 더이상 disabled가 아니여서 속성을 삭제한다.
    positionValue -= IMAGE_WIDTH; //IMAGE_WIDTH의 증감을 positionValue에 저장한다.
    images.style.transform = `translateX(${positionValue}px)`;
    //x축으로 positionValue만큼의 px을 이동한다.
    pages += 1; //다음 페이지로 이동해서 pages를 1증가 시킨다.
  }
  if (pages === 2) {
    //
    nextBtn.setAttribute("disabled", "true"); //마지막 장일 때 next버튼이 disabled된다.
  }
}

function back() {
  if (pages > 0) {
    nextBtn.removeAttribute("disabled");
    positionValue += IMAGE_WIDTH;
    images.style.transform = `translateX(${positionValue}px)`;
    pages -= 1; //이전 페이지로 이동해서 pages를 1감소 시킨다.
  }
  if (pages === 0) {
    backBtn.setAttribute("disabled", "true"); //마지막 장일 때 back버튼이 disabled된다.
  }
}

function init() {
  //초기 화면 상태
  backBtn.setAttribute("disabled", "true"); //속성이 disabled가 된다.
  backBtn.addEventListener("click", back); //클릭시 다음으로 이동한다.
  nextBtn.addEventListener("click", next); //클릭시 이전으로 이동한다.
}
init();
