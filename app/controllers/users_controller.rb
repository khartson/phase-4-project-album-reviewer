class UsersController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: created 
  end 

  def show 
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else 
      render json: { error: "Unauthorized", status: :unauthorized}
    end 
  end 

  private 
  
  def user_params
    params.permit(:username, :password, :password_confirmation, :name, :bio, :pfp_url)
  end 

  def render_unprocessable_entity_response(invalid)
    render josn: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end 

end
