$(function () {


    $('.mainVisual .visual_slide').on('init', function () {
        const current = $('.mainVisual .visual_slide .slick-current');


        const a = new Array(6);
        for (let i = 0; i < a.length; i++) {
            current.find('.slide').append('<div class="s"><span class="bg"></span></div>')
        }

        const span = $('.slide .bg');
        span.each(function (idx, itm) {
            $(itm).css({
                background: `url(./images/mainVisual01.jpg) no-repeat calc((-100vw / ${a.length} * ${idx})) center`
            }).animate({ width: '100%' })
        })


        current.addClass('on').siblings().removeClass('on');

    });

    $('.mainVisual .visual_slide').slick({
        pauseOnHover: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 0,
        fade: true
    });


    $('.mainVisual .visual_slide').on('beforeChange', function () {
        $('.slick-slide').find('.slide .bg').css({ width: 0 });
        $('.slick-slide').find('.slide').children().remove();
    })
    $('.mainVisual .visual_slide').on('afterChange', function (e, s, c) {
        //console.log(e, s, c); // c=0,1
        $('.mainVisual .right_dots li').removeClass('on');
        $('.mainVisual .right_dots li').eq(c).addClass('on');
        $('.mainVisual .num span').text('0' + (c + 1));

        const current = $('.mainVisual .visual_slide .slick-current');


        const a = new Array(6);

        for (let i = 0; i < a.length; i++) {
            current.find('.slide')
                .append('<div class="s"><span class="bg"></span></div>')
        }

        const span = $('.slide .bg');
        span.each(function (idx, itm) {
            $(itm).css({
                background: `url(./images/mainVisual0${c + 1}.jpg) no-repeat calc((-100vw / ${a.length} * ${idx})) center`
            }).animate({ width: '100%' })
        });

        current.addClass('on').siblings().removeClass('on');


    });

    $('.mainVisual .right_dots li a').on('click', function (e) {
        e.preventDefault();
        let idx = $(this).parent().index();
        $('.mainVisual .visual_slide').slick('slickGoTo', idx);
    });


    let st = false;
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