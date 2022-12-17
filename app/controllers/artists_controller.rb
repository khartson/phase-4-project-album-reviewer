class ArtistsController < ApplicationController
include Pagy::Backend

  def index
    if params[:search]
      @pagy, @artists = pagy(Artist.search_by_name(params[:search]), items: 5)
      render json: {
        data:
          ActiveModel::Serializer::CollectionSerializer.new(
            @artists, serializer: ArtistSearchSerializer)
      }
    else 
      @pagy, @records = pagy(Artist.order(updated_at: :desc))
      render json: { data: @records,
                   **pagy_metadata(@pagy)
                  }
    end 
  end 

  def create
    artist = Artist.create!(artist_params)
    render json: artist, status: :created 
  end 

  def show 
    artist = Artist.find(params[:id])
    render json: artist
  end 

  private 

  def artist_params
    params.permit(:name, :location, :image_url)
  end 
end
