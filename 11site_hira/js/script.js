// page-1 Swiper
const sct01Swiper = new Swiper('#section-01 .swiper', {
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
    },
    mousewheel: false,
});

// Fullpage initialization
$('#fullpage').fullpage({
    menu: 'header',
    anchors: ['page-1', 'page-2'],
    navigation: true,
});