
$(document).ready(function(){
   
    "use strict";

    var controller = new ScrollMagic.Controller();

    function loadjs(file) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = file;
        document.querySelector('#module').appendChild(script);
     }
//------------------ SPONSOR SLIDER-------------------------------------
//--------------------------------------------------------------------------

// loadjs('assets/scripts/general/sponsorSlider.js');
    if($(window).width()< 768){
        $('.sponsor').addClass('sponsor-slider');
    }
    else {
        $('.sponsor').removeClass('sponsor-slider');
    }

    partnerSlider('.sponsor-slider');
    function partnerSlider($slide){

        $($slide).slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots:false,
            autoplay:true,
            prevArrow: null,
            nextArrow: null,
            responsive: [
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            ]
        });
    }

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
        triggerElement: ".sponsor__item",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0, // move trigger to center of element
        reverse:false
    })
    .on('start', function (){
        anime({
            targets: '.sponsor__item img',
            scale: {
                value: [0,1],
                easing: 'easeInSine'
            },
            easing: 'easeInSine',
            duration:500
        });
    }).addTo(controller);

//------------------END SPONSOR SLIDER-------------------------------------



//------------------ VERTICAL SLIDER-------------------------------------
//--------------------------------------------------------------------------

// loadjs('assets/scripts/general/verticalSlier.js');

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
        
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 3,
            // vertical: true,
            verticalSwiping: true,
            // prevArrow: '<div class="speaker-slider__up-arrow"><i class="fa fa-angle-up"></i></div>',
            // nextArrow: '<div class="speaker-slider__down-arrow"><i class="fa fa-angle-down"></i></div>',
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
        $('.speaker-slider__arrow--up').on('click', function(){
            $($contain).slick("slickPrev");
            anime({
                targets: '.slick-current .speaker-slider__item div',
                duration: function(t,i) {
                return 600 + i*75;
                },
                translateY: [-500,0],
                opacity:1,
                easing: 'easeInSine',
                delay: anime.stagger(50) 
            });
        });
        $('.speaker-slider__arrow--down').on('click', function(){
            $($contain).slick("slickNext");
            
            anime({
                targets: '.slick-current .speaker-slider__item div',
                duration: function(t,i) {
                return 600 + i*75;
                },
                translateY: [500,0],
                opacity:1,
                easing: 'easeInSine',
                delay: anime.stagger(50) 
            });
            
        });



    }
    new ScrollMagic.Scene({
        triggerElement: ".speaker-slider-area",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50, // move trigger to center of element
        reverse:false
    })
    .on('start', function () {
        anime({
            targets: '.slick-current .speaker-slider__item div',
            duration: function(t,i) {
            return 600 + i*75;
            },
            opacity: {
            value: [0,1],
            easing: 'linear'
            },
            translateX: [-270,0],
            translateY: [-270,0],
            scale:{
                value:[0,1],
                easing: 'cubicBezier(.51,.38,.57,1.36)'
            },
            easing: 'easeOutExpo',
            delay: anime.stagger(150) // increase delay by 100ms for each elements.
        });
        anime({
            targets: '.speaker-slider__arrow',
            duration: function(t,i) {
            return 600 + i*75;
            },
            opacity: {
                value: 1,
                easing: 'linear'
            },
            scale:{
                value:[0,1],
                easing: 'cubicBezier(.51,.38,.57,1.36)'
            },
            translateX: [-270,0],
            translateY: [-270,0],
            easing: 'easeInSine',
            delay: anime.stagger(50) 
        });
    })
    .addTo(controller);


//------------------END VERTICAL SLIDER-------------------------------------



//------------------ NAV MENU BUTTON ----------------------------------------
//--------------------------------------------------------------------------
// loadjs('assets/scripts/general/header.js');
    $('.header__menu-icon').on( 'click', function(){
            
        $('.menu-nav').toggleClass("menu-nav-active");
        $('.header__menu-icon').toggleClass('button-eff');
        $('.menu-nav nav').toggleClass('nav-effect');
        anime({
            targets: '.nav-effect ul li',
            translateX: [-1000,0],
            delay: anime.stagger(50) 
        });
    });
    $(".menu-nav-close").on('click',function(){
        $('.menu-nav').removeClass("menu-nav-active");
        $('.header__menu-icon').removeClass('button-eff');
        $('.menu-nav nav').removeClass('nav-effect');
    });
    $('.menu-nav ul li').on('click',function(){
        $(this).find('i').toggleClass('arrow-rotation');
        $(this).find('.sub-menu').slideToggle();

    });

    var position = $(window).scrollTop() ; 
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if(scroll > position && scroll > 310) {
            if($('body').hasClass('lightbox-enabled') || $('.menu-nav').hasClass('menu-nav-active')){
                $('header').removeClass('header-hide');
            }
            else {
                $('header').addClass('header-hide');
            }
        
        } else {
            $('header').removeClass('header-hide'); 
        }
        position = scroll;
    });
//--------------------END NAV MENU BUTTON------------------------------------------------------




//------------------ EXPERIENCE EFFECT  ----------------------------------------
//--------------------------------------------------------------------------
// loadjs('assets/scripts/general/experience.js');


    if($(window).width()>991){
        MovinTeen('.movein-ex--1','30%','70%','0%','0%','.experience ');
        MovinTeen('.movein-ex--2','-50%','60%','0%','0%','.experience ');
        MovinTeen('.movein-ex--3','70%','0%','0%','0%','.experience ');
        MovinTeen('.movein-ex--4','-70%','0%','0%','0%','.experience ');

        MovinTeen('.movein-ex--5','0%','-70%','0%','0%','.experience ');
        ExTextFadeup(".experience__text");
    }
    else {
        MovinTeen('.movein-ex--1','0%','0%','0%','0%','.experience ');
        MovinTeen('.movein-ex--2','0%','0%','0%','0%','.experience ');
        MovinTeen('.movein-ex--3','0%','0%','0%','0%','.experience ');
        MovinTeen('.movein-ex--4','0%','0%','0%','0%','.experience ');

        MovinTeen('.movein-ex--5','0%','0%','0%','0%','.experience ');
        ExTextFadeup(".experience__textoff");
    }



    function MovinTeen($obj,$x0,$y0,$xd,$yd,$triggerElement){

        var tween = new TimelineMax();
        tween.fromTo($obj, 1, {x:$x0, y:$y0},     { x:$xd,  y:$yd     },  '-=0.5')

        var scene = new ScrollMagic.Scene({triggerElement: $triggerElement, duration: 800, offset: -150})
            .setTween(tween)
            .addTo(controller);

    }

    function ExTextFadeup($obj){
        var tweenUp = new TimelineMax();
        tweenUp.fromTo($obj, 2, {y:100},     {  y:0     },  '-=0.5')

        var scene = new ScrollMagic.Scene({triggerElement: $obj, duration: 800, offset: -350})
            .setTween(tweenUp)
            .addTo(controller);
    }
//------------------ END EXPERIENCE EFFECT  ----------------------------------------



//------------------ SPEAKER EFFECT  ----------------------------------------
//--------------------------------------------------------------------------
// loadjs('assets/scripts/general/speaker.js');

    anime({
        targets: '.speaker-grid-1__item',
        duration: function(t,i) {
        return 600 + i*75;
        },
        opacity: {
        value: [0,1],
        easing: 'linear'
        },
        translateX: [-270,0],
        translateY: [-270,0],
        scale:{
            value:[0,1],
            easing: 'cubicBezier(.51,.38,.57,1.36)'
        },
        easing: 'easeOutExpo',
        delay: anime.stagger(150, {start: 300}) // increase delay by 100ms for each elements.
    });



//=================================== SPEAKER LIST===============================
//====================================================================================

    new ScrollMagic.Scene({
        triggerElement: ".schedule-list",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 50, // move trigger to center of element
        reverse:false
    })
    .on('start', function () {
        anime({
            targets: '#schedulelist-reveal1',
            opacity: {
                value: [0,1],
                easing: 'linear'
            },
            translateX: [-270,0],
            easing: 'easeInSine',
        });
        anime({
            targets: '#schedulelist-reveal2',
            opacity: {
                value: [0,1],
                easing: 'linear'
            },
            translateX: [270,0],
            easing: 'easeInSine',
        });
    })
    .addTo(controller);

//------------------ END SPEAKER EFFECT  ----------------------------------------



//------------------ CURSOR EFFECT  ----------------------------------------
//--------------------------------------------------------------------------
// loadjs('assets/scripts/general/cursor.js');
    //================venue
    FlowCursor ('.venue-video__text__address','.venue-video__text__address');
    
    // contact
    FlowCursor(".moving-btn",".moving-btn");


    //=== home
    FlowCursor ('.speaker-slider__arrow--down','.speaker-slider__arrow--down');
    FlowCursor ('.experience__text__link','.experience__text__link');
    FlowCursor ('.speaker-slider__arrow--up','.speaker-slider__arrow--up');
    FlowCursor ('.speaker-slider__arrow--down','.speaker-slider__arrow--down');
    
    function FlowCursor ($hoverArea,$link) {
    
        const link = document.querySelectorAll($hoverArea);
        const animateit = function (e) {
              const span = document.querySelector($link);
              const { offsetX: x, offsetY: y } = e,
              { offsetWidth: width, offsetHeight: height } = this,
              move = 25,
              xMove = x / width * (move * 2) - move,
              yMove = y / height * (move * 2) - move;
    
              span.style.transform = `translate(${xMove}px, ${yMove}px)`;
    
              if (e.type === 'mouseleave') span.style.transform = '';
        };
        link.forEach(b => b.addEventListener('mousemove', animateit));
        link.forEach(b => b.addEventListener('mouseleave', animateit));
    }
    
//================= Custom cusor==========================

    const cursor = document.querySelector('.cursor');
    const cursorflow = document.querySelector('.cursor-follower');
    const editCursor = e => {
          TweenMax.to( cursor, 0, {
            css: { left: e.clientX, top: e.clientY  }
        });
    };
    function CursorFollower (e) { 
      TweenMax.to( cursorflow, 1.2, {
        css: { left: e.clientX -13, top: e.clientY -13 },
        ease: Elastic.easeOut
    });
    }

    window.addEventListener('mousemove', editCursor);
    window.addEventListener('mousemove', CursorFollower);

   
// CURSOR TRANSFORM ON HOVER

    CursorTrans('a');
    CursorTrans('h1');
    CursorTrans('.header__menu-icon');
    CursorTrans('.letter');
    CursorTrans('.sponsor__item img');
    CursorTrans('.schedule-tab__item ');
    CursorTrans('video');
    CursorTrans('.venue-video__text__address');
    CursorTrans('.speaker-slider__arrow');
    CursorTrans("input[type='submit']");
    function CursorTrans($obj) {
        $($obj).on('mouseover',function(){
            $('.cursor-follower').addClass('cursor-folow-transform');
            
            TweenMax.to( cursorflow, 1.5, {
                css: { scale: 1.5},
                ease: Elastic.easeOut,
           
            });
            $('.cursor').addClass('cursor-transform');
        });
        $($obj).on('mouseout',function(){
            $('.cursor-follower').removeClass('cursor-folow-transform');
            TweenMax.to( cursorflow, 0.5, {
                css: { scale:1 },
                ease: Elastic.linear
            });
            $('.cursor').removeClass('cursor-transform');
        });
    }




    CursorTurnWhite('.pagebanner-1');
    CursorTurnWhite('header');
    CursorTurnWhite('footer');
    CursorTurnWhite('.menu-nav');
    CursorTurnWhite('.erropage');
    
    function CursorTurnWhite($obj) {

        $($obj).on('mouseover',function(){
            $('.cursor').addClass('cursor-white');
            $('.cursor-follower').addClass('cursor-folow-white');

        });
        $($obj).on('mouseout',function(){
            $('.cursor').removeClass('cursor-white');
            $('.cursor-follower').removeClass('cursor-folow-white');

        });
    }


    

//------------------ END CURSOR EFFECT  ----------------------------------------


//------------------ Footer EFFECT  ----------------------------------------
//--------------------------------------------------------------------------
// loadjs('assets/scripts/general/footer.js');


    new ScrollMagic.Scene({
        triggerElement: ".footer",
        triggerHook: 0.9, // show, when scrolled 10% into view
        duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
        offset: 0, // move trigger to center of element
        reverse:false
    })
    .on('start', function (){
        anime({
            targets: '.footer-move-up',
            easing: 'easeOutCubic',
            opacity: {
                value: [0,1],
                easing: 'easeInOutQuad'
            },
            translateY :[100,0],
            delay: anime.stagger(150)
        });
    }).addTo(controller);
//------------------ END Footer EFFECT  ----------------------------------------


//------------------ VENUE EFFECT  ----------------------------------------
//--------------------------------------------------------------------------
// loadjs('assets/scripts/general/venue.js');
    anime.timeline({loop: false})
    .add({
        targets: '.venue-fadeinup',
        opacity: {
            value: [0,1],
            easing: 'linear'
        },
        translateY: [50,0],
        easing: "easeOutCirc",
        duration: 500,
        delay: (el, i) => 200 * i
    });
//------------------ END VENUE EFFECT  ----------------------------------------


//--------------------------- LOADING-------------------------------------------
//------------------------------------------------------------------------------
    // $(window).on("load", function () {
    //     $('.loading').fadeOut();
    //     setTimeout(function() {
    //         $('.loading').remove();
    //     }, 1000);
    // });

//--------------------------- END LOADING-------------------------------------------



    
//------------------ SPEAKER PACKERY LAYOUT-------------------------------------
//--------------------------------------------------------------------------
            
    SpeakerPackery('.speaker-grid-1','.speaker-grid-1__item');
    function SpeakerPackery($contain,$item){

        $($contain).packery({
            // options
            itemSelector: $item,
        });

    }

        
//------------------END PACKERY LAYOUT-------------------------------------



//------------------  MANSORY LAYOUT-------------------------------------
//--------------------------------------------------------------------------

    $(window).on('load',function(){

    $('.blog').isotope({
        itemSelector: '.blog__item',
        masonry: {
        columnWidth: '.blog__item',
        horizontalOrder: true,
        gutter:30
        }
        
    });
    

    $('.venue-layout-grid').isotope({
        itemSelector: '.venue-layout-grid__item',
        masonry: {
        columnWidth: '.venue-layout-grid__item',
        horizontalOrder: true
        }
    });



    $('.speaker-grid-2').isotope({
        itemSelector: '.speaker-grid-2__item',
        masonry: {
            columnWidth: '.speaker-grid-2__item',
            horizontalOrder: true,
            percentPosition:true,
            gutter:'.speaker-gutter-sizer'

        }
    });

    new WOW().init();
    });


});










