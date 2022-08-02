console.log("HELLO");

// MAINPAGE
// MAINPAGE
// MAINPAGE
// MAINPAGE
// MAINPAGE
// MAINPAGE
// MAINPAGE
// PC
function MenuIndex(menuNumber){
    if (menuNumber != "home"){
        $(".navigator > ul > li").eq(menuNumber).find("> a").css({"background-color": "#005EB8", "color": "#FFFFFF",});
    }
}

$(".navigator > ul > li").hover(function(){
    $(this).addClass("active");
}, function(){
    $(this).removeClass("active");
});

// HEADER SCROLLING
$(window).scroll(function(){
    if (scrollY > 160){
        $("#header").addClass("scrolled");
        $(".navigator > ul > li > a").addClass("scrolled");
        $(".language-selector a").addClass("scrolled");

        if ($("#header").hasClass("toggle") == false){
            $("#header .wrap-navigator h1 a img").attr("src", "img/logo.png");
            $(".btn-toggle").addClass("scrolled");
            $(".btn-toggle .bar").addClass("scrolled");
        }
    } else {
        $("#header").removeClass("scrolled");
        $(".navigator > ul > li > a").removeClass("scrolled");
        $(".language-selector a").removeClass("scrolled");

        if ($("#header").hasClass("toggle") == false){
            $("#header .wrap-navigator h1 a img").attr("src", "img/logo-transparent.png");
            $(".btn-toggle").removeClass("scrolled");
            $(".btn-toggle .bar").removeClass("scrolled");
        }
    }
});

// MOBILE
$(".navigator > ul").clone().appendTo(".navigator-mobile"); // CLONING NAVIGATOR

$(".btn-toggle").click(function(){
    // closing toggle menu via BUTTON
    if ($("#header").hasClass("toggle") == false){
        $(".overlay").show();
        $(".navigator-cloned").css("left", "0");
        $("#header").addClass("toggle");

        $("#header .wrap-navigator h1 a img").attr("src", "img/logo.png");
    } else {
        $(".overlay").hide();
        $(".navigator-cloned").css("left", "-100%");
        $("#header").removeClass("toggle");
        if (scrollY <= 160){
            $("#header .wrap-navigator h1 a img").attr("src", "img/logo-transparent.png");
            $(".btn-toggle").removeClass("scrolled");
            $(".btn-toggle .bar").removeClass("scrolled");
        } else {
            $(".btn-toggle").addClass("scrolled");
            $(".btn-toggle .bar").addClass("scrolled");
        }
    }
});

$(".overlay").click(function(){
    // closing toggle menu, bypassed by using OVERLAY
    $(this).hide();
    $(".navigator-cloned").css("left", "-100%");
    $("#header").removeClass("toggle");
});

$(".navigator-mobile > ul > li > a").click(function(event){
    event.preventDefault();
    if ($(this).parent().hasClass("active")){
        $(this).parent().removeClass("active");
    } else {
        $(".navigator-mobile > ul > li").removeClass("active");
        $(this).parent().addClass("active");
    }
});

// NEWS MODAL
$("#sct04 .news").click(function(){
    $(".overlay-modal").show();
    $(".news-modal").css({"bottom": 0, "display": "flex"});
    $(this).addClass("toggle");
})

$(".overlay-modal").click(function(){
    // closing modal, bypassed by using OVERLAY
    $(this).hide();
    $(".news-modal").css({"bottom": "-100%", "display": "none"});
    $("#sct04 .news").removeClass("toggle");
});
$(".news-modal .modal-upper-bar .modal-close").click(function(){
    // closing modal, via 'x' button
    $(".overlay-modal").hide();
    $(".news-modal").css({"bottom": "-100%", "display": "none"});
    $("#sct04 .news").removeClass("toggle");
});


// SUBPAGE
// SUBPAGE
// SUBPAGE
// SUBPAGE
// SUBPAGE
// SUBPAGE
// SUBPAGE
function SubmenuIndex(submenuNumber){
    $(".wrap-visual .depth2-selector li").eq(submenuNumber).addClass("active");
}

$(".wrap-visual .depth2-selector li a").click(function(){
    $(".wrap-visual .depth2-selector li").removeClass("active");
    $(this).parent().addClass("active");
})