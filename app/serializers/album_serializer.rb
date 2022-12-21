class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :album_art_url, :user_reviewed
  has_one :artist, serializer: AlbumArtistSerializer
  has_many :reviews, serializer: ReviewUserSerializer

  def user_reviewed
    self.object.users.exists?(id: @instance_options[:current_user_id])
  end 
end
