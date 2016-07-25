

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".logo-nav").addClass('logo-nav-green');
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".logo-nav").removeClass('logo-nav-green');
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
        $('.navbar-toggle:visible').click();
    }
});

// wow doge animation
var wow = new WOW({
    offset: 250,          // default
})

wow.init();

$(document).ready(function () {
    if (localStorage.getItem('popState') != 'shown') {
        $('#subscribe').modal();
        localStorage.setItem('popState', 'shown')
    }
    var footer_height = $('footer').height();
    $('#footer-sections').css({ bottom: footer_height })
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        //
        if ($('.broadway').length) {
            var checkLoaded = setInterval(function () {
                // Do something every 5 seconds

                if ($('.broadway canvas').attr('width') == '960') {
                    //console.log('TRUE');
                    setTimeout(function () {
                        var cwidth = -(($('.broadway canvas').width() / 2) - ($(window).width() / 2))
                        $('.broadway canvas').css({ position: 'absolute', left: cwidth });
                    }, 1000);

                    clearInterval(checkLoaded);
                }
            }, 100);
        }


    }
    else {
        $('.broadway canvas').removeAttr('style');
    }

    $(window).on('orientationchange', function (event) {
        // if portrait mode
        checkOrientation()
    });
    checkOrientation()
    $(window).resize(function () {
        checkOrientation()
    });


    $input = $('input[type="text"]');

    $('button').on('click', function () {
        $val = $input.val();
        if ($(this).attr('name') == 'minus') {
            if ($input.val() > 0) {
                $input.val(parseInt($val) - 1);
            }
        } if ($(this).attr('name') == 'plus') {
            $input.val(parseInt($val) + 1);
        }
    });
})
function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        $('.broadway canvas').removeAttr('style');
        var cwidth = -(($('.broadway canvas').width() / 2) - ($(window).width() / 2))
        $('.broadway canvas').css({ position: 'absolute', left: cwidth });
    }
        //landscape
    else {
        $('.broadway canvas').removeAttr('style');
        $('.broadway canvas').css({ width: '100%' });
    }
}
