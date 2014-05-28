$(document).ready(function() {
  var $footerAbout = $('#footer-about'),
      $footerContact = $('#footer-contact'),
      $clickAbout = $('#clickAbout'),
      $clickContact = $('#clickContact'),
      $arrowImg = $('#footer-start img'),
      $arrowTxt = $('#footer-start span');

  $footerAbout.hide();
  $footerContact.hide();
  $('#footer-start span').hide();

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

});