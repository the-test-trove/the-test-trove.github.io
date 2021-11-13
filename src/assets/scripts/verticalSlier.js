$(document).ready(function(){
    
    VerticalSlider('.speaker-slider');

    function VerticalSlider($contain){

        $($contain+'> .speaker-slider__item').each(function () {    
            var next = $(this).next();
            if (!next.length) {
                next = $(this).siblings(':first');
            }
            next.children(':first-child').clone().attr("aria-hidden", "true").appendTo($(this)).addClass('cloned-speaker');

            if (next.next().length > 0) {
                next.next().children(':first-child').clone().attr("aria-hidden", "true").appendTo($(this)).addClass('cloned-speaker');
            }
            else {
                $(this).siblings(':first').children(':first-child').clone().appendTo($(this)).addClass('cloned-speaker');
            }

        });
        $($contain).slick({
           
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 3,
            // vertical: true,
            verticalSwiping: true,
            prevArrow: '<div class="speaker-slider__up-arrow"><i class="fa fa-angle-up"></i></div>',
            nextArrow: '<div class="speaker-slider__down-arrow"><i class="fa fa-angle-down"></i></div>',
            dots: false,
            fade: true,
            speed: 900,
            infinite: true,
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
            responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
        
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
            ]
        });

        // $('.speaker-slider__down-arrow i').on( 'click', function(){
        //     // $('.slick-current .speaker-slider__item div').removeClass("thumb-float-down");
        //     if($('.slick-current .speaker-slider__item div').hasClass("thumb-float-down")){
        //         $(this).removeClass("thumb-float-down");
        //     }
        //     $('.slick-current .speaker-slider__item div:nth-child(1)').addClass("thumb-float-down");
        // });

      
        

    }
});