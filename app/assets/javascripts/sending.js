$(function(){
  function buildHTML(message){
    if ( message.image ) {
    var html = 
    `<div class="message"  data-message-id=${message.id}>
      <div class="upper-info">
        <div class="message__user">
          ${message.user_name}
        </div>
        <div class="upper-message__date">
          ${message.date}
        </div>
      </div>
      <div class="lower-message">
        <p class="lower-message__content">
          ${message.text}
        </p>
      </div>
      <img src=${message.image}>
    </div>`
    return html;
      } else {
        var html =
    `<div class="message"  data-message-id=${message.id}>
      <div class="upper-info">
        <div class="message__user">
          ${message.user_name}
        </div>
        <div class="upper-message__date">
          ${message.date}
        </div>
      </div>
      <div class="lower-message">
        <p class="lower-message__content">
          ${message.text}
        </p>
      </div>
    </div>`
    return html;
      };
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
        //dataの中身を確認するよう console.log(data)
          var html = buildHTML(data);  //buildHTML(3行目-)の中身をvar htmlへ代入
          $('.messages').append(html)  //htmlの内容を、messagesの一番下へ表示！！
          $('form')[0].reset();
          $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
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