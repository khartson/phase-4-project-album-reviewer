class Album < ApplicationRecord

  belongs_to :artist 
  has_many :reviews
  has_many :users, through: :reviews

  validates :title, presence: true
  validates :artist, presence: true
  validates :album_art_url, presence: true

  validate :artist_already_has_this_album, on: :create

  def artist_already_has_this_album
    if Album.where("LOWER(title) = ? AND artist_id = ?", self.title.downcase, self.artist_id).exists?
      then errors.add('Album already exists for: ', self.artist.name)
    end 
  end 

end
