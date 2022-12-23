class Profile < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :pfp_url, presence: true
  validates :bio, length: { in: 5..100 }

end
