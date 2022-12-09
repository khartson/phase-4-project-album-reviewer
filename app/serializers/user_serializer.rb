class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :bio, :pfp_url, :timestamps
  has_one :profile
end
