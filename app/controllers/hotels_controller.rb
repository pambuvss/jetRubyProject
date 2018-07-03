class HotelsController < ApplicationController

def index
    @hotels = Hotel.all.paginate(page: params[:page], per_page: 5)
  end

def show
    @hotel = Hotel.find(params[:id])
  end

	def new
  @hotel = Hotel.new
end

def edit
  @hotel = Hotel.find(params[:id])
end
 
def create
  @hotel = Hotel.new(hotel_params)
  @hotel.rate = 0
  if @hotel.save
    redirect_to @hotel
  else
    render 'new'
  end
end

def update
  @hotel = Hotel.find(params[:id])
 
  if @hotel.update(hotel_params)
    redirect_to @hotel
  else
    render 'edit'
  end
end
 

 def destroy
  @hotel = Hotel.find(params[:id])

   @hotel.reviews.each do |r|
         r.destroy
     end
  @hotel.destroy
 
  redirect_to hotels_path
end

private
  def hotel_params
    params.require(:hotel).permit(:name, :star, :breakf, 
      :descr, :photo, :addr1,:addr2,:addr3,:addr4, :rate, :price)
  end
	
end