class ReviewsController < ApplicationController
  def create
    @hotel = Hotel.find(params[:hotel_id])
    @review = @hotel.reviews.create(review_params)

    rate =0
     @hotel.reviews.each do |r|
         rate += r.rate
    end
     rate /= @hotel.reviews.count.to_f
     @hotel.rate = eval(sprintf("%.2f",rate))
    @hotel.save
    redirect_to hotel_path(@hotel)
  end
 
  private
    def review_params
      params.require(:review).permit(:name,:descr, :rate)
    end
end
