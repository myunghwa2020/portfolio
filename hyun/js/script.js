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



})