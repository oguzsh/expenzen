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
FactoryBot.define do
  factory :transaction do
    user
    account
    category
    amount { 100.0 }
    transaction_date { Time.zone.today }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
