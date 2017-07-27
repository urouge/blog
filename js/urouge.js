$(document).ready(function(){
  $('.collapsible')
      .off('click')
      .hover(function() {
          var li = $(this).children('li');
          li.toggleClass('active');
          li.children('div.collapsible-header').toggleClass('active');
      });

  $('.button-collapse').sideNav();

  $('#back-to-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 700)
  });
});
