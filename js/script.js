$(document).ready(function() {
  var $footerPortfolio = $('#footer-portfolio'),
      $footerAbout = $('#footer-about'),
      $footerContact = $('#footer-contact'),
      $footerSent = $('#footer-contact-sent'),
      $clickPortfolio = $('#clickPortfolio'),
      $clickAbout = $('#clickAbout'),
      $clickContact = $('#clickContact'),
      $arrowImg = $('#footer-start img'),
      $arrowTxt = $('#footer-start span'),
      sentUrl = window.location.href;

  $footerPortfolio.hide();
  $footerSent.hide();
  $footerAbout.hide();
  $footerContact.hide();
  $arrowTxt.hide();

  $arrowImg.hover(function() {
    $arrowTxt.show('fade', 800);
    },function() {
      $arrowTxt.hide('fade');
    });

  $clickPortfolio.click(function() {
    event.preventDefault();
    $footerAbout.slideUp(500);
    $footerContact.slideUp(600);
    $footerPortfolio.slideToggle(500);
  });

  $clickAbout.click(function() {
    event.preventDefault();
    $footerPortfolio.slideUp(500);
    $footerContact.slideUp(500);
    $footerAbout.slideToggle(500);
  });

  $clickContact.click(function() {
    event.preventDefault();
    $footerPortfolio.slideUp(500);
    $footerAbout.slideUp(500);
    $footerContact.slideToggle(500);
  });

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