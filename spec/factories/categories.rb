# == Schema Information
#
# Table name: categories
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_categories_on_name  (name) UNIQUE
#
FactoryBot.define do
  factory :category do
    name { Faker::Lorem.word }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
