$(function(){

  //1. 로고 변경하기
  setTimeout(function(){
    $('.logo_img').addClass('on')
  },3000)

  //2. sub메뉴가 내려오도록 설정
  $('.box_bg').hide()
  $('.list_dep2 > li').mouseover(function(){
    $(this).find('.box_bg').stop().slideDown(200)
    $('.list_dep2 > li').removeClass('active')
    $(this).addClass('active')
  })

  $('.list_dep2 > li').mouseout(function(){
    $(this).find('.box_bg').stop().slideUp(200)
    $('.list_dep2 > li').removeClass('active')
  })

  //3.오늘 이창을 열지 않음
  $('#btnTodayClose').click(function(){
    closeWin()
    $('#header').css({minHeight:80})
  })

  //4.배너광고 배경색과 텍스트 랜덤하게 넣기
  const colors = [
    '#192346', 
    '#000000', 
    '#ff0077', 
    '#0074cc', 
    '#777777'  
  ];

  // 5가지 텍스트 배열
  const texts = [
      '역시, 최초의 대한항공카드답게, 대한항공카드 Edition2',
    '빼어난 보안성. 그게 바로 Apple Pay.',
    'Check out our 인플루언서를 위한 카드, 인플카 현대카드 news!',
    'Explore our 코스트코 쇼핑할 땐 코스트코 리워드 현대카드 Edition2!',
    'Have a great 취향을 만나는 곳, 새로워진 M몰을 만나 보세요!'
];
 // 랜덤 색상 선택 함수
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
// 랜덤 텍스트 선택 함수
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

// 배경색과 텍스트를 랜덤으로 변경
$('.box_gnb_banner').css('background-color', getRandomColor())
$('.box_info p').text(getRandomText());

//5.스크롤시 메뉴가 작아지는 효과
$(window).scroll(function(){
  let win_top = $(window).scrollTop()
  // console.log(win_top)
  if(win_top<40){ // 스크롤탑이 40 이하라면
    $('.header').removeClass('small')    //small클래스 제거
    $('.header h1 .logo_img').addClass('on')//로고는 on클래스 추가
  }else{ //스크롤탑이 40 이상이라면
    $('.header').addClass('small')  //small클래스 추가
    $('.header h1 .logo_img').removeClass('on') //로고는 on클래스 제거
  }
})
  //6.메인 슬라이드(장면전환)

  //다음버튼을 클릭했을때
  let main_n = 0
  $('.visualBanner .next_btn').click(function(){
    main_n++
    if(main_n == 8){
      $('.visualBanner .swiper_wrapper').css({left:0})
      main_n =1
    }
    $('.visualBanner .swiper_slide').css({opacity:0}).eq(main_n).css({opacity:1})
    $('.visualBanner .swiper_wrapper').stop().animate({left:-1194*main_n})

    // pignaiton on클래스
    if(main_n == 7){//마지막 이미지라면
      $('.visualBanner .pignation li').removeClass('on')
      $('.visualBanner .pignation li').eq(0).addClass('on')//첫번째 li에 on추가
    }else{
      $('.visualBanner .pignation li').removeClass('on')
      $('.visualBanner .pignation li').eq(main_n).addClass('on')
    }

    clearInterval(rolling)
    rolling = setInterval(main_v,3000)

  }) //$('.next_btn').click()

  //이전버튼 클릭했을때
  $('.visualBanner .prev_btn').click(function(){
    main_n--
    if(main_n == -1){
      $('.visualBanner .swiper_wrapper').css({left:-1194*7})
      main_n=6
    }
    $('.visualBanner .swiper_slide').css({opacity:0}).eq(main_n).css({opacity:1})
    $('.visualBanner .swiper_wrapper').stop().animate({left:-1194*main_n})

    $('.visualBanner .pignation li').removeClass('on')
    $('.visualBanner .pignation li').eq(main_n).addClass('on')

    clearInterval(rolling)
    rolling = setInterval(main_v,3000)
   
    })//$('.prev_btn').click()

     //pignaiton 클릭했을때
     $('.visualBanner .pignation li').click(function(){
      main_n = $(this).index()
      if($(this).hasClass('on')==false){ // li에 on클래스 없다면
        $('.visualBanner .swiper_slide').css({opacity:0}).eq(main_n).css({opacity:1})
        $('.visualBanner .swiper_wrapper').stop().animate({left:-1194*main_n})
      }
      $('.visualBanner .pignation li').removeClass('on')
      $(this).addClass('on')

      clearInterval(rolling)
      rolling = setInterval(main_v,3000)

  }) //$('.pignation li').click()

   //자동롤링
   let rolling = setInterval(main_v,3000)
   function main_v(){
    $('.visualBanner .next_btn').click()
   }

   //일시정지 버튼 클릭시
   $('.visualBanner .auto_btn').click(function(){
    if($(this).hasClass('play')== false){ //play클래스가 없다면(일시정지)
      clearInterval(rolling)//rolling 멈추고
      $(this).addClass('play')//play클래스 추가
    }else{ // play클래스가 있다면
      rolling = setInterval(main_v,3000)//자동실행
      $(this).removeClass('play')//play클래스 제거
    }
   }) //$('.auto_btn').click()


//7. 로그인 tab
$('.login_tab_content > div').hide().eq(0).show()
$('.box_login_tab li a').click(function(){
  let tab_n = $(this).parent().index() //0,1
  $('.login_tab_content > div').hide().eq(tab_n).show()
  $('.box_login_tab li').removeClass('active')
  $(this).parent().addClass('active')
})

//8.app_store 슬라이드

 let app_store_n = 0

 rolling2= setInterval(app_slider,3000)

 function app_slider(){
  app_store_n++
  if(app_store_n == 5){
    $('.app_store .swiper_wrapper').css({left:0})
    app_store_n = 1
  }
  $('.app_store .swiper_wrapper').stop().animate({left:-280*app_store_n})

  if(app_store_n == 4){ 
    $('.app_store .pignation li').removeClass('on')//클래스 제거
    $('.app_store .pignation li').eq(0).addClass('on')//첫번째 피그네이션에 on클래스 추가
  }else{
    $('.app_store .pignation li').removeClass('on') //클래스 제거
    $('.app_store .pignation li').eq(app_store_n).addClass('on')//해당 피그네이션에 on클래스 추가
  }

 } //function app_slider()

 $('.app_store .pignation li').click(function(){
   app_store_n = $(this).index()
   $('.app_store .swiper_wrapper').stop().animate({left:-280*app_store_n})

   $('.app_store .pignation li').removeClass('on') 
   $(this).addClass('on')

   clearInterval(rolling2)
   rolling2= setInterval(app_slider,3000)

 })// $('.app_store .pignation li').click()



$('.app_store .auto_btn').click(function(){
  if($(this).hasClass('play')== false){ //play클래스가 없다면
    clearInterval(rolling2)//롤링을 멈추고
    $(this).addClass('play')//play클래스 추가
  }else{ //play클래스가 있다면
    rolling2= setInterval(app_slider,3000)//롤링을 다시 시작하고
    $(this).removeClass('play')//play클래스 제거
  }
})//$('.app_store .auto_btn').click()


//9.스크롤시 right_content이동
$(window).scroll(function(){
  let scrollTop = $(window).scrollTop()
  console.log(scrollTop)
  if(scrollTop <= 520){ //scrollTop이 520 보다 작으면
     $('.right_content').animate({top:scrollTop},0.02) //right_content 스크롤된만큼 이동
  }else{ //scrollTop이 520 보다 크면
    $('.right_content').css({top:520}) //right_content 520에서 멈춤
  }
}) //$(window).scroll()

 
})