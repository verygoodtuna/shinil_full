$(function () {
    $('.main_box').fullpage({
        anchors:['main_sk', 'main_product', 'main_technical', 'main_customer', 'main_news', 'main_global', 'footer'],
        responsiveWidth: 700,
        css3: false,
        onLeave: function (idx, nidx, dir) {
            $('.gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            console.log(idx, nidx, dir);

            if (dir == 'down') {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        }
    })
})