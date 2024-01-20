# == Schema Information
#
# Table name: expenses
#
#  id               :bigint           not null, primary key
#  is_recurring     :boolean          default(FALSE)
#  recurring_period :integer          default("not_recurring")
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  account_id       :bigint           not null
#
# Indexes
#
#  index_expenses_on_account_id  (account_id)
#
# Foreign Keys
#
#  fk_rails_...  (account_id => accounts.id)
#
class Expense < ApplicationRecord
  include Recurring

  belongs_to :account
  has_many :transactions, as: transactable, dependent: :destory

  validates :expense_date, presence: true
end
