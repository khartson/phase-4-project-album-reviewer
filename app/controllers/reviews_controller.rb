class ReviewsController < ApplicationController

  def create
    review = Review.create!(**review_params, user_id: @current_user.id)
    render json: review, status: :created, include: ['user', 'user.profile'], current_user: @current_user
  end 

  def index
    if params[:user_id]
      render json: Review.where("user_id = ?", params[:user_id]), include: ['user', 'user.profile'], current_user: @current_user
    elsif params[:album_id]
      render json: Review.where("album_id = ?", params[:album_id]), include: ['user', 'user.profile'], current_user: @current_user
    end
  end 

  def update
    review = find_review
    if current_user?(review)
      review.update!(review_params)
      render json: review, include: ['user', 'user.profile'], current_user: @current_user
    end 
  end 

  def show 
    review = find_review 
    render json: review, include: ['user', 'user.profile'], current_user: @current_user
  end 

  def destoy
  end 
  
  private
  
  def review_params
    params.permit(:album_id, :content, :rating)
  end 

  def find_review
    review = Review.find(params[:id])
  end 

  def current_user?(review)
    if review.user.id === @current_user.id
      return true
    else 
      render json: { error: "Not authorized" }, status: :unauthorized 
      return false
    end 
  end 

end
