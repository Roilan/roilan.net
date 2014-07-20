$(document).ready(function() {
  var $footerPortfolio = $('#footer-portfolio'),
      $footerAbout = $('#footer-about'),
      $footerContact = $('#footer-contact'),
      $footerSent = $('#footer-contact-sent');

  var $clickPortfolio = $('#clickPortfolio'),
      $clickAbout = $('#clickAbout'),
      $clickContact = $('#clickContact');

  var $loadHide = $('.loadHide');

  var sentUrl = window.location.href;

  $loadHide.hide();

  function myClick(obj) {
    if (obj.css('display') == 'none'){
      $loadHide.slideUp(500);

      // Slides development section if not hidden
      var d = $('.dev-menu');
      if ($(d).css('display') != 'none') {
        $(d).slideUp(600);
      }

      obj.slideToggle(500);
    } else {
      obj.slideUp(500);
    }
  }

  $('.clickDev').on('click', function(e) {
    e.preventDefault();
    myClick($('.dev-menu'));
  });

   /* $clickAbout.click(function(event) {
    event.preventDefault();
    myClick($footerAbout); }
  ); */

  $('.clickHost').on('click', function(e) {
    e.preventDefault();
    myClick($('.host-menu'));
  });

  $clickContact.click(function(event) {
    event.preventDefault();
    myClick($footerContact); }
  );

  if (sentUrl.search("#sent") >= 0) {
    $footerContact.slideUp(500);
    $footerSent.slideDown(800).delay(1000).slideUp(800);
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