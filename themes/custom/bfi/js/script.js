// Initiate Animation on Scroll library
AOS.init({
  duration: 600,
})


$(document).ready(function() {
  $(".dropdown").hover(           
    function() {
      if ($(window).width() > 768) { 
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

  $('.dropdown-toggle').click(function() {
    var goTo = $(this).attr('href');
    if ($(window).width() > 768) { 
      window.location.href = goTo;
    } else {
      if ($(this).attr('aria-expanded') == "true") {
      window.location.href = goTo;
      }
    }
  })

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
