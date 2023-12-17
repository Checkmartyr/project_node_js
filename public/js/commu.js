var main = function() {
    $('.btn').click(function() {
      var post = $('.status-box').val();
      $('<li>').text(post).prependTo('.posts');
      $('.status-box').val('');
      $('.counter').text('250');
      $('.btn').addClass('disabled');
    });
    $('.status-box').keyup(function() {
      var postLength = $(this).val().length;
      var charactersLeft = 250 - postLength;
      $('.counter').text(charactersLeft);
      if (charactersLeft < 0) {
        $('.btn').addClass('disabled');
      } else if (charactersLeft === 250) {
        $('.btn').addClass('disabled');
      } else {
        $('.btn').removeClass('disabled');
      }
    });
  }
  $('.btn').addClass('disabled');
  $(document).ready(main)