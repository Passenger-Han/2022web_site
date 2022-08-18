'use strict';
const contentFirstCardsData = [
    {
        title: '통합 마케팅 캠페인',
        desc: '20여년 간 쌓아온 데이터 역량 기반으로 최적화된 매체별 마케팅 전략을 제안',
        img: 'img/content-1st-card-1.png',
    },
    {
        title: '브랜드 마케팅',
        desc: '소비자 공감을 유도하는 차별화된 브랜드 마케팅 운영전략 제시 및 수행',
        img: 'img/content-1st-card-2.png',
    },
    {
        title: '미디어 컨설팅',
        desc: '국내외 약 400여 개의 상품 매체력과 노하우 바탕의 맞춤형 플래닝 서비스를 제공',
        img: 'img/content-1st-card-3.png',
    },
    {
        title: '퍼포먼스 마케팅',
        desc: '고도화된 데이터 분석 및 전략 개선으로 광고 효율을 극대화',
        img: 'img/content-1st-card-4.png',
    },
    {
        title: 'AD Tech',
        desc: '자체 개발 마케팅 솔루션 플랫폼을 지원해 광고주 마케팅 성과를 극대화',
        img: 'img/content-1st-card-5.png',
    },
    {
        title: 'ATL/BTL',
        desc: '고객과의 접점 극대화를 위해 광고 집행 목적, 타깃, 예산에 맞는 최적의 ATL/BTL 매체 선정',
        img: 'img/content-1st-card-6.png',
    },
    {
        title: 'VIDEO AD',
        desc: '연출·기획·촬영·편집 등 영상의 전 과정을 관여해 감각적인 광고 영상 제작을 지원',
        img: 'img/content-1st-card-7.png',
    },
    {
        title: '크리에이티브',
        desc: '고객 목표 지향적 콘텐츠를 개발하고 영향력 있는 크리에이티브 제작을 지원',
        img: 'img/content-1st-card-8.png',
    },
    {
        title: '미디어커머스',
        desc: '온라인 마케팅 노하우 및 커머스 성공사례를 기반으로 상품 발굴, 브랜딩 유통사업 진행',
        img: 'img/content-1st-card-9.png',
    },
    {
        title: '리서치',
        desc: '자체 데이터와 업종별 리서치를 기반으로 차별화된 마케팅 인사이트를 도출',
        img: 'img/content-1st-card-A.png',
    },
];

const contentFirstCardsCall = document.querySelectorAll("#content-1st #cards .text");

contentFirstCardsCall.forEach((element, index) => {
    let stack = '';
    stack += `<h4>${contentFirstCardsData[index].title}</h4>`;
    stack += `<p>${contentFirstCardsData[index].desc}</p>`;
    // element.style.background = `url(${contentFirstCardsData[index].img}) center no-repeat`;
    // element.style.backgroundSize = 'cover';
    document.querySelectorAll("#content-1st #cards .rounded")[index].style.background = `url(${contentFirstCardsData[index].img}) center no-repeat`;
    document.querySelectorAll("#content-1st #cards .rounded")[index].style.backgroundSize = 'cover';
    element.innerHTML = stack;
});

let swiper01Text = '';
for(let i = 1; i < 11; i++){
    swiper01Text += `<div class="swiper-slide">`;
    swiper01Text += `<img src="img/partner-logo-${i}.png" alt="" class="img-fluid">`;
    swiper01Text += `</div>`;
}
document.querySelector("#partners-logo .swiper-wrapper").innerHTML = swiper01Text;

// HEADER NAVBAR
document.querySelectorAll("#header #navbar-depth1 .nav-item").forEach((element, index) => {
    if (element.index != 4){
        element.addEventListener("mouseover", function(){
            // removing 'active' class..
            document.querySelectorAll("#header #navbar-depth2 .navbar-nav").forEach(element => {
                element.classList.remove("active");
            });
            // activating 'active' class on a specific element..
            document.querySelector("#header #navbar-depth2").classList.add("active");
            document.querySelectorAll("#header #navbar-depth2 .navbar-nav")[index].classList.add("active");
        });
    }
});
document.querySelector("#header").addEventListener("mouseleave", function(){
    document.querySelectorAll("#header #navbar-depth2 .navbar-nav").forEach(element => {
        element.classList.remove("active");
    });
    document.querySelector("#header #navbar-depth2").classList.remove("active");
});
document.querySelectorAll("#header #navbar-depth1 .nav-item")[4].addEventListener("mouseover", function(){
    document.querySelectorAll("#header #navbar-depth2 .navbar-nav").forEach(element => {
        element.classList.remove("active");
    });
    document.querySelector("#header #navbar-depth2").classList.remove("active");
});

// VISUAL SECTION
let visualCounter = 1;
setInterval(() => {
    document.querySelectorAll("#visual .characters img").forEach(element => {
        element.style.opacity = 0;
    })
    document.querySelectorAll("#visual .characters img")[visualCounter].style.opacity = 1;
    ScreenColor();
    visualCounter++;
    visualCounter %= document.querySelectorAll("#visual .characters img").length;
}, 2500);

function ScreenColor(){
    if (visualCounter == 0) document.querySelector(":root").style.setProperty('--visual-screen-color', 'rgb(84, 212, 212)')
    if (visualCounter == 1) document.querySelector(":root").style.setProperty('--visual-screen-color', 'rgb(240, 185, 177)')
    if (visualCounter == 2) document.querySelector(":root").style.setProperty('--visual-screen-color', 'rgb(249, 82, 109)')
    if (visualCounter == 3) document.querySelector(":root").style.setProperty('--visual-screen-color', 'rgb(25, 128, 193)')
    if (visualCounter == 4) document.querySelector(":root").style.setProperty('--visual-screen-color', 'rgb(67, 242, 42)')
    if (visualCounter == 5) document.querySelector(":root").style.setProperty('--visual-screen-color', 'rgb(0, 0, 0)')
    if (visualCounter == 6) document.querySelector(":root").style.setProperty('--visual-screen-color', 'rgb(84, 212, 212)')
    if (visualCounter == 7) document.querySelector(":root").style.setProperty('--visual-screen-color', 'rgb(29, 0, 33)')
    if (visualCounter == 8) document.querySelector(":root").style.setProperty('--visual-screen-color', 'rgb(121, 77, 159)')
    if (visualCounter == 9) document.querySelector(":root").style.setProperty('--visual-screen-color', 'rgb(243, 205, 108)')
    if (visualCounter == 10) document.querySelector(":root").style.setProperty('--visual-screen-color', 'rgb(241, 224, 48)')
}

// BELT SECTION
document.querySelector("#belt div[name='data']").addEventListener("mouseenter", function(){
    document.querySelector("#belt .onLeft").style.left = '0%';
});
document.querySelector("#belt div[name='creative']").addEventListener("mouseenter", function(){
    document.querySelector("#belt .onRight").style.right = '0%';
});
document.querySelector("#belt .row").addEventListener("mouseleave", function(){
    document.querySelector("#belt .onLeft").style.left = '-100%';
    document.querySelector("#belt .onRight").style.right = '-100%';
});