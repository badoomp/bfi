$(document).ready(function() {
  var blogPreviews = $('.blog-preview');
  $.each(blogPreviews, function(){
    var backgroundImage = $(this).data('bg-image');
    if (backgroundImage) {
      $(this).css('background-image', 'url(' + backgroundImage) + ')';
    } else {
      $(this).css('background-image', 'url(/themes/custom/bfi/images/bfi-logo-blog.png)');
    }
  });
});