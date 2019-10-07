$(document).ready(function () {

    //    Super Slides Start
    $('#slides').superslides({
        play: 5000,
        animation: 'slide',
        pagination: false,

    });
    //    Super Slides Start

    //Typed JS Start
    var typed = new Typed('.typed', {
        // Waits 1000ms after typing "First"
        strings: ['Web Designer', 'Web Developer', 'Laravel Developer'],
        loop: true,
        typeSpeed: 70,
        showCursor: false,
    });
    //Typed JS Ennd

    // Slide Navigation Start
    $("#navigation li a").click(function () {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({
            scrollTop: targetPosition - 100
        }, "slow");

    });
    // Slide Navigation Start

    //    Owl Carousel Start
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    //    Owl Carousel Start End

    //EasyPieChart plugin Start
    var skillsTopOffset = $(".skill-section").offset().top;
    $(window).scroll(function () {
        if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            // Easy Pie Chart
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: 'white',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep(from, to, percent) {
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    });
    //EasyPieChart plugin Start

    //    Counter Plugin Start
    $(".counter").counterUp({
        delay: 5,
        time: 1000
    });
    //    Counter Plugin End


});
