json.array! @new_messages do |new_message|
  json.text new_message.content
  json.image new_message.image_url
  json.date new_message.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.user_name new_message.user.name
  json.id new_message.id
end