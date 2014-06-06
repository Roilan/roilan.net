$(document).ready(function() {
  var $footerPortfolio = $('#footer-portfolio'),
      $footerAbout = $('#footer-about'),
      $footerContact = $('#footer-contact'),
      $footerSent = $('#footer-contact-sent');

  var $clickPortfolio = $('#clickPortfolio'),
      $clickAbout = $('#clickAbout'),
      $clickContact = $('#clickContact');

  var $arrowImg = $('#footer-start img'),
      $arrowTxt = $('#footer-start span');

  var $loadHide = $('.loadHide');

  var sentUrl = window.location.href;

  $arrowTxt.hide();
  $loadHide.hide();

  $arrowImg.hover(function() {
    $arrowTxt.show('fade', 800);
    },function() {
      $arrowTxt.hide('fade');
    });

  function myClick(obj) {
    if (obj.css('display') == 'none'){
      $loadHide.slideUp(500);
      obj.slideToggle(500);
    } else {
      obj.slideUp(500);
    }
  }

  $clickPortfolio.click(function(event) {
    event.preventDefault();
    myClick($footerPortfolio); }
  );

  $clickAbout.click(function(event) {
    event.preventDefault();
    myClick($footerAbout); }
  );

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