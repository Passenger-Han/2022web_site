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
    allowTouchMove: false,

    pagination: {
        el: '#section-03 .banner-wrapper .swiper-pagination',
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
    anchors: ['page-1', 'page-2', 'page-3', 'page-4'],
    navigation: true,
});