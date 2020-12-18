let a = 0
$('.show_hide-menu').click(function () {  
    if (a == 0) {
        a = 1;
        $('.show_hide-menu i').css({
            transform: 'rotate(180deg)'
        })
        $('.menu').stop().animate({
            left: 0
        },1000)
    } else if (a == 1) {
        a = 0
        $('.show_hide-menu i').css({
            transform: 'rotate(360deg)'
        })
        $('.menu').stop().animate({
            left: -300
        },1000)
    }
})