require 'faker'

2.times do |n|
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  middle_name = Faker::Name.middle_name

  email = "example-#{n + 1}@gmail.org"
  password = 'password'

  User.create!({first_name: first_name, last_name: last_name, middle_name: middle_name, email: email, password: password, password_confirmation: password })
end

# Create Categories
12.times do
  Category.create!(name: Faker::Commerce.unique.department)
end

# Create Accounts for Users
User.all.each do |user|
  3.times do
    Account.create!(
      user: user,
      name: Faker::Bank.name,
      balance: Faker::Commerce.price(range: 1000..10_000.0),
      account_type: %w[savings checking].sample
    )
  end
end

# Create Transactions for Accounts
# Account.all.each do |account|
#   4.times do
#     Transaction.create!(
#       transaction_date: Faker::Date.between(from: 30.days.ago, to: Time.zone.now),
#       amount: Faker::Commerce.price(range: 1.0..1000.0),
#     )
#   end
# end

puts 'Seeding complete!'
