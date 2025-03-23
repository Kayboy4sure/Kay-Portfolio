$(document).ready(function () {
  $('.nav-toggle').click(function () {
      var collapse_content_selector = $(this).attr('href');
      var toggle_switch = $(this);
      $(collapse_content_selector).toggle(function () {
          if ($(this).css('display') == 'none') {
              toggle_switch.html('Discover More');
          } else {
              toggle_switch.html('Close');
          }
      });
  });

});



(function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      setTimeout(()=>{
        $('.preloader').fadeOut(1000); // set duration in brackets
      }, 3000);    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);


