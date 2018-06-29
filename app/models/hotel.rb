class Hotel < ApplicationRecord
	validates :name, presence: true,
                    length: { minimum: 5 }
    mount_uploader :photo, ImageUploader
end
