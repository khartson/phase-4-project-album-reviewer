class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :bio, :pfp_url, :timestamps
end
