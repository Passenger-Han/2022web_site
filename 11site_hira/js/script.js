// navigator full-drop submenu
$('header #header-navigator .navigator').on('mouseenter', function(){
    $('header #header-navigator .navigator .submenu').css({
        'display': 'block',
    });
    $('.background-fulldrop').css({
        'display': 'block',
    });
    $('.background-overlay').css({
        'display': 'block',
    });
});

$('header #header-utility').on('mouseenter', function(){
    $('header #header-navigator .navigator .submenu').css({
        'display': 'none',
    });
    $('.background-fulldrop').css({
        'display': 'none',
    });
    $('.background-overlay').css({
        'display': 'none',
    });
});

$('.background-overlay').on('mouseenter', function(){
    $('header #header-navigator .navigator .submenu').css({
        'display': 'none',
    });
    $('.background-fulldrop').css({
        'display': 'none',
    });
    $('.background-overlay').css({
        'display': 'none',
    });
});

// $('header .background-fulldrop').on('mouseleave', function(){
//     $('header #header-navigator .navigator .submenu').css({
//         'display': 'none',
//     });
//     $('.background-fulldrop').css({
//         'display': 'none',
//     });
//     $('.background-overlay').css({
//         'display': 'none',
//     });
// });

// page-1 Swiper
const sct01Swiper = new Swiper('#section-01 .swiper', {
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
    mousewheel: false,
});

// page-3 Swipers
const sct03Swiper01 = new Swiper ('#section-03 .banner-wrapper .swiper', {
    slidesPerView: 1,
    allowTouchMove: true,

    pagination: {
        el: '#section-03 .banner-wrapper .swiper-pagination',
        type: 'fraction',
        clickable: true,
    },
})

const sct03Swiper02 = new Swiper ('#section-03 .sns-wrapper .swiper', {
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 16,

    pagination: {
        el: '#section-03 .sns-wrapper .swiper-pagination',
        clickable: true,
    },
})

// Fullpage initialization
$('#fullpage').fullpage({
    menu: 'header',
    showActiveTooltip: true,
    // anchors: ['page-1', 'page-2', 'page-3', 'page-4'],
    navigation: true,
    normalScrollElements: '#section-04 .guideline-menu .guideline-list',
});

$('#fp-nav ul > li:last-child').css('display', 'none');