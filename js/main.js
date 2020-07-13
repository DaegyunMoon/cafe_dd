// 헤더 영역 - 메뉴 보이기/숨기기
const toggleBtn = document.querySelector('.navbar-toggleBtn');
const menu = document.querySelector('.navbar-menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('hide');
});

// 이미지 삽입
function initImage(name) {
    var imgs = document.getElementsByClassName(name + '-img');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].src = "image/" + name + "/" + name + " (" + (i + 1) + ").jpg";
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

// 리뷰 영역 - 이미지 리사이징
function setReviewImage() {
    if($(window).width() < 1280) {
        var columnWidth = $('.column').width();
        var imgWidth = parseInt((columnWidth / 3) - 20);
        $('.review-img').width(String(imgWidth) + 'px');
    } else {
        $('.review-img').width('135px');
    }
}