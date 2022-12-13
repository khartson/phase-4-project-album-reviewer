class ArtistsController < ApplicationController

  def index
    render json: Artist.all
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
