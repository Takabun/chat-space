##membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


##messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|grounp|references|null: false, foreign_key: true|
|user|references|null: false, foreign_key: true|
### Association
 - belongs_to: user
 - belongs_to: group


##usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|e-mail|string|null: false|
### Association
- has_many :messages
- has_many :groups, through: :members
- has_many :members


##groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|

### Association
- has_many :users, through: :members
- has_many :messages
- has_many :members