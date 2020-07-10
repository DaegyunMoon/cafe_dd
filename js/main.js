// 헤더 영역 - 메뉴 보이기/숨기기
const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hide');
});

// 대문 영역 - 이미지 삽입
function initImage() {
    var imgs = new Array();
    for (var i = 0; i < 4; i++) {
        imgs[i] = document.getElementById('img' + (i + 1));
        imgs[i].src = "image/main0" + (i + 1) + ".jpg";
    }
}

// 대문 영역 - 이미지 스와이프
function initSwiper() {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
    })
}


initImage();
initSwiper();