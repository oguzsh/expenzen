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
FactoryBot.define do
  factory :account do
    user
    name { Faker::Bank.unique.name }
    account_type { 'TestType' }
    balance { 1000.0 }
    created_at { Time.zone.now }
    updated_at { Time.zone.now }
  end
end
