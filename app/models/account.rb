# frozen_string_literal: true

# == Schema Information
#
# Table name: accounts
#
#  id           :bigint           not null, primary key
#  account_type :string           not null
#  balance      :float            not null
#  name         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  user_id      :bigint           not null
#
# Indexes
#
#  index_accounts_on_name_and_user_id  (name,user_id) UNIQUE
#  index_accounts_on_user_id           (user_id)
#
class Account < ApplicationRecord
  belongs_to :user
  has_many :incomes, dependent: :destroy
  has_many :expenses, dependent: :destroy

  validates :account_type, :balance, :name, :user_id, presence: true

  validates :name, uniqueness: { scope: :user_id }
  validates :balance, numericality: { greater_than_or_equal_to: 0 }

  def self.total_balance
    sum(:balance)
  end
end
