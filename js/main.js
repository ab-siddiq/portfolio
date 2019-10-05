$(document).ready(function () {
    //    Super Slides
    $('#slides').superslides({
        play: 5000,
        animation: 'slide',
        pagination: false,

    });
    //Typed JS
    var typed = new Typed('.typed', {
        // Waits 1000ms after typing "First"
        strings: ['Web Designer', 'Web Developer', 'Laravel Developer'],
        loop: true,
        typeSpeed: 70,
        showCursor: false,
    });
    //    Owl Carousel
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

    //EasyPieChart plugin
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
});
