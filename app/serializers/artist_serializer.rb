class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :location
  has_many :albums
end
