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

  has_many :transactions, dependent: :destroy

  validates :account_type, presence: true
  validates :name, presence: true, uniqueness: { scope: :user_id, case_sensitive: false }
  validates :balance, presence: true, numericality: { greater_than_or_equal_to: 0 }
end
