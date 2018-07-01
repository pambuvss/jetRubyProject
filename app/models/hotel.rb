class Hotel < ApplicationRecord
	has_many :reviews
	validates :name, presence: true,
                    length: { minimum: 5 }
    mount_uploader :photo, ImageUploader
end
