class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :pfp_url, :bio
  belongs_to :user
end
