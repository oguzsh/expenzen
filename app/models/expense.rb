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
#
# Indexes
#
#  index_expenses_on_account_id   (account_id)
#  index_expenses_on_category_id  (category_id)
#
# Foreign Keys
#
#  fk_rails_...  (account_id => accounts.id)
#  fk_rails_...  (category_id => categories.id)
#
class Expense < ApplicationRecord
  include Recurring

  belongs_to :account
  belongs_to :category

  has_many :transactions, as: :transactable, dependent: :destroy

  validates :expense_date, presence: true
end
