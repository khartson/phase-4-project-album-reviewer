class Profile < ApplicationRecord
  belongs_to :user

  validates :name, presence: true

  def avatar_url
    self.user.pfp_url
  end 

  def username
    self.user.username
  end 

  def bio
    self.user.bio
  end 

end
