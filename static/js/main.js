/**
 * Here might be a main JavaScript code
  */

$(document).ready(function() {

   $('.navbar-toggle').on('click', function() {
       const target = $(this).attr('data-target');
       $(target).slideToggle();
   });

});
