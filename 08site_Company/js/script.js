console.log("HELLO");

// PC
$(".navigator > ul > li").hover(function(){
    $(this).addClass("active");
}, function(){
    $(this).removeClass("active");
});

// HEADER SCROLLING
$(window).scroll(function(){
    if (scrollY > 160){
        // $("#header").css({
        //     "position": "fixed",
        //     "background-color": "#FFFFFF",
        //     "box-shadow": "0 0 6px #00000033",
        // });
        // $(".navigator > ul > li > a").css({
        //     "color": "initial",
        // });
        // $(".language-selector a").css({
        //     "color": "initial",
        //     "border": "1px solid #000000",
        // });
        $("#header").addClass("scrolled");
        $(".navigator > ul > li > a").addClass("scrolled");
        $(".language-selector a").addClass("scrolled");

        if ($("#header").hasClass("toggle") == false){
            $("#header .wrap-navigator h1 a img").attr("src", "img/logo.png");
            // $(".btn-toggle").css({
            //     "border": "1px solid #000000",
            // });
            // $(".btn-toggle .bar").css({
            //     "background-color": "#000000",
            // });
            $(".btn-toggle").addClass("scrolled");
            $(".btn-toggle .bar").addClass("scrolled");
        }
    } else {
        // $("#header").css({
        //     "position": "absolute",
        //     "background-color": "transparent",
        //     "box-shadow": "none",
        // });
        // $(".navigator > ul > li > a").css({
        //     "color": "#FFFFFF",
        // });
        // $(".language-selector a").css({
        //     "color": "#FFFFFF",
        //     "border": "1px solid #FFFFFF",
        // });
        $("#header").removeClass("scrolled");
        $(".navigator > ul > li > a").removeClass("scrolled");
        $(".language-selector a").removeClass("scrolled");

        if ($("#header").hasClass("toggle") == false){
            $("#header .wrap-navigator h1 a img").attr("src", "img/logo-transparent.png");
            // $(".btn-toggle").css({
            //     "border": "1px solid #FFFFFF",
            // });
            // $(".btn-toggle .bar").css({
            //     "background-color": "#FFFFFF",
            // });
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
        // $(".btn-toggle").css({
        //     "border": "1px solid #000000",
        // });
        // $(".btn-toggle .bar").css({
        //     "background-color": "#000000",
        // });
    } else {
        $(".overlay").hide();
        $(".navigator-cloned").css("left", "-100%");
        $("#header").removeClass("toggle");
        if (scrollY <= 160){
            $("#header .wrap-navigator h1 a img").attr("src", "img/logo-transparent.png");
            // $(".btn-toggle").css({
            //     "border": "1px solid #FFFFFF",
            // });
            // $(".btn-toggle .bar").css({
            //     "background-color": "#FFFFFF",
            // });
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

$(".navigator-mobile > ul > li").click(function(){
    if ($(this).hasClass("active")){
        $(this).removeClass("active");
    } else {
        $(".navigator-mobile > ul > li").removeClass("active");
        $(this).addClass("active");
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