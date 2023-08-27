# frozen_string_literal: true

# == Schema Information
#
# Table name: accounts
#
#  id         :bigint           not null, primary key
#  balance    :integer          not null
#  name       :string           not null
#  account_type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_accounts_on_user_id  (user_id)
#
require 'rails_helper'

RSpec.describe Account, type: :model do
  # Associations
  it { is_expected.to belong_to(:user) }

  # Validations
  it { is_expected.to validate_presence_of(:balance) }
  it { is_expected.to validate_numericality_of(:balance).is_greater_than_or_equal_to(0) }

  it { is_expected.to validate_presence_of(:name) }

  describe 'name uniqueness' do
    subject { build(:account, user: existing_account.user) }

    let!(:existing_account) { create(:account) }

    it { is_expected.to validate_uniqueness_of(:name).scoped_to(:user_id).case_insensitive }
  end
end
