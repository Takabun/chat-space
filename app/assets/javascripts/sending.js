$(function(){
  function buildHTML(message){
    message.text ? temptext = message.text : temptext = ""
    message.image ? tempimage = message.image : tempimage = ""
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
          ${temptext}
        </p>
      </div>
      <img src=${tempimage}>
    </div>`
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


    $(function() {
      
        var reloadMessages = function() {
          last_message_id = $(".message").last().data("message-id")  //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
          
          $.ajax({
            url: location.href, //ルーティングで設定した通りのURLを指定..文字列で相対パスとは？
            type: 'get',
            dataType: 'json',
            data: {id: last_message_id},  //dataオプションでリクエストに値を含める
          })
          .done(function(data) {
            var insertHTML = '';
             data.forEach(function(messages){
            insertHTML = buildHTML(messages)
            $('.messages').append(insertHTML) 
            });
            $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
          })

          .fail(function() {
            console.log('error');
          });
        };

        setInterval(reloadMessages, 5000);
      });
})