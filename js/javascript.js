//大頭貼紅點
$(function(){
    $('.sticker').click(function(){
        $(this).toggleClass('redpoint');
    })
})
//上選單
$(function(){
    $('.toplist li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
})
//登入/登出
$(function(){
    $('.loginbtn').click(function(){
        $('.unlogin').removeClass('display');
        $('.loginnow').addClass('display');
        $('.account').addClass('turn');
    })
    $('.logoutbtn').click(function(){
        $('.unlogin').addClass('display');
        $('.loginnow').removeClass('display');
        $('.account').removeClass('turn');
    })
})
//圖片輪播
$(document).on('ready', function () {
	$(".single-item").slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
        arrows: true,
        pauseOnHover: false,
		pauseOnFocus: false,
	})
})
//gotop
$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 1){
                $(".gotop").fadeIn('300');
        } else{
                $(".gotop").fadeOut('300');
        };
    })
    $(".gotop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.animate({
                scrollTop:0
        },300);
    })
})
//軟體下載
$(function(){
    $('.downloadbtn').hover(function(){
        $('.QR').toggleClass('display');
    })
})
//主選單動畫
$(function(){
    $('.imgbox a').hover(function(){
        $(this).closest('div').toggleClass('hover');
    })
    $('.board span').hover(function(){
        $(this).closest('.imgbox').toggleClass('hover');
    })
})