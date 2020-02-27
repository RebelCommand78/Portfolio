
$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 0});   
  
  var isMobile;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
      )
      ) {
        isMobile = true;
        
        // Mobile height fix
        $(".height-fix").each(function() {
          var h = $(this).height();
          $(this).height(h);
        });
      }
      
      // Sticky Nav on Mobile
      if (isMobile) {
        $("nav").addClass("fixed");
      } else {
        $("nav").addClass("desk");
      }
      
      // NAV POSITION
      var navPos = $("nav").position().top;
      var lastPos = 0;
      var lockTimer;
      
      $(window).on("scroll", function() {
        var pos = $(window).scrollTop();
        
        
        if (!isMobile) {
          if (pos >= navPos + $("nav").height() && lastPos < pos) {
            $("nav").addClass("fixed");
          }
          if (pos < navPos && lastPos > pos) {
            $("nav").removeClass("fixed");
          }
          lastPos = pos;
        }    
      });
      
      // Prevent Hover on Scroll
      
      clearTimeout(lockTimer);
      if (!$("body").hasClass("disable-hover")) {
        $("body").addClass("disable-hover");
      }
      
      lockTimer = setTimeout(function() {
    $("body").removeClass("disable-hover");
  }, 500);
  
  // EVENT HANDLERS

  // CONTACT FORM

});