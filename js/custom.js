// --------------------------------------------------------
// Pretty Photo for Lightbox Image
// --------------------------------------------------------
//$(document).ready(function() {
    // $("a[data-gal^='prettyPhoto']").prettyPhoto();
//});

// --------------------------------------------------------
//	Navigation Bar
// --------------------------------------------------------
$(window).scroll(function(){
    "use strict";
    var scroll = $(window).scrollTop();
    if( scroll > 60 ){
        $(".navbar").addClass("scroll-fixed-navbar");
    } else {
        $(".navbar").removeClass("scroll-fixed-navbar");
    }
});

// --------------------------------------------------------
//	Smooth Scrolling
// --------------------------------------------------------
$(".navbar-nav li a[href^='#']").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top
    }, 1000);
});

// $('#carousel').on('slid.bs.carousel', function (event) {
//     var nextactiveslide = $(event.relatedTarget).index();
//     var $btns = $('.steps-list');
//     var $active = $btns.find("[data-slide-to='" + nextactiveslide + "']");
//     $btns.find('li').removeClass('active');
//     $active.addClass('active');
//
// });

$(".carousel").swipe({
  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');
  },
  allowPageScroll:"vertical"
});
