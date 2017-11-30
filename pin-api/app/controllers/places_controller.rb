class PlacesController < ApplicationController
  def index
    @places = Place.all
    render json: @places
  end

  # POST /places
  def create
    @place = Place.create!(place_params)
    render json: @place
  end

  # GET /places/:id
  def show
    @place = Place.find(params[:id])
    render json: @place
  end

  # PUT /places/:id
  def update
    @place = Place.find(params[:id])
    @place.update(place_params)
    head :no_content
  end

  # DELETE /places/:id
  def destroy
    @place = Place.find(params[:id])
    @place.destroy
    head :no_content
  end
end
