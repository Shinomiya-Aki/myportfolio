"use strict";

//ハンバーガーメニューの切り替え//
//ハンバーガーメニューが押されたら//
$(".h_hamburger").on("click", function () {
    //.h_hamburgerと.h_menuに.activeを付与
    $(".h_hamburger").toggleClass("active");
    $(".h_menu").toggleClass("active");
});
//リンク先が押されたら//
$(".h_menu a").click(function () {
    //.h_hamburgerと.h_menuから.activeを削除してメニューを閉じる
    $(".h_hamburger").removeClass("active");
    $(".h_menu").removeClass("active");
});

//--------------------------------------------------//

//スライドショーslick
$(function () {
    $(".kv").slick({
        fade:true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed:1000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });
});

$(function () {
    $(".s_type").slick({
        arrows: false,
        autoplay: true,
        adaptiveHeight: true,
        centerMode: true,
        centerPadding: "15%",
        slidesToShow: 3,
        infinate: true,
        dots: true,

        responsive: [
            {
                breakpoint: 1439,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 690,
                settings: {
                    slidesToShow: 1,
                },
            }
    ],
    });
});

$(function () {
    $(".w_type").slick({
arrows: false,
    autoplay: true,
    centerMode: false,
        dots: true,
        slidesToShow: 2,

        responsive: [

            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                },
            }
        ],
        });
});

//--------------------------------------------------//

// フェードアップ ScrollReveal
// https://scrollrevealjs.org/
ScrollReveal().reveal('.fadeup', {
    delay: 250,
    duration: 2500,
    distance: "25px",
    desktop: true,
    mobile: true,
    reset: true,
}
);

ScrollReveal().reveal('.fadedown', {
    delay: 250,
    duration: 2500,
    distance: "-25px",
    desktop: true,
    mobile: true,
    reset: true,
}
);

ScrollReveal().reveal('.fadeupttl', {
    duration: 1500,
    distance: "-10px",
    opacity: 0,
    desktop: true,
    mobile: true,
    reset: true,
}
);

ScrollReveal().reveal('.slideinL', {
    delay: 1000,
    duration: 2000,
    distance: "25px",
    origin: "left",
    desktop: true,
    mobile: true,
    reset: true,
}
);

ScrollReveal().reveal('.slideinR', {
    delay: 1000,
    duration: 2000,
    distance: "25px",
    origin: "right",
    desktop: true,
    mobile: true,
    reset: true,
}
);
