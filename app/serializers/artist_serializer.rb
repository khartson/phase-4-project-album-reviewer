class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :image_url
  has_many :albums
end
