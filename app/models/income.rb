# == Schema Information
#
# Table name: incomes
#
#  id               :bigint           not null, primary key
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
class Income < ApplicationRecord
  include Recurring

  belongs_to :account
  belongs_to :category

  has_many :transactions, as: transactable, dependent: :destory

  validates :income_date, presence: true
end
