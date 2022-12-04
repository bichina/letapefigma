// 오시는 길

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

var menu = ["Slide 1", "Slide 2", "Slide 3"];
var mySwiper = new Swiper(".swiper-container", {
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + "</span>";
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



