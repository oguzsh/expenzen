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
class Expense < ApplicationRecord
  include Recurring

  belongs_to :user
  belongs_to :account
  belongs_to :category

  has_many :transactions, as: :transactable, dependent: :destroy

  validates :expense_date, presence: true

  scope :by_month, ->(month) { where('extract(month from expense_date) = ?', month) }
  scope :by_year, ->(year) { where('extract(year from expense_date) = ?', year) }
  scope :by_day_of_month, ->(day_of_month) { where('extract(day from expense_date) = ?', day_of_month) }

  def total
    Float(transactions.sum(&:amount))
  end
end
