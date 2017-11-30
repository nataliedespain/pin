class FollowsController < ApplicationController
  # checks following by user id
  def following
    @following = User.find(params[:id]).following
    render json: @following
  end

  # checks followers by user id
  def followers
    @followers = User.find(params[:id]).followers
    render json: @followers
  end

  def index
    @follows = Follow.all
    render json: @follows
  end

  # POST /follows
  def create
    @follow = Follow.create!(follow_params)
    render json: @follow
  end

  # GET /follows/:id
  def show
    @follow = Follow.find(params[:id])
    render json: @follow
  end

  # PUT /follows/:id
  def update
    @follow = Follow.find(params[:id])
    @follow.update(follow_params)
    head :no_content
  end

  # DELETE /follows/:id
  def destroy
    @follow = Follow.find(params[:id])
    @follow.destroy
    head :no_content
  end
end
