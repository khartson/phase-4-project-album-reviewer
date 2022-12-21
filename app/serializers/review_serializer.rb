class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content, :current_user_review
  has_one :user, serializer: UserProfileSerializer

  def current_user_review
    if object.user_id === @instance_options[:current_user].id
      return true
    end 
    return false 
  end 
end
