console.log("HELLO");

// PC
$(".navigator > ul > li").hover(function(){
    $(this).addClass("active");
}, function(){
    $(this).removeClass("active");
});

// MOBILE
$(".navigator > ul").clone().appendTo(".navigator-mobile"); // CLONING NAVIGATOR

$(".btn-toggle").click(function(){
    // closing toggle menu via BUTTON
    if ($("#header").hasClass("toggle") == false){
        $(".overlay").show();
        $(".navigator-cloned").css("left", "0");
        $("#header").addClass("toggle");
    } else {
    $(".overlay").hide();
    $(".navigator-cloned").css("left", "-100%");
    $("#header").removeClass("toggle");
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
