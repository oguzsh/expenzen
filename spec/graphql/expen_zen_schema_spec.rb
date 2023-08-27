# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ExpenZenSchema do
  it 'matches the dumped schema (rails graphql:schema:dump)' do
    aggregate_failures do
      expect(described_class.to_definition.rstrip).to eq(File.read(Rails.root.join('app/graphql/schema.graphql')).rstrip)
      expect(described_class.to_json).to eq(File.read(Rails.root.join('app/graphql/schema.json')).rstrip)
    end
  end
end
