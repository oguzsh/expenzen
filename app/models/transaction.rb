# == Schema Information
#
# Table name: transactions
#
#  id                :bigint           not null, primary key
#  amount            :decimal(10, 2)   not null
#  description       :string(255)
#  transactable_type :string           not null
#  transaction_date  :datetime         not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  transactable_id   :bigint           not null
#
# Indexes
#
#  index_transactions_on_transactable  (transactable_type,transactable_id)
#
class Transaction < ApplicationRecord
  belongs_to :transactable, polymorphic: true

  validates :amount, presence: true, numericality: { greater_than: 0 }
  validates :transaction_date, presence: true
end
