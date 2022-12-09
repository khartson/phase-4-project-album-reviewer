class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar_url, :username
end
