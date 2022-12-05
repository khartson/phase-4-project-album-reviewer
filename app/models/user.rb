class User < ApplicationRecord
  has_secure_password

  # validations 
  validates :username, presence: true, uniqueness: true
  validates :name, presence: true

end
