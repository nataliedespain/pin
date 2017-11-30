class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  # POST /users
  def create
    @user = User.create!(user_params)
    render json: @user
  end

  # GET /users/:id
  def show
    @user = User.find(params[:id])
    render json: @user
  end

  # PUT /users/:id
  def update
    @user = User.find(params[:id])
    @user.update(user_params)
    head :no_content
  end

  # DELETE /users/:id
  def destroy
    @user = User.find(params[:id])
    @user.destroy
    head :no_content
  end

  def follow(user_id)
    following_relationships.create(following_id: user_id)
  end

  def unfollow(user_id)
    following_relationships.find_by(following_id: user_id).destroy
  end
end
