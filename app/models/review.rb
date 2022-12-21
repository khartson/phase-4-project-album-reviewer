class Review < ApplicationRecord
  belongs_to :user
  belongs_to :album

  validates :rating, presence: true
  validates :content, length: { in: 15..180 }
  validates :user, uniqueness: { scope: :album, 
  message: "You've already reviewed this album"}
end
