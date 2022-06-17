$(document).ready(function(){
    var slide_one = $(".visual-slide-01").bxSlider({
        controls: false,
        responsive: false,
    });

    $(".prev-btn").click(function(){
        slide_one.goToPrevSlide();
    });
    $(".next-btn").click(function(){
        slide_one.goToNextSlide();
    });

    $(".visual-slide-02").bxSlider({
        controls: false,
        responsive: false
    });

    $(".modal").colorbox({
        iframe: true,
        innerWidth: 700,
        innerHeight: 394
    });
});