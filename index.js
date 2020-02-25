$(function() {
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
    var pos2 = pos + 50;
    var scrollBottom = pos + $(window).height();

    if (!isMobile) {
      if (pos >= navPos + $("nav").height() && lastPos < pos) {
        $("nav").addClass("fixed");
      }
      if (pos < navPos && lastPos > pos) {
        $("nav").removeClass("fixed");
      }
      lastPos = pos;
    }

    // Link Highlighting
    if (pos2 > $("#home").offset().top) {
      highlightLink("Home");
    }
    if (pos2 > $("#about").offset().top) {
      highlightLink("About");
    }
    if (pos2 > $("#portfolio").offset().top) {
      highlightLink("Portfolio");
    }
    if (
      pos2 > $("#contact").offset().top ||
      pos + $(window).height() === $(document).height()
    ) {
      highlightLink("Contact");
    }

    // Prevent Hover on Scroll
    clearTimeout(lockTimer);
    if (!$("body").hasClass("disable-hover")) {
      $("body").addClass("disable-hover");
    }

    lockTimer = setTimeout(function() {
      $("body").removeClass("disable-hover");
    }, 500);
  });

  function highlightLink(anchor) {
    $("nav .active").removeClass("active");
    $("nav")
      .find('[href="' + anchor + '"]')
      .addClass("active");
  }

  // EVENT HANDLERS



  // CONTACT FORM
});
