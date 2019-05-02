membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string||
|grounp_id|references :group|null: false, foreign_key: true|
|user_id|references :user|null: false, foreign_key: true|
### Association
 - belongs_to: users
 - belongs_to: group

usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_name|text|null: false, foreign_key: true|
### Association
- has_many :messages
- has_many :groups, through: :members
- has_many :members

groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|text|null: false, foreign_key: true|

### Association
- has_many :users, through: :members
- has_many :messages
- has_many :members