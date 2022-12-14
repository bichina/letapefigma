$(function(){
    $('#slider-div').slick({
      slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
      infinite : true, 	//무한 반복 옵션	 
      slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
      slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
      speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
      arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
      dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
      autoplay : true,			// 자동 스크롤 사용 여부
      autoplaySpeed : 3000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
      pauseOnHover : true,		// 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
      vertical : false,		// 세로 방향 슬라이드 옵션
      //prevArrow : "<button type='button' class='slick-prev'>Previous</button>",		// 이전 화살표 모양 설정
      //nextArrow : "<button type='button' class='slick-next'>Next</button>",		// 다음 화살표 모양 설정
      dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
      draggable : true, 	//드래그 가능 여부 
      
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
})



    $('.slick-carousel').slick({
      slide: 'div',
      centerMode: false,
      slidesToShow: 2,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      edgeFriction: 0.05,
      infinite: true,
      arrows : false,
      dotsClass : "slick-dots",
      
    
    });


    $('.autoplay').slick({
      variableWidth: true, //컨텐츠 너비가 달라짐
      slide: 'div',
      centerMode: false,
      slidesToShow: 2,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      edgeFriction: 0.05,
      infinite: true,
      arrows : false,
      dotsClass : "slick-dots",
    });
      

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

    
    

    $(document).ready(function(){
      $("#layerPopup").hide();
      $(".item2 > a").click(function(){
        $(".item2 > a").blur();
        $("#layerPopup").show();
        $("#layerPopup a").focus();
        return false;
      });
      $("#layerPopup .close").keydown(function(e){
        if(e.shiftKey && e.keyCode == 9){ // Shift + Tab 키를 의미합니다.
          $(".item2 > .close").focus();
          $("#layerPopup").hide();
          return false;
        }
      });
      
      $("#layerPopup .close").click(function(){
        $(".item2 > a").focus();
        $("#layerPopup").hide();
      });
    });


    $(function(){
      $(".classCourseReview").slick({
        variableWidth: true, //컨텐츠 너비가 달라짐
        slide: "div", //슬라이드 되어야 할 태그 ex) div, li
        infinite: true, //무한 반복 옵션
        slidesToShow: 2, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        arrows: false, // 옆으로 이동하는 화살표 표시 여부
        dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: false, // 자동 스크롤 사용 여부
        vertical: false, // 세로 방향 슬라이드 옵션
        dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
        draggable: true, //드래그 가능 여부
        centerMode:false,
        autoplay: false,
      });
    })


    //팝업 열기
const body = document.querySelector('body');
let scrollPosition = 0;

function openModal(modalname) {
  $("." + modalname).fadeIn(300);
  $(".shadow").show(); // 배경 어둡게
}

//팝업 닫기
function closeModal(modalname) {
  $("." + modalname).fadeOut(300);
  $('.shadow').hide(); // 배경 어둡게 삭제
}