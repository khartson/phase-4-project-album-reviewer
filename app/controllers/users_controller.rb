class UsersController < ApplicationController

  skip_before_action :authorize, only: :create

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created 
  end 

  def show 
    user = User.find(params[:id])
    render json: user, serializer: UserProfileSerializer
  end 

  def update
    user = @current_user
    if user
      user.update!(user_params)
      render json: user
    else 
      render json: { error: "User not found" }, status: :not_found
    end 
  end 

  def auth
    render json: @current_user
  end 

  private 
  
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation, profile_attributes: [:id, :name, :bio, :pfp_url])
  end 

end
