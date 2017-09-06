$(document).foundation();

// Re-Initialize Foundation

Foundation.reInit(['orbit', 'accordion', 'tabs']);

// Parallax Page Header

$(document).ready(function(){
    $(window).scroll(function(e){
      parallax();
    });

    function parallax(){
      var scrolled = $(window).scrollTop();
      $('.l-herobanner.home').css('top',-(scrolled*0.0315)+'rem');
      $('.l-herobanner.home > h1').css('top',-(scrolled*-0.005)+'rem');
      $('.l-herobanner.home > h1').css('opacity',1-(scrolled*.00175));
    };
});

// Display Menu on Scroll

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll > 450) {
        $(".desktop-menu.home").addClass("stick").fadeIn(); 
    } else {
        $(".desktop-menu.home").removeClass("stick");
    }
});

