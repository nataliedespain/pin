class FeedController < ApplicationController
  # Get a users feed
  def feed
    @following = User.find(params[:id]).following
    @posts = @following.map do |u|
      u.cities
    end
    render json: @posts
  end
end
