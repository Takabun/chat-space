$(function(){

  function buildHTML(message){
    var html = `<p>

                  ${message}
                </p>`
    return html;
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.text').append(html)
        $('.textbox').val('')
        $('.messages').animate({scrollTop: $('.messages').prop('scrollHeight')}, 500);
      })

      .fail(function(){
        alert('error');
      })

      .always(function() {
        $('.form__submit').prop('disabled', false);
      });

    })
})


// $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight});
//          $('.submit').prop('disabled', false)

// // // // {/* <strong>
// // // // <a href=/groups/${message.group_id}</a>
// // // // ：
// // // // </strong> */}