class AlbumsController < ApplicationController
include Pagy::Backend 
  def create
  end 

  def index
    @pagy, @records = pagy(Album.all)
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
