# frozen_string_literal: true

module Types
  class TransactionType < Types::BaseObject
    field :amount, Float, null: false
    field :description, String, null: true
    field :id, ID, null: false
    field :transactable, Types::TransactableType, null: false
    field :transaction_date, GraphQL::Types::ISO8601DateTime, null: false
    field :user, Types::UserType, null: false
  end
end
