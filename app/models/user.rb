class User < ApplicationRecord
  has_secure_password

  has_one :profile

  # validations 
  validates :username, presence: true, uniqueness: true

  accepts_nested_attributes_for :profile

end
