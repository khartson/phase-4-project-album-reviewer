class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar_url
  has_one :user

end
