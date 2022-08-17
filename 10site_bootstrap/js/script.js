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