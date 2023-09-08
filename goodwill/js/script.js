$(function(){
    var swiper = new Swiper(".mainslider", {
        cssMode: true,
        autoplay:true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });
})
