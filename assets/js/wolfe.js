$(document).ready(function() {
    window.onscroll = function() {
        var scrollTop     = $(window).scrollTop(),
            elementOffset = $('#navbar-offset').offset().top;
        
        var navbarElement = $('#navbar');
        
        if ( scrollTop >= elementOffset ) {
            navbarElement.addClass("navbar-fixed-top");
        } else {
            navbarElement.removeClass("navbar-fixed-top");
        }
    };
});