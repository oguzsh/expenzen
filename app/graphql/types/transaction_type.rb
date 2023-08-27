# frozen_string_literal: true

module Types
  class TransactionType < Types::BaseObject
    field :id, ID, null: false
    field :transaction_date, GraphQL::Types::ISO8601DateTime, null: false
    field :amount, Float, null: false
    field :transaction_type, String, null: false
    field :note, String, null: true
    field :account, Types::AccountType, null: false
    field :category, Types::CategoryType, null: false
  end
end
