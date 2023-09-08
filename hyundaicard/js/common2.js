$(function(){

    /* 1.링크차단 */
    $("a").click(function() {
        // if ($(this).attr("href") == "#") {
            return false;
        //  }
      });
      var display = $('#topBannerWrap').css('display')
      if(display == 'none'){
          $('#header').css({minHeight:80})  
      }else{
          $('#header').css({minHeight:130})
      } 
            

    // 2.sub 메뉴가 내려오도록 설정
     $('.box_bg').hide()
     $('.list_dep2 > li ').mouseover(function(){
         $(this).find('.box_bg').stop().slideDown(200)  
         $('.list_dep2 > li').removeClass('active')
         $(this).addClass('active')            
     })
     $('.list_dep2 > li ').mouseout(function(){
         $(this).find('.box_bg').stop().slideUp(200);
         $(this).removeClass('active')
         
     })

     
    // 3.스크롤시 메뉴가 작아지는 효과
   // 3.스크롤시 메뉴가 작아지는 효과
   $(window).scroll(function(){
    var win_top = $(window).scrollTop()

    display = $('#topBannerWrap').css('display')
    
    if(win_top <= 40 ){
        /* $('.header').addClass('small')
        $('#header').css({minHeight:80}) */
        if(display == 'none'){
            $('.header').removeClass('small')
            $('#header').css({minHeight:80})  
          
        }else if (display == 'block'){
            $('.header').removeClass('small')
            $('#header').css({minHeight:130})
            
        }
       
    } else {
        if(display == 'none'){
            $('.header').addClass('small')
            $('#header').css({minHeight:50})  
          
        }else if (display == 'block'){
            $('.header').addClass('small')
            $('#header').css({minHeight:100})
            
        }
        
       
    }
   
})

    /* 4. 오늘 이창을 열지 않음*/
    $('#btnTodayClose').click(function(){
        closeWin()
        $('#header').css({minHeight: 80})
        
    })
    /* 웹서버에 올려야 24시간 세션확인 가능 */
       
       

    /* 메인 슬라이더(장면전환) */


     /* 자동롤링 */
    var main_n = 0 
    var rolling =setInterval(main_v,3000)

   
    function main_v(){
        $('.next_btn').click()
    }

    //이전다음 버튼을 클릭했을때
  
    $('.next_btn').click(function(){
        
        main_n++;
        if(main_n==8){ //n==$('.img_wrap li').length
            $('.swiper_wrapper').css('left', -1194 * 0) //마지막과 동일한 이미지

          
            main_n=1  //바로 다음 이미지(이동할 타켓)
             
        }
        $('.swiper_slide').css({opacity: 0}).eq(main_n).css({opacity: 1})
        $('.swiper_wrapper').stop().animate({left: -1194 * main_n})

       
        if(main_n==7){
            $('.pignation li').removeClass('on')
            $('.pignation li').eq(0).addClass('on') 
        }else{
            $('.pignation li').removeClass('on')
            $('.pignation li').eq(main_n).addClass('on')   
        }

        clearInterval(rolling)
        rolling = setInterval(main_v,3000)
    })
    $('.prev_btn').click(function(){

        main_n--;
        if(main_n == -1){
            $('.swiper_wrapper').css('left', -1194* 7)
            main_n = 6
        }
        $('.swiper_slide').css({opacity: 0}).eq(main_n).css({opacity: 1})
        $('.swiper_wrapper').stop().animate({left: -1194* main_n})

        clearInterval(rolling)
        rolling = setInterval(main_v,3000)
        
    })

     // pignation 클릭시
     $('.pignation li').click(function(){
        main_n = $(this).index()
        if( $(this).hasClass('on') == false){//on클래스가 없으면 모두 fadeOut처리
            $('.swiper_slide').css({opacity: 0}).eq(main_n).css({opacity: 1})
            $('.swiper_wrapper').stop().animate({left: -1194 * main_n})
           
        }
        
        $('.pignation li').removeClass('on')
        $(this).addClass('on')
        
        clearInterval(rolling)
        rolling = setInterval(main_v,3000)
    })

    //자동롤링 후
   
    // 일시정지 버튼 클릭시
    $('.auto_btn').click(function(){
        if($(this).hasClass('play')==false){ //play가 없으면(일시정지버튼이 있으면)
            clearInterval(rolling)
            $(this).addClass('play') //palay버튼
        }else{ //play 이면
            rolling =setInterval(main_v,3000)
            $(this).removeClass('play') //중지버튼
        }
    })






})