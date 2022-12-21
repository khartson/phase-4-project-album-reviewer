class ReviewUserSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating
  belongs_to :user, serializer: UserProfileSerializer
end
