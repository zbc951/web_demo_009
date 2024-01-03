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

//登入後 彈窗
$(function(){
    $("header .top .login form .buttonGroup a .loginBtn").click(function(){
        $(".filter").addClass("display");
    })
})

//關閉彈窗
$(function(){
    $(".close").click(function(){
        $(".filter").addClass("display");
    })
})

//header 平台點數
$(function(){
    $("header .top .afterLogin .center ul .wallet .total").click(function(){
        $(this)
        .children(".transferInfo")
        .toggleClass("display");
    })
})

//遊戲內頁
$(function(){
    $("main .gamePage_Wrap .center .gameInnerPage_Wrap .nav ul li").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//gameWrap小遊戲格hover切換左大圖
$(function(){
    $(".gamePage_Wrap ul.btnBox li").hover(function(){
        var n = $(this).index();

        $(".gamePage_Wrap .sportPage .mainImg")
        .attr("src","../images/partner/sport/sportBG_"+ (n + 1) +".png");
        $(".gamePage_Wrap .livePage .mainImg")
        .attr("src","../images/partner/live/liveBG_"+ (n + 1) +".png");
        $(".gamePage_Wrap .lotteryPage .mainImg")
        .attr("src","../images/partner/lottery/lotteryBG_"+ (n + 1) +".png");
        $(".gamePage_Wrap .slotPage .mainImg")
        .attr("src","../images/partner/slot/slotBG_"+ (n + 1) +".png");
        $(".gamePage_Wrap .fishPage .mainImg")
        .attr("src","../images/partner/fish/fishBG_"+ (n + 1) +".png");
        $(".gamePage_Wrap .boardPage .mainImg")
        .attr("src","../images/partner/board/boardBG_"+ (n + 1) +".png");
    })
})

//遊戲內頁+我的最愛
$(document).on("click",".gameInnerPage_Wrap .gameBox ul li ul li .textBox i", function(){
    $(this)
    .toggleClass("fa-regular fa-solid")
    .closest("li")
    .toggleClass("favoriteGame");
})

//innerPage 

//提款
$(function(){
    $(".innerPage .midSide.deposit .midTop .objectList .payType li").click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".midSide.deposit .midBottom .content:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})


$(function(){
    var clickTimes = 0;

    //銀行卡
    $(".innerPage .midSide.bankCard .objectList i").click(function(){
        var widthAmount = $(this).siblings("ul").find("li").length;
        var widthOuter = $(this).siblings("ul").find("ol").width() / widthAmount * -1;

        if($(this).hasClass("nextBtn"))
        {
            clickTimes++;

            $(".innerPage .midSide .objectList ul ol")
            .css("transform", "translateX(" + clickTimes * widthOuter + "px)");

            $(".innerPage .midSide .objectList i.prevBtn")
            .addClass("active");

            if(clickTimes == widthAmount -1) {
                $(".innerPage .midSide .objectList i.nextBtn")
                .removeClass("active");
            }
        }
        else if($(this).hasClass("prevBtn"))
        {
            clickTimes--;

            $(".innerPage .midSide .objectList ul ol")
            .css("transform", "translateX(" + clickTimes * widthOuter + "px)");

            $(".innerPage .midSide .objectList i.nextBtn")
            .addClass("active");

            if(clickTimes == 0) {
                $(".innerPage .midSide .objectList i.prevBtn")
                .removeClass("active");
            }
        }
    })

    //vip level
    $(".innerPage .midSide .vipCardList i").click(function(){
        var widthAmount = $(this).siblings("ul").find("li").length;
        var widthOuter = $(this).siblings("ul").find("ol").width() / widthAmount * -1;

        console.log(widthOuter);

        if($(this).hasClass("nextBtn"))
        {
            clickTimes++;

            $(".innerPage .midSide .vipCardList ul ol")
            .css("transform", "translateX(" + clickTimes * widthOuter + "px)");

            $(".innerPage .midSide .vipCardList i.prevBtn")
            .addClass("active");

            if(clickTimes == widthAmount -1) {
                $(".innerPage .midSide .vipCardList i.nextBtn")
                .removeClass("active");
            }
        }
        else if($(this).hasClass("prevBtn"))
        {
            clickTimes--;

            $(".innerPage .midSide .vipCardList ul ol")
            .css("transform", "translateX(" + clickTimes * widthOuter + "px)");

            $(".innerPage .midSide .vipCardList i.nextBtn")
            .addClass("active");

            if(clickTimes == 0) {
                $(".innerPage .midSide .vipCardList i.prevBtn")
                .removeClass("active");
            }
        }
    })
})

//midPageList 換頁
$(function(){
    $(".innerPage .center .midSide ul.midPageList li").click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        $(".midSide .midBottom .content:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})

//vip 更多
$(function(){
    $(".innerPage .center .midSide.vip .midBottom .content button.more, .innerPage .center .midSide.vip .midBottom .content i.backBtn").click(function(){
        
        $(this)
        .closest(".content")
        .removeClass("display");

        $(this)
        .closest(".content")
        .siblings()
        .addClass("display");
    })
})

//遊戲平台展開收起
$(function(){
    $(document).on("click",".midSide .midTop .platformWallet .stateWrap", function(){
        $(this)
        .addClass("active")
        .closest(".platformWallet")
        .find(".platformOuter")
        .addClass("active");

        $(this)
        .find("p")
        .text("收起");

        $(this)
        .find("i")
        .attr("class","fa-solid fa-angles-up");
    })
    $(document).on("click",".midSide .midTop .platformWallet .stateWrap.active", function(){
        $(this)
        .removeClass("active")
        .closest(".platformWallet")
        .find(".platformOuter")
        .removeClass("active");

        $(this)
        .find("p")
        .text("展開");

        $(this)
        .find("i")
        .attr("class","fa-solid fa-angles-down");
    })
})

//搜尋列選擇按鈕
$(function(){
    $(".midSide form.searchBlock .selectBtn_Wrap button").click(function(){

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//deposit
$(function(){
    $(".innerPage .midSide.deposit .midBottom .content:eq(0) form .submitBtn").click(function(){
        $(this)
        .closest(".content")
        .removeClass("display");

        $(".innerPage .midSide.deposit .midBottom .deposit_finished")
        .addClass("display");
    })
})

//betRecord 表單展開收起
$(function(){
    $(document).on("click",".midSide.betRecord .midBottom .content .recordList li .detailWrap i", function(){
        $(this)
        .closest("li")
        .addClass("active");
    })
    $(document).on("click",".midSide.betRecord .midBottom .content .recordList li.active .detailWrap i", function(){
        $(this)
        .closest("li")
        .removeClass("active");

        $(this)
        .attr("class","fa-solid fa-chevron-up");
    })
})

//mail 站內信
$(function(){
    //通知&公告 切換類別
    $(".innerPage .center .midSide.mailWrap .midTop .objectList.mailType button").click(function(){
        var n = $(this).index();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(".midPageList.mailList ul:eq(" + n + ")")
        .addClass("active")
        .siblings()
        .removeClass("active");

        if( n == 1 ) {
            $(".innerPage .center .midSide.mailWrap .midBottom .content:eq(2)")
            .addClass("display")
            .siblings()
            .removeClass("display");
        }
    })

    //midList 切換類別
    $(".innerPage .center .midSide.mailWrap .midPageList.mailList ul li").click(function(){
        var n = $(this).index();
        var m = $(this).closest("ul").index();

        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        if( m == 1 && n == 0) {
            $(".innerPage .center .midSide.mailWrap .midBottom .content:eq(2)")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else if(m == 1 && n == 1) {
            $(".innerPage .center .midSide.mailWrap .midBottom .content:eq(3)")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else if(m == 1 && n == 2) {
            $(".innerPage .center .midSide.mailWrap .midBottom .content:eq(4)")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else {
            $(".innerPage .center .midSide.mailWrap .midBottom .content:eq(" + n + ")")
            .addClass("display")
            .siblings()
            .removeClass("display");
        }

    })

    //全部已讀
    $(".innerPage .center .midSide.mailWrap .content .outerMode .functionWrap .block button.readAll").click(function(){
        $(this)
        .closest(".outerMode")
        .find("ul.allMail li")
        .addClass("seen");
    })

    //編輯
    $(".innerPage .center .midSide.mailWrap .content .outerMode .functionWrap .block button.editBtn").click(function(){
        $(this)
        .closest(".outerMode")
        .addClass("editState");
    })

    //完成(結束編輯模式)
    $(".innerPage .center .midSide.mailWrap .content .outerMode .functionWrap button.finished").click(function(){
        $(this)
        .closest(".outerMode")
        .removeClass("editState");
    })

    
    //全部選取
    $(".innerPage .center .midSide.mailWrap .functionWrap .block label.select input").click(function(){
        $(this)
        .closest(".outerMode")
        .find("ul.allMail li")
        .addClass("chosen")
        .find("input")
        .prop('checked', true);
    })

    //選取
    $(".innerPage .center .midSide.mailWrap .content .outerMode .allMail li .select input.all").change(function(){
        $(this)
        .closest("li")
        .toggleClass("chosen");
    })

    //選取已讀
    $(".innerPage .center .midSide.mailWrap .content .outerMode .functionWrap .block button.read").click(function(){
        $(this)
        .closest(".outerMode.editState").find(".chosen")
        .addClass("seen");
    })

    //選取刪除
    $(".innerPage .center .midSide.mailWrap .content .outerMode .functionWrap .block button.delete").click(function(){
        $(this)
        .closest(".outerMode.editState").find(".chosen")
        .remove();
    })

    //查看該訊息詳情 (點擊進入innerMode)
    $(".innerPage .center .midSide.mailWrap .content .outerMode .allMail li .text, .date ").click(function(){
        $(this).closest(".outerMode")
        .removeClass("display")
        .siblings()
        .addClass("display");

        $(this).closest(".midSide.mailWrap")
        .find(".midTop, .midPageList.mailList")
        .css("display", "none");
    })

    $(".innerPage .center .midSide.mailWrap .content .innerMode .titleM i").click(function(){
        $(this)
        .closest(".innerMode")
        .removeClass("display")
        .siblings()
        .addClass("display");

        $(this).closest(".midSide.mailWrap")
        .find(".midTop, .midPageList.mailList")
        .css("display", "block");
    })
})  

//優惠 
$(function(){
    $("main .eventWrap .eventBody .sideNav ul li").click(function(){
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");
    })
})

//下拉選單
$(function(){
    $("header .navGroup ul .sport").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .sport").addClass("display");
        $("header .downList .sport").siblings().removeClass("display");
    })
    $("header .navGroup ul .live").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .live").addClass("display");
        $("header .downList .live").siblings().removeClass("display");
    })
    $("header .navGroup ul .slot").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .slot").addClass("display");
        $("header .downList .slot").siblings().removeClass("display");
    })
    $("header .navGroup ul .ticket").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .ticket").addClass("display");
        $("header .downList .ticket").siblings().removeClass("display");
    })
    $("header .navGroup ul .fish").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .fish").addClass("display");
        $("header .downList .fish").siblings().removeClass("display");
    })
    $("header .navGroup ul .board").hover(function(){
        $("header .downList").toggleClass("display");
        $("header .downList .board").addClass("display");
        $("header .downList .board").siblings().removeClass("display");
    })
    $("header .downList").hover(function(){
        $(this).toggleClass("display");
    })
})


//幫助中心
$(function(){
    $("main .helpWrap .helpBody .sideNav ul li.theme .topic").click(function(){
        $(this)
        .closest("li")
        .addClass("active")
        .siblings()
        .removeClass("active");

        $(this)
        .next("ul") 
        .addClass("display");
    })

    $("main .helpWrap .helpBody .sideNav ul li.theme ul.page li").click(function(){
       var n = $(this).closest("li.theme").index();
       var m = $(this).index();
       
        $(this)
        .addClass("active")
        .siblings()
        .removeClass("active");

        if( n == 0 ){
            $("main .helpWrap .helpBody .container .newHelp:eq(" + m + ")")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else if( n == 1 ) {
            $("main .helpWrap .helpBody .container .question:eq(" + m + ")")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else if( n == 2 ) {
            $("main .helpWrap .helpBody .container .aboutUs:eq(" + m + ")")
            .addClass("display")
            .siblings()
            .removeClass("display");
        } else if( n == 3 ) {
            $("main .helpWrap .helpBody .container .app:eq(" + m + ")")
            .addClass("display")
            .siblings()
            .removeClass("display");
        }
    })
})

//彈窗
$(function(){

    //忘記密碼
    $(".forget").click(function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.fgPW")
        .addClass("display");
    })
    
    //請先登入
    $("header .navGroup, header .downList, .home, footer").click(function(){
        if($(this).closest("body").hasClass("unlogin"))
        {
            $(".filter, .jumpWindow.plsLogin")
            .addClass("display")
            .siblings().removeClass("display");
        }
    })
    
    //關閉視窗
    $(".jumpWindow i.closeWindow, .jumpWindow button.closeWindow").click(function(){
        $(".filter")
       .removeClass("display");
    })

    //快速轉帳
    $("header .downList ul ol.sport li a, header .downList ul ol.live li a, header .downList ul ol.lottery li a").click(function(){
        var n = $(this).find("p").text();
        
        $(".jumpWindow")
        .addClass("display");

        $(".filter, .jumpWindow.quickTransfer")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".jumpWindow.quickTransfer .content form label:nth-of-type(1)")
        .find("p.platformName").text(n);
    })
    $(".gamePage_Wrap .containerWrap.sportPage ul.btnBox li, .gamePage_Wrap .containerWrap.livePage ul.btnBox li, .gamePage_Wrap .containerWrap.lotteryPage ul.btnBox li").click(function(){
        var n = $(this).find("p").text();
        
        $(".jumpWindow")
        .addClass("display");

        $(".filter, .jumpWindow.quickTransfer")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".jumpWindow.quickTransfer .content form label:nth-of-type(1)")
        .find("p.platformName").text(n);
    })
    $(".gamePage_Wrap .center .gameInnerPage_Wrap .gameBox li ul li .btnBox button.enter").click(function(){
        var n = $(this).closest("li").find(".textBox p").text();
        
        $(".jumpWindow")
        .addClass("display");

        $(".filter, .jumpWindow.quickTransfer")
        .addClass("display")
        .siblings()
        .removeClass("display");

        $(".jumpWindow.quickTransfer .content form label:nth-of-type(1)")
        .find("p.platformName").text(n);
    })
    $(".mainWrap .typeList .gameBlock").click(function(){
        var n = $(this).find("p").text();

        if($(this).closest("body").find("header .top .center ul").hasClass("loginBox")) {
            
            $(".filter, .jumpWindow.quickTransfer")
            .addClass("display")
            .siblings()
            .removeClass("display");
    
            $(".jumpWindow.quickTransfer .content form label:nth-of-type(1)")
            .find("p.platformName").text(n);
        }
    })

    //更換聯電
    $(".midSide.memberCenter .midBottom button.callChangeNum").click(function(){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.changePhone")
        .addClass("display");
    })

    //更換聯電
    $(".midSide.memberCenter .midBottom button.callChangePW").click(function(){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.changePW")
        .addClass("display");
    })

    //注單明細
    $(".midSide.dealRecord .midBottom .content .callDealDetail").click(function(){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.dealDetail")
        .addClass("display");
    })

    //紅利 X代會員
    $(".midSide.pointRecord .midBottom .content .callPoint_Window").click(function(){
        var n = $(this).text();

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.pointDetail")
        .addClass("display")
        .find(".title p span")
        .text(n);
    })

    //申請活動
    $(".midSide.eventApply .midBottom .content .callEventApply").click(function(){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.applied")
        .addClass("display");
    })

    //查看活動
    $(".midSide.eventApply .midBottom .content .callEventCheck, .eventWrap .eventBody .eventList ul li .callEventCheck").click(function(){

        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.eventWindow")
        .addClass("display");
    })

    //最新消息
    //忘記密碼
    $(".callNews_window").click(function(){
        $(".jumpWindow")
        .removeClass("display");

        $(".filter, .jumpWindow.news")
        .addClass("display");
    })
})

//註冊
$(function(){
    $(".registerWrap form label:nth-of-type(2) i").click(function(){
        
        if ($(this).hasClass("fa-eye-slash")) {
            $(this)
            .attr("class","fa-solid fa-eye")
            .closest("label")
            .find("input")
            .attr("type", "text");
        } else if ($(this).hasClass("fa-eye")) {
            $(this)
            .attr("class","fa-solid fa-eye-slash")
            .closest("label")
            .find("input")
            .attr("type", "password");
        }
    })
})

//news
$(function(){
    $(".jumpWindow.news .typeList button").click(function(){
        $(this)
        .addClass("active")
        .siblings().removeClass("active");

        var n = $(this).index();

        $(".jumpWindow.news ol:eq("+ n +")")
        .addClass("display")
        .siblings().removeClass("display");
    })
})