# == Schema Information
#
# Table name: incomes
#
#  id               :bigint           not null, primary key
#  income_date      :datetime         not null
#  is_recurring     :boolean          default(FALSE)
#  recurring_period :integer          default("not_recurring")
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  account_id       :bigint           not null
#  category_id      :bigint           not null
#
# Indexes
#
#  index_incomes_on_account_id   (account_id)
#  index_incomes_on_category_id  (category_id)
#
# Foreign Keys
#
#  fk_rails_...  (account_id => accounts.id)
#  fk_rails_...  (category_id => categories.id)
#
FactoryBot.define do
  factory :income do
    recurring_period { Income.recurring_periods.keys.sample }
    income_date { Faker::Date.backward(days: 30) }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
    category
    account
  end
end
