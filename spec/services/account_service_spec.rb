require 'rails_helper'

RSpec.describe AccountService do
  let!(:user) { create(:user) }

  describe '.accounts' do
    let!(:accounts) { create_list(:account, 3, user: user) }

    it 'returns accounts for a given user' do
      result = described_class.accounts(user_id: user.id)
      expect(result).to match_array(accounts)
    end
  end

  describe '.create_account' do
    let(:account_params) { { name: 'Test Account', balance: 100.5, account_type: 'savings', user_id: user.id } }

    it 'creates an account' do
      expect { described_class.create_account(account_params) }.to change(Account, :count).by(1)
    end
  end

  describe '.update_account' do
    let!(:account) { create(:account, user: user, balance: 50.0) }
    let(:new_balance) { 200.5 }

    it 'updates the account attributes' do
      updated_account = described_class.update_account(id: account.id, balance: new_balance)
      expect(updated_account.balance).to eq(new_balance)
    end
  end

  describe '.delete_account' do
    let!(:account) { create(:account, user: user) }

    it 'deletes an account' do
      expect { described_class.delete_account(account_id: account.id) }.to change(Account, :count).by(-1)
    end
  end
end
