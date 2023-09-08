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
 /*    $(window).scroll(function(){
        var win_top = $(window).scrollTop()
        if(win_top >= 40){
            $('.header').addClass('small')
            $('#header').css({minHeight:80})
        } else {
            $('.header').removeClass('small')
            $('#header').css({minHeight:130})
        }
       
    }) */

    /* 4. 오늘 이창을 열지 않음*/
    $('#btnTodayClose').click(function(){
        closeWin()
        $('#header').css({minHeight: 80})
        
    })
    /* 웹서버에 올려야 24시간 세션확인 가능 */
       
       

    /* 5. 메인 슬라이더(장면전환) */


     /* 자동롤링 */
    var main_n = 0 
    var rolling =setInterval(main_slider,3000)

   
    function main_slider(){
        $('.next_btn').click()
    }

    //이전다음 버튼을 클릭했을때
  
    $('.visualBanner .next_btn').click(function(){
        
        main_n++;
        if(main_n==8){ //n==$('.img_wrap li').length
            $('.visualBanner .swiper_wrapper').css('left', -1194 * 0) //마지막과 동일한 이미지

          
            main_n=1  //바로 다음 이미지(이동할 타켓)
             
        }
        $('.visualBanner .swiper_slide').css({opacity: 0}).eq(main_n).css({opacity: 1})
        $('.visualBanner .swiper_wrapper').stop().animate({left: -1194 * main_n})

       
        if(main_n==7){
            $('.visualBanner .pignation li').removeClass('on')
            $('.visualBanner .pignation li').eq(0).addClass('on') 
        }else{
            $('.visualBanner .pignation li').removeClass('on')
            $('.visualBanner .pignation li').eq(main_n).addClass('on')   
        }

        clearInterval(rolling)
        rolling = setInterval(main_slider,3000)
    })
    $('.visualBanner .prev_btn').click(function(){

        main_n--;
        if(main_n == -1){
            $('.visualBanner .swiper_wrapper').css('left', -1194* 7)
            main_n = 6
        }
        $('.visualBanner .swiper_slide').css({opacity: 0}).eq(main_n).css({opacity: 1})
        $('.visualBanner .swiper_wrapper').stop().animate({left: -1194* main_n})
        $('.visualBanner .pignation li').removeClass('on')
        $('.visualBanner .pignation li').eq(main_n).addClass('on') 

        clearInterval(rolling)
        rolling = setInterval(main_slider,3000)
        
    })

     // pignation 클릭시
     $('.visualBanner .pignation li').click(function(){
        main_n = $(this).index()
        if( $(this).hasClass('on') == false){//on클래스가 없으면 모두 fadeOut처리
            $('.visualBanner .swiper_slide').css({opacity: 0}).eq(main_n).css({opacity: 1})
            $('.visualBanner .swiper_wrapper').stop().animate({left: -1194 * main_n})
           
        }
        
        $('.visualBanner .pignation li').removeClass('on')
        $(this).addClass('on')
        
        clearInterval(rolling)
        rolling = setInterval(main_slider,3000)
    })

    //자동롤링 후
   
    // 일시정지 버튼 클릭시
    $('.visualBanner .auto_btn').click(function(){
        if($(this).hasClass('play')==false){ //play가 없으면(일시정지버튼이 있으면)
            clearInterval(rolling)
            $(this).addClass('play') //palay버튼
        }else{ //play 이면
            rolling =setInterval(main_slider,3000)
            $(this).removeClass('play') //중지버튼
        }
    })


/* 6. 로그인 tab */
    $('.login_tab_content > div').hide().eq(0).show()
    $('.box_login_tab li a').click(function(){
        var tab_n = $(this).parent().index()
        $('.login_tab_content > div').hide().eq(tab_n).show()

        $('.box_login_tab li').removeClass('active')
        $(this).parent().addClass('active')

    })

/* 7. app_store  슬라이더 */
    
var app_store_n =0


function app_slider(){
    app_store_n++
    if(app_store_n == 5){
        $('.app_store .swiper_wrapper').css({left:0})
        app_store_n = 1
       
    }
    $('.app_store .swiper_wrapper').stop().animate({left:-280*app_store_n})

    if(app_store_n== 4){
        $('.app_store .pignation li').removeClass('on')
        $('.app_store .pignation li').eq(0).addClass('on')
    } else{
        $('.app_store .pignation li').removeClass('on')
        $('.app_store .pignation li').eq(app_store_n).addClass('on')
    }
  

}
rolling2 = setInterval(app_slider,3000)

// pignation 클릭시
$('.app_store .pignation li').click(function(){
   app_store_n  = $(this).index() 
    if( $(this).hasClass('on') == false){//on클래스가 없으면 모두 fadeOut처리
        // $('.app_store >ul').css({opacity: 0}).eq(app_store_n).css({opacity: 1})
        $('.app_store .swiper_wrapper').stop().animate({left: -280 * app_store_n})
       
    }
    
    $('.app_store .pignation li').removeClass('on')
    $(this).addClass('on')
    
    clearInterval(rolling2)
    rolling2 = setInterval(app_slider,3000)
})

// 일시정지 버튼 클릭시
$('.app_store .auto_btn').click(function(){
    if($(this).hasClass('play')==false){ //play가 없으면(일시정지버튼이 있으면)
        clearInterval(rolling2)
        $(this).addClass('play') //palay버튼
    }else{ //play 이면
        rolling2 = setInterval(app_slider,3000)
        $(this).removeClass('play') //중지버튼
    }
})



 /*8. .main_login 이동 */

 $(window).scroll(function(){
    var scrollTop = $(window).scrollTop()
    if($(window).scrollTop() <= 450){ //450이상 이동했을때 스크롤된값만큼 이동 0.02초속도로
        // console.log(scrollTop)
       $('.right_content').animate({top:scrollTop},20)
    } else{ 
        //300 미만이면 컬러를 원래대로 변경
        $('.right_content').css({top:450})
    }
})

// a를 클릭했을때 해당하는 위치로 이동하여라.
//- scrollTop()/scrollLeft(): 브라우저의 수직/(수평) 스크롤 이동 높잇값(너비값)을 반환한다.
// - offset().left/offset().top : 선택한 요소가 문서에서 수평/수직으로 얼마나 떨어져 있는지에 대한 값을 반환

})