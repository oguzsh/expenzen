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
#  user_id           :bigint           not null
#
# Indexes
#
#  index_transactions_on_transactable  (transactable_type,transactable_id)
#  index_transactions_on_user_id       (user_id)
#
# Foreign Keys
#
#  fk_rails_...  (user_id => users.id)
#
FactoryBot.define do
  factory :transaction do
    user
    amount { 100.0 }
    description { 'test description' }
    transaction_date { Time.zone.today }
    association :transactable, factory: :income
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
