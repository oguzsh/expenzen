# == Schema Information
#
# Table name: expenses
#
#  id               :bigint           not null, primary key
#  expense_date     :datetime         not null
#  is_recurring     :boolean          default(FALSE)
#  recurring_period :integer          default("not_recurring")
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  account_id       :bigint           not null
#  category_id      :bigint           not null
#  user_id          :bigint           not null
#
# Indexes
#
#  index_expenses_on_account_id   (account_id)
#  index_expenses_on_category_id  (category_id)
#  index_expenses_on_user_id      (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (account_id => accounts.id)
#  fk_rails_...  (category_id => categories.id)
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :expense do
    recurring_period { Income.recurring_periods.keys.sample }
    expense_date { Faker::Date.backward(days: 30) }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
    category
    account
  end
end
