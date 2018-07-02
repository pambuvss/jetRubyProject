class ReviewsController < ApplicationController
  def create
    @hotel = Hotel.find(params[:hotel_id])
    @review = @hotel.reviews.create(review_params)
    redirect_to hotel_path(@hotel)
    @hotel.reviews.each do |review|
  		
	end
  end
 
  private
    def review_params
      params.require(:review).permit(:name,:descr, :rate)
    end
end
