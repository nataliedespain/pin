class City < ApplicationRecord
  has_many :places, dependent: :destroy
  # belongs_to :user, through: :cities
end
