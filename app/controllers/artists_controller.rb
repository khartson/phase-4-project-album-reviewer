class ArtistsController < ApplicationControllers

  # def create

  # end 

  private 

  def artist_params
    params.permit(:name, :location)
  end 
end
