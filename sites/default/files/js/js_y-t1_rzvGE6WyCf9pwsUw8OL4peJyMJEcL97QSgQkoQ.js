AOS.init({
  duration: 600,
})


$(document).ready(function() {
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
});
;
