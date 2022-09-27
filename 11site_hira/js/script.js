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

// navigator sitemap
$('header #header-navigator button').on('click', function(){
    $('.sitemap').css({
        'display': 'block',
    });
    $('.background-sitemap').css({
        'display': 'block',
    });
});
$('.background-sitemap').on('click', function(){
    $('.sitemap').css({
        'display': 'none',
    });
    $('.background-sitemap').css({
        'display': 'none',
    });
});

// page-3 latest board
$('#section-03 .news-menu a').on('click', function(){
    $('#section-03 .news-menu a').removeClass('on');
    $('#section-03 .news-menu a').eq($(this).index()).addClass('on');
    loadNews($('#section-03 .news-menu a').index(this));
});

function loadNews(index){
    $('#section-03 .news-list').removeClass('on')
    $('#section-03 .news-list').eq(index).addClass('on')
}

$('#section-03 .sns-menu .sns-list li').on('click', function(){
    $('#section-03 .sns-menu .sns-list li').removeClass('on');
    $('#section-03 .sns-menu .sns-list li').eq($(this).index()).addClass('on');
    loadSNS($('#section-03 .sns-menu .sns-list li').index(this));
});

function loadSNS(index){
    $('#section-03 .sns-wrapper .swiper').removeClass('on')
    $('#section-03 .sns-wrapper .swiper').eq(index).addClass('on')
}



// page-4 guideline-visual
$('#section-04 .guideline-list p').on('click', function(){
    $('#section-04 .guideline-list p').removeClass('on');
    $('#section-04 .guideline-list p').eq($(this).index()).addClass('on');
    loadGuidelineVisual($('#section-04 .guideline-list p').index(this));
});

function loadGuidelineVisual(index){
    $('#section-04 .guideline-visual li').removeClass('on')
    $('#section-04 .guideline-visual li').eq(index).addClass('on')
}

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
});

const sct03Swiper0201 = new Swiper ('#section-03 .sns-wrapper .swiper01', {
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 16,

    pagination: {
        el: '#section-03 .sns-wrapper .swiper-pagination',
        clickable: true,
    },
});
const sct03Swiper0202 = new Swiper ('#section-03 .sns-wrapper .swiper02', {
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 16,

    pagination: {
        el: '#section-03 .sns-wrapper .swiper-pagination',
        clickable: true,
    },
});
const sct03Swiper0203 = new Swiper ('#section-03 .sns-wrapper .swiper03', {
    // loop: true,
    slidesPerView: 4,
    spaceBetween: 16,

    pagination: {
        el: '#section-03 .sns-wrapper .swiper-pagination',
        clickable: true,
    },
});

// Fullpage initialization
$('#fullpage').fullpage({
    menu: 'header',
    showActiveTooltip: true,
    // anchors: ['page-1', 'page-2', 'page-3', 'page-4'],
    navigation: true,
    normalScrollElements: '#section-04 .guideline-menu .guideline-list, .sitemap',
});

$('#fp-nav ul > li:last-child').css('display', 'none');