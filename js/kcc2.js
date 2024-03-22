$(function () {


    $('.mainVisual .visual_slide').on('init', function () {
        const current = $('.mainVisual .visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        const a = new Array(10);

        for (let i = 0; i < a.length; i++) {
            current.find('.slide').append('<div class="s"><span class="bg"></span></div>');
        }

        const span = $('.slide .bg');
        span.each(function (idx, itm) {
            $(itm).css({
                background: `url(./images/mainVisual01.jpg) no-repeat calc((-100vw / ${a.length} * ${idx})) center`
            }).animate({ width: '100%' })
        })




    });

    $('.mainVisual .visual_slide').slick({
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 0,
        fade: true
    });


    $('.mainVisual .visual_slide').on('beforeChange', function () {
        $('.slick-slide').find('.slide').children().remove();
    })
    $('.mainVisual .visual_slide').on('afterChange', function (e, s, c) {

        $('.mainVisual .right_dots li').removeClass('on');
        $('.mainVisual .right_dots li').eq(c).addClass('on');
        $('.mainVisual .num span').text('0' + (c + 1));

        const current = $('.mainVisual .visual_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');

        const a = new Array(10);

        for (let i = 0; i < a.length; i++) {
            current.find('.slide').append('<div class="s"><span class="bg"></span></div>');
        }

        const span = $('.slick-current .slide .bg');
        span.each(function (idx, itm) {
            $(itm).css({
                background: `url(./images/mainVisual0${c + 1}.jpg) no-repeat calc((-100vw / ${a.length} * ${idx})) center`
            }).animate({ width: '100%' })
        })
    });

    $('.mainVisual .right_dots li a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        $('.mainVisual .visual_slide').slick('slickGoTo', idx);
    });


    let st = true;
    $('.mainVisual .play').on('click', function () {
        $(this).toggleClass('on');

        if (st) {
            $('.mainVisual .visual_slide').slick('slickPlay');
        } else {
            $('.mainVisual .visual_slide').slick('slickPause');
        }

        st = !st;

    })



});