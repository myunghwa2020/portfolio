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
    $(window).scroll(function(){
        var win_top = $(window).scrollTop()

        display = $('#topBannerWrap').css('display')
        
        if(win_top <= 40 ){
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
       
       
     
})