// Initiate Animation on Scroll library
AOS.init({
  duration: 600,
})


$(document).ready(function() {
  $(".dropdown").hover(           
    function() {
      if ($(window).width() > 768) { 
        console.log('hover');
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
        $(this).toggleClass('open');
      }       
    },
    function() {
      if ($(window).width() > 768) { 
        $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
        $(this).toggleClass('open');       
      }
    }
  );

  // $(".dropdown").click(function() {
  //   if ($(window).width() <= 768) {
  //     $(this).find('ul').toggle();
  //   }
  // });

  // Validate Subscribe Form
  $('.subscribe-form').validate({
    rules: {
      firstName: "required",
      lastName: "required",
      email: {
        required: true,
        email: true
      }
    }
  });

  // Alternate Team Member Row
  if($(".team-member-row")[0]) {
    var flipRows = $( ".team-member-row:odd" );
    $.each(flipRows, function() {
      var leftColumn = $(this).find('.col-sm-3');
      var rightColumn = $(this).find('.col-sm-9');
      leftColumn.addClass('col-sm-push-9');
      rightColumn.addClass('col-sm-pull-3');
    })
  }

});
