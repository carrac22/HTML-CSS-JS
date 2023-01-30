$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0}, "fast");
    });

    // toggling menu bar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    });


    // typing animation
    var typed = new Typed(".typing", {
        strings: ["Hola, me llamo", "Hallo, ich heiße", "Hello, my name is"],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    // owl carousel script
    $(".carousel").owlCarousel({
        margin: 35, 
        loop:true,
        autoplayTimeOut: 2000, 
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            800:{
                items: 1,
                nav:false
            },
            1000:{
                items: 2,
                nav:false
            },
            1200:{
                items: 3,
                nav: false
            }
        },
    
    });
});

    