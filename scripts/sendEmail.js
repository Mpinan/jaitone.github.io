$(document).ready(function() {
        $('#contact-form').submit(function(e) {
          var name    = document.getElementById('username')
          var email   = document.getElementById('mail')
          var message = document.getElementById('text')
      
          if (!name.value || !email.value || !message.value) {
            alertify.error("Please check your entries");
            return false;
          } else {
            $.ajax({
              method: 'POST',
              url: '//formspree.io/mgpinan1990@gmail.com',
              data: $('#contact-form').serialize(),
              datatype: 'json'
            });
            e.preventDefault();
            $(this).get(0).reset();
            alertify.success("Message sent");
          }
        });
      });