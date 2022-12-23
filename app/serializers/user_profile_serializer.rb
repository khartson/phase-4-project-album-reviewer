class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :username, :created_at
  has_one :profile
  has_many :albums, through: :reviews

end
