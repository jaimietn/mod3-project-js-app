class User < ApplicationRecord
  has_many :records
  has_many :tasks
  validates :username, uniqueness: true
end
