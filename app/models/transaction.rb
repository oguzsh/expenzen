# == Schema Information
#
# Table name: transactions
#
#  id               :bigint           not null, primary key
#  amount           :float            not null
#  note             :text
#  transaction_date :datetime         not null
#  transaction_type :integer          default("income"), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  account_id       :bigint           not null
#  category_id      :bigint           not null
#  user_id          :bigint           not null
#
# Indexes
#
#  index_transactions_on_account_id   (account_id)
#  index_transactions_on_category_id  (category_id)
#  index_transactions_on_user_id      (user_id)
#
class Transaction < ApplicationRecord
  belongs_to :user
  belongs_to :account
  belongs_to :category

  enum transaction_type: { income: 0, expense: 1 }

  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :transaction_date, presence: true
  validates :user, presence: true
  validates :account, presence: true
  validates :category, presence: true

  scope :recent_transactions, -> { order(created_at: :desc) }
end
