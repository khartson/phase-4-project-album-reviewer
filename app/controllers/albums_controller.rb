class AlbumsController < ApplicationController
 

  def create

  end 

  def index
    render json: Album.all
  end 

  def show 
    album = Album.find_by(params[:id])
  end 

end
