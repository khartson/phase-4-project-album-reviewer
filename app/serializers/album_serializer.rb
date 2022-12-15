class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :album_art_url
  has_one :artist, serializer: AlbumArtistSerializer
end
