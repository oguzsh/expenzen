# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  # Associations
  it { is_expected.to have_many(:accounts) }

  # Validations
  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_presence_of(:password) }

  describe 'email uniqueness' do
    before { create(:user) }

    it { is_expected.to validate_uniqueness_of(:email).case_insensitive  }
  end
end
