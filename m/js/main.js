$(function () {
  $("#slider-div").slick({
    slide: "div", //슬라이드 되어야 할 태그 ex) div, li
    infinite: true, //무한 반복 옵션
    slidesToShow: 1, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    speed: 100, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    arrows: false, // 옆으로 이동하는 화살표 표시 여부
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    autoplay: true, // 자동 스크롤 사용 여부
    autoplaySpeed: 3000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
    vertical: false, // 세로 방향 슬라이드 옵션
    //prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
    //nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
    dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
    draggable: true, //드래그 가능 여부

    //   responsive: [ // 반응형 웹 구현 옵션
    //     {
    //       breakpoint: 960, //화면 사이즈 960px
    //       settings: {
    //         //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
    //         slidesToShow:3
    //       }
    //     },
    //     {
    //       breakpoint: 768, //화면 사이즈 768px
    //       settings: {
    //         //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
    //         slidesToShow:2
    //       }
    //     }
    //   ]
  });
});

$(".slick-carousel").slick({
  slide: "div",
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
  dotsClass: "slick-dots",
});

$(".slick2").slick({
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

$(".autoplay").slick({
  variableWidth: true, //컨텐츠 너비가 달라짐
  slide: "div",
  centerMode: false,
  slidesToShow: 2,
  dots: false,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  edgeFriction: 0.05,
  infinite: true,
  arrows: false,
  dotsClass: "slick-dots",
  margin: "10px",
});

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




let curPos = 0; // 현재 보고 있는 이미지의 인덱스 번호!
let position = 0; // 현재 .images 의 위치값!
const IMAGE_WIDTH = 640; // 한번 움직일 때 이동해야 할 거리!

// 요소 선택
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");

function prev() {
  if (curPos > 0) {
    nextBtn.removeAttribute("disabled"); /* disabled 속성 제거*/
    position += IMAGE_WIDTH; /* position 값 증가 */

    images.style.transform = `translateX(${position}px)`; /* images 스타일 transform, x축 변경*/
    curPos -= 1; /* curPos 값 감소*/
  }
  if (curPos == 0) {
    /* 이미지 index값 0 되면 prev 못하게 */
    prevBtn.setAttribute("disabled", "true");
  }
}
function next() {
  if (curPos < 3) {
    prevBtn.removeAttribute("disabled");
    position -= IMAGE_WIDTH;
    /*
            트랜스폼(변형)의 네가지 속성값(함수)
            - scale() : 확대 또는 축소
            - translate() : 위치 이동
            - rotate() : 회전시키기
            - skew() : 요소 비틀기
        */
    images.style.transform = `translateX(${position}px)`;
    curPos += 1;
  }
  if (curPos == 3) {
    // 뒤로 못 가게 하기
    nextBtn.setAttribute("disabled", "true"); // 못 누르는 버튼이 됨
  }
}
// 초기 랜더링 시 최초 호출 함수의 관습적 이름
function init() {
  // 앞으로 가기는 처음부터 못누르게!
  prevBtn.setAttribute("disabled", "true");
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
}

init();
