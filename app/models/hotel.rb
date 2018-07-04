class Hotel < ApplicationRecord
  has_many :reviews
  validates :name, :star, :descr, :photo, :addr1,
            :addr2, :addr3, :addr4, :rate, :price, presence: true
  mount_uploader :photo, ImageUploader
end
