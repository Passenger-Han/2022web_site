// resize check (not used)
let resizeDelay = 300; // ms
let resizeTimer = null;

// $(window).on('resize', function(){
//     clearTimeout(resizeTimer);
//     resizeTimer = setTimeout(function(){
//         if (window.innerWidth >= 960){
//             $('header #header-navigator .navigator').show();
//         } else {
//             $('header #header-navigator .navigator').hide();
//         }
//     }, resizeDelay);
// })

// navigator coloring
$(window).on('scroll', function(){

})

// navigator sitemap check
let sitemapOpened = false;

// navigator full-drop submenu
$('header #header-navigator .navigator').on('mouseenter', function(){
    if (window.innerWidth >= 960 && sitemapOpened == false){
        $('header #header-navigator .navigator .submenu').css({
            'display': 'block',
        });
        $('.background-fulldrop').css({
            'display': 'block',
        });
        $('.background-overlay').css({
            'display': 'block',
        });
    }
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

    $('header #header-navigator .navigator .submenu').css({
        'display': 'none',
    });
    $('.background-fulldrop').css({
        'display': 'none',
    });
    $('.background-overlay').css({
        'display': 'none',
    });

    sitemapOpened = true;
});
$('.background-sitemap').on('click', function(){
    $('.sitemap').css({
        'display': 'none',
    });
    $('.background-sitemap').css({
        'display': 'none',
    });

    sitemapOpened = false;
});

// Sitemap at mobile devices
$('.sitemap .sitemap-depth01 > li > a').on('click', function(event){
    event.stopPropagation();
    // 이벤트 발생 대상을 li 로 하면 메뉴 아무거나 눌러도 결국 닫힌다..
    // 근데 closest()를 매개변수 없이는 못써..? 이거 반 쪽짜리야? 그냥 바로 위에꺼 고르면 되는거 아니야?
    
    if ($(this).closest('li').find('.sitemap-depth02-wrapper').hasClass('active')){
        $(this).closest('li').find('.sitemap-depth02-wrapper').removeClass('active');
    } else {
        $('.sitemap-depth02-wrapper').removeClass('active');
        $('.sitemap-depth02').removeClass('active');
        $(this).closest('li').find('.sitemap-depth02-wrapper').addClass('active');
    }
});

$('.sitemap-depth01 > li .sitemap-depth02-wrapper .depth02-title').on('click', function(event){
    event.stopPropagation();
    if ($(this).closest('ul').hasClass('active')){
        $(this).closest('ul').removeClass('active');
    } else {
        $('.sitemap-depth02').removeClass('active');
        $(this).closest('ul').addClass('active');
    }
});

// page-1 latest board
$('#section-01 .panel .categories a').on('click', function(){
    $('#section-01 .panel .categories a').removeClass('on');
    $('#section-01 .panel .categories a').eq($(this).index()).addClass('on');
    loadButtons($('#section-01 .panel .categories a').index(this));
});

function loadButtons(index){
    $('#section-01 .panel .buttons').removeClass('on')
    $('#section-01 .panel .buttons').eq(index).addClass('on')
}

// page-2
$('#section-02 .information li').on('click', function(){
    $('#section-02 .information li').removeClass('on');
    $('#section-02 .information li').eq($(this).index()).addClass('on');
    loadInformation($('#section-02 .information li').index(this));
});

function loadInformation(index){
    $('#section-02 .notice').removeClass('on')
    $('#section-02 .notice').eq(index).addClass('on')
}


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
    // $('#section-04 .guideline-list p').eq($(this).index()).addClass('on');
    $(this).addClass('on');
    loadGuidelineVisual($('#section-04 .guideline-list p').index(this));
});

function loadGuidelineVisual(index){
    $('#section-04 .guideline-visual li').removeClass('on')
    $('#section-04 .guideline-visual li').eq(index).addClass('on')
}

// footer outlink
$('footer .footer-upper .footer-sitemap').on('click', function(){
    $('footer .footer-upper .footer-sitemap ul').toggleClass('on');
})

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
    slidesPerView: 2,
    spaceBetween: 16,

    pagination: {
        el: '#section-03 .sns-wrapper .swiper-pagination',
        type: 'fraction',
        clickable: true,
    },

    breakpoints: {
        960: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    },
});
const sct03Swiper0202 = new Swiper ('#section-03 .sns-wrapper .swiper02', {
    // loop: true,
    slidesPerView: 2,
    spaceBetween: 16,

    pagination: {
        el: '#section-03 .sns-wrapper .swiper-pagination',
        type: 'fraction',
        clickable: true,
    },

    breakpoints: {
        960: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    },
});
const sct03Swiper0203 = new Swiper ('#section-03 .sns-wrapper .swiper03', {
    // loop: true,
    slidesPerView: 2,
    spaceBetween: 16,

    pagination: {
        el: '#section-03 .sns-wrapper .swiper-pagination',
        type: 'fraction',
        clickable: true,
    },

    breakpoints: {
        960: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    },
});

// page-4 Swiper
const sct04Swiper01 = new Swiper ('#section-04 .swiper', {
    allowTouchMove: false,
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
        prevEl: '#section-04 .navigation-prev',
        nextEl: '#section-04 .navigation-next',
    },
})

// Fullpage.js fullpage initialization
$('#fullpage').fullpage({
    menu: 'header',
    showActiveTooltip: true,
    // anchors: ['page-1', 'page-2', 'page-3', 'page-4'],
    navigation: true,
    normalScrollElements: '#section-04 .guideline-menu .guideline-list, .sitemap',
    responsiveWidth: 960,

    afterResponsive: function(isResponsive){
        if (!isResponsive) {
            $('header #header-navigator .navigator').show();
        } else {
            $('header #header-navigator .navigator').hide();
            $('header #header-navigator .navigator .submenu').hide();
            $('.background-fulldrop').hide();
            $('.background-overlay').hide();
        }
    },

    afterLoad: function(anchorLink, index){
        if (index != 1){
            $('header').addClass('nonTransparent');
            $('header h1 img').attr('src', 'img/logo-filled.png');
        } else {
            $('header').removeClass('nonTransparent');
            $('header h1 img').attr('src', 'img/logo.png');
        }
    }
});

// disable Fullpage.js footer tooltip
$('#fp-nav ul > li:last-child').css('display', 'none');