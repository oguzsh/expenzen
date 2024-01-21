# frozen_string_literal: true

module Types
  class ExpenseType < Types::BaseObject
    field :account, Types::AccountType, null: false
    field :category, Types::CategoryType, null: false
    field :expense_date, GraphQL::Types::ISO8601DateTime, null: false
    field :id, ID, null: false
    field :is_recurring, Boolean, null: false
    field :recurring_period, Integer, null: false
    field :transactions, [Types::TransactionType], null: false
    field :user, Types::UserType, null: false
  end
end
