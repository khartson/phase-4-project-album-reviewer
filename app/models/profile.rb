class Profile < ApplicationRecord
  belongs_to :user

  validates :name, presence: true

  def avatar_url
    self.user.pfp_url
  end 

end
