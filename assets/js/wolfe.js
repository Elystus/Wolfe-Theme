$(document).ready( function() {
    
    // Menu Fixed Handler
    var  pageheadHeight  = $('#blog-masthead').height(),
         pageMenu        = $('#blog-menu');

    menuAlign();

    $(window).scroll( function() {
        menuAlign();
    });

    function menuAlign() {
        var windowTop = $(window).scrollTop();

        if(windowTop > pageheadHeight) {
            pageMenu.removeClass('brand-hidden');
            pageMenu.removeClass('blog-menu-inline');
        } else if (windowTop < pageheadHeight) {
            pageMenu.addClass('brand-hidden');
            pageMenu.addClass('blog-menu-inline');
        }
    }

    // Dropdown Menu Handler
    var  dropdownToggle  = $('#dropdown-toggle'),
         dropdownMenu    = $('#dropdown-menu');
    
    dropdownToggle.click(function() {
        if(dropdownMenu.is(":visible"))
            dropdownMenu.slideUp("slow");
        else
            dropdownMenu.slideDown("slow");
    });        
});