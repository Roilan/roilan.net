$(document).ready(function() {
  var $footerAbout = $('#footer-about'),
      $footerContact = $('#footer-contact'),
      $footerSent = $('#footer-contact-sent');

  var $loadHide = $('.loadHide');
  var sentUrl = window.location.href;

  // Accordion slide function
  function myClick(obj) {
    // Checks if hidden and slides up.
    if (obj.css('display') == 'none'){
      $loadHide.slideUp(500);

      // Slides development section if not hidden
      var $dev = $('.dev-menu');
      if ($dev.css('display') != 'none') {
        $dev.slideUp(600);
      }
      // Allows self clicking to be hide/show
      obj.slideToggle(500);
    } else {
      obj.slideUp(500);
    }
  }

  $('.clickDev').on('click', function(e) {
    e.preventDefault();
    myClick($('.dev-menu'));
  });

  $('.clickHost').on('click', function(e) {
    e.preventDefault();
    myClick($('.host-menu'));
  });

  $('.clickSys').on('click', function(e) {
    e.preventDefault();
    myClick($('.sys-menu'));
  });

  if (sentUrl.search("#sent") >= 0) {
    $footerContact.slideUp(500);
    $footerSent.slideDown(800);
  }

  $('.lightbox').magnificPopup({
    type: 'image',
    closeBtnInside: false,
    closeOnContentClick: true,

    image: {
      verticalFit: true,
      titleSrc: function(item) {
        return item.el.attr('title');
      }
    }
  });

});