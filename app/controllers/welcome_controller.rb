class WelcomeController < ApplicationController
  def index
    @hotels = Hotel.order('rate DESC LIMIT 5')
  end
end
