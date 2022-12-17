class Artist < ApplicationRecord
include PgSearch::Model
  validates :name, presence: true, uniqueness: { case_sensitive: false}

  has_many :albums

  pg_search_scope :search_by_name, against: :name, using: [:tsearch, :trigram]

end
