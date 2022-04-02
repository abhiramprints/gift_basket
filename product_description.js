$(document).ready
(function() {
    $('.shape-choose button').on('click', function() {
        var productshape = $(this).attr('data-image');
  
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + productshape + ']').addClass('active');
        $(this).addClass('active');
    });
  }
);  

$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var productColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + productColor + ']').addClass('active');
      $(this).addClass('active');
  });

});