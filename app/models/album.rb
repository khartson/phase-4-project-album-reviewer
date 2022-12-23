class Album < ApplicationRecord
include PgSearch::Model

  belongs_to :artist 
  has_many :reviews
  has_many :users, through: :reviews

  validates :title, presence: true
  validates :artist, presence: true
  validates :album_art_url, presence: true

  pg_search_scope :search_by_title, against: :title, using: [:tsearch, :trigram]

  validates :title, uniqueness: { scope: :artist, case_sensitive: false, message: "Already exists for this artist"}

end
