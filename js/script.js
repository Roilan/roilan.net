$(document).ready(function() {
  var $footerAbout = $('#footer-about'),
      $footerContact = $('#footer-contact'),
      $clickAbout = $('#clickAbout'),
      $clickContact = $('#clickContact');

  $footerAbout.hide();
  $footerContact.hide();

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