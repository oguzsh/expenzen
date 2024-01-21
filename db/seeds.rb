require 'faker'

# Clear existing users
User.destroy_all
2.times do |n|
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  middle_name = Faker::Name.middle_name

  email = "example-#{n + 1}@gmail.org"
  password = 'password'

  User.create!({ first_name: first_name, last_name: last_name, middle_name: middle_name, email: email, password: password, password_confirmation: password })
end

# Clear existing categories
Category.destroy_all
# Create Categories
12.times do
  Category.create!(name: Faker::Commerce.unique.department)
end

# Clear existing accounts
Account.destroy_all
# Create Accounts for Users
User.all.each do |user|
  3.times do
    Account.create!(
      user: user,
      name: Faker::Bank.unique.name,
      balance: Faker::Commerce.price(range: 1000..10_000.0),
      account_type: %w[savings checking].sample
    )
  end
end

# Clear existing data
Income.destroy_all
Expense.destroy_all
Transaction.destroy_all

20.times do
  income = Income.create!(
    recurring_period: Income.recurring_periods.keys.sample,
    category: Category.all.sample,
    income_date: Faker::Date.backward(days: 30),
    account: Account.first,
    user: User.all.sample
  )

  expense = Expense.create!(
    recurring_period: Expense.recurring_periods.keys.sample,
    category: Category.all.sample,
    expense_date: Faker::Date.backward(days: 30),
    account: Account.first,
    user: User.all.sample
  )

  transactable = [income, expense].sample # Randomly select Income or Expense
  Transaction.create!(
    transaction_date: Faker::Date.backward(days: 30),
    amount: Faker::Number.decimal(l_digits: 3, r_digits: 2),
    user: User.all.sample,
    transactable: transactable
  )
end

puts 'Seeding complete!'
