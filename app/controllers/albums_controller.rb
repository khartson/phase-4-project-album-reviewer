class AlbumsController < ApplicationController
include Pagy::Backend 

  def create
    album = Album.create!(album_params)
    render json: album, status: :created
  end 

  def index
    @pagy, @records = pagy(Album.order(updated_at: :desc))
    render json: { 
    data:  
      ActiveModel::Serializer::CollectionSerializer.new(
        @records, serializer: AlbumSerializer),
    **pagy_metadata(@pagy)
  }

  end 

  def show 
    album = Album.find(params[:id])
    render json: album
  end 

  private
  
  def album_params
    params.permit(:title, :artist_id, :album_art_url)
  end 

end
