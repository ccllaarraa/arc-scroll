

$(window).on('scroll', function() {
    if ($(window).scrollTop() >= 1) {
       startAnim();
    }

});





// on click
 function startAnim()  {
    gsap.to('.logo--left', {
        top: 30,
        left: 30,
        duration: 0.25,
        start: "top top",
        end: "+=100%",
        ease: "none", 
        
    });
    gsap.to('.logo--right', {
        bottom: 30,
        right: 30,
        duration: 0.25,
        ease: "none",
        start: "top top",
        end: "+=100%"
    });
    gsap.to(".hiddenImage video", {
        scale: 1,
    });

        
        $("#cent").addClass("relative");
        $("#hi").addClass("fadeIn");
         $("#overflow").addClass("noscroll");
       
       
         setTimeout(function() {  
             $("#overflow").addClass("scroll") }
             , 1000);


        $("#videoid").addClass("bigger");
        $("#logoleft").addClass("fixed");
        $("#logoright").addClass("fixed");


 }



 gsap.to(".hiddenImage", {
    scrollTrigger: {
        trigger: ".hiddenImage",
        start: "bottom 190px ",
        end: "bottom 190px",
        // toggleActions: "restart pause reverse reset",
        toggleActions: "play revert pause reset",
        scrub: true,
    },
    duration: .1,
    scale: 0.3,
    filter:"blur(4px)"
});


// fix video
$(window).scroll(function() {    
    var scrollBottom = $(window).scrollTop();
    if (scrollBottom >= $(
        '.end-of-video').offset().top + $('.end-of-video').
          outerHeight() - window.innerHeight + 200) {
        $(".hiddenImage").addClass("ciao");
    } else {
        $(".hiddenImage").removeClass("ciao");
    }
});

// test on scroll




// show sub logo
$(window).scroll(function() {    
    var scrollBottom = $(window).scrollTop();
    if (scrollBottom >= $(
        '.text--ctn').offset().top + $('.text--ctn').
          outerHeight() - window.innerHeight + 300) {
        $("#logoright").addClass("rightmeetsub");
        $("#logoleft").addClass("leftmeetsub");
        $(".logo-sub").addClass('logo-bigger');
    } else {
        $("#logoright").removeClass("rightmeetsub");
        $("#logoleft").removeClass("leftmeetsub");
        $(".logo-sub").removeClass('logo-bigger');
    }
});


$(window).on('scroll', function() {
    if ($(window).scrollTop() >= $(
      '.text--ctn').offset().top + $('.text--ctn').
        outerHeight() - window.innerHeight - 200) {
        $("#logoleft").addClass("leftmeet");
        $("#logoright").addClass("rightmeet");
    
    } else {
        $("#logoleft").removeClass("leftmeet");
        $("#logoright").removeClass("rightmeet");
    }

});


