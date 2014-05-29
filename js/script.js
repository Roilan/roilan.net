$(document).ready(function() {
  var $footerAbout = $('#footer-about'),
      $footerContact = $('#footer-contact'),
      $footerSent = $('#footer-contact-sent'),
      $clickAbout = $('#clickAbout'),
      $clickContact = $('#clickContact'),
      $arrowImg = $('#footer-start img'),
      $arrowTxt = $('#footer-start span'),
      sentUrl = window.location.href;

  $footerSent.hide();
  $footerAbout.hide();
  $footerContact.hide();
  $arrowTxt.hide();

  $arrowImg.hover(function() {
    $arrowTxt.show('fade', 800);
    },function() {
      $arrowTxt.hide('fade');
    });

  $clickAbout.click(function() {
    event.preventDefault();
    $footerContact.slideUp(500);
    $footerAbout.slideToggle(500);
  });

  $clickContact.click(function() {
    event.preventDefault();
    $footerAbout.slideUp(500);
    $footerContact.slideToggle(500);
  });

  if (sentUrl.search("#sent") >= 0) {
    $footerContact.slideUp(500);
    $footerSent.slideDown(800).delay(1000).slideUp(800);
  }
});