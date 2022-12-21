class User < ApplicationRecord
  has_secure_password

  has_one :profile, dependent: :destroy
  has_many :reviews, dependent: :destroy
  has_many :albums, through: :reviews
  # validations 
  validates :username, presence: true, uniqueness: true

  accepts_nested_attributes_for :profile

end
