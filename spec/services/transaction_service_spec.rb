require 'rails_helper'

RSpec.describe TransactionService do
  describe '.transactions_by_user' do
    let!(:user) { create(:user) }
    let!(:transactions) { create_list(:transaction, 3, { user: user }) }

    it 'returns transactions for a given user' do
      result = described_class.transactions_by_user(user_id: user.id)
      expect(result).to match_array(transactions)
    end
  end

  describe '.create_transaction' do
    let(:params) { { amount: 100.5, transaction_date: Time.zone.now, description: 'Test', user: create(:user), transactable: create(:income) } }

    it 'creates a transaction' do
      expect { described_class.create_transaction(params) }.to change(Transaction, :count).by(1)
    end
  end

  describe '.update_transaction' do
    let(:transaction) { create(:transaction) }
    let(:new_amount) { 200.5 }

    it 'updates the transaction attributes' do
      described_class.update_transaction(id: transaction.id, amount: new_amount)
      expect(transaction.reload.amount).to eq(new_amount)
    end
  end

  describe '.delete_transaction' do
    let!(:transaction) { create(:transaction) }

    it 'deletes a transaction' do
      expect { described_class.delete_transaction(id: transaction.id) }.to change(Transaction, :count).by(-1)
    end
  end
end
