require 'rails_helper'

RSpec.describe Category, type: :model do
  # Associations
  it { is_expected.to have_many(:transactions).dependent(:destroy) }

  # Validations
  it { is_expected.to validate_presence_of(:name) }

  describe 'uniqueness validation' do
    subject { FactoryBot.build(:category) }

    it { is_expected.to validate_uniqueness_of(:name) }
  end
end
