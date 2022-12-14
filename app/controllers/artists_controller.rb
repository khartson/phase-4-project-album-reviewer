class ArtistsController < ApplicationController
include Pagy::Backend

  def index
    @pagy, @records = pagy(Artist.all)
    render json: { data: @records,
                   **pagy_metadata(@pagy)
                  }
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
