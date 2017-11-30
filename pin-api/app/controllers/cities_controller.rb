class CitiesController < ApplicationController
  def index
    @cities = City.all
    render json: @cities
  end

  # POST /cities
  def create
    @city = City.create!(city_params)
    render json: @city
  end

  # GET /cities/:id
  def show
    @city = City.find(params[:id])
    render json: @city
  end

  # PUT /cities/:id
  def update
    @city = City.find(params[:id])
    @city.update(city_params)
    head :no_content
  end

  # DELETE /cities/:id
  def destroy
    @city = City.find(params[:id])
    @city.destroy
    head :no_content
  end

  private

    def city_params
      params.permit(:id, :user_id, :city, :start_date, :end_date, :photo)
    end
end
