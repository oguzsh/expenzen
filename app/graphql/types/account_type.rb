# frozen_string_literal: true

module Types
  class AccountType < Types::BaseObject
    field :account_type, String, null: false
    field :balance, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :id, ID, null: false
    field :name, String, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :user_id, Integer, null: false
  end
end
