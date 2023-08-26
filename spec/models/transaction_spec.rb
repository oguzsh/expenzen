require 'rails_helper'

RSpec.describe Transaction, type: :model do
  # Associations
  it { is_expected.to belong_to(:account) }
  it { is_expected.to belong_to(:category) }

  # Enum
  it { is_expected.to define_enum_for(:transaction_type).with_values(income: 0, expense: 1) }

  # Validations
  it { is_expected.to validate_presence_of(:transaction_date) }
  it { is_expected.to validate_presence_of(:amount) }
  it { is_expected.to validate_numericality_of(:amount).is_greater_than(0) }
  it { is_expected.to validate_presence_of(:account) }
  it { is_expected.to validate_presence_of(:category) }

  describe '#recent_transactions scope' do
    let!(:older_transaction) { create(:transaction, created_at: 1.week.ago) }
    let!(:recent_transaction) { create(:transaction, created_at: 1.day.ago) }

    it 'returns transactions ordered by created_at in descending order' do
      expect(described_class.recent_transactions).to eq([recent_transaction, older_transaction])
    end
  end
end
