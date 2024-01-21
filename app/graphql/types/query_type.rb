# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :accounts, [Types::AccountType], 'All financial accounts', null: false

    field :expenses, [Types::ExpenseType], 'All expenses', null: false
    field :incomes, [Types::IncomeType], 'All incomes', null: false

    field :recent_transactions, [Types::TransactionType], 'Recent transactions data', null: true

    field :total_balance, Float, 'Total balance of accounts', null: false
    field :total_expenses, Float, 'Total of expenses', null: false
    field :total_incomes, Float, 'Total of incomes', null: false

    field :user, Types::UserType, 'All user details', null: false

    def user
      current_user
    end

    def accounts
      ::AccountService.accounts(user_id: context[:current_user].id)
    end

    def total_balance
      ::AccountService.total_balance(user_id: context[:current_user].id)
    end

    def incomes
      ::IncomeService.incomes(user_id: context[:current_user].id)
    end

    def total_incomes
      ::IncomeService.total_incomes(user_id: context[:current_user].id)
    end

    def expenses
      ::ExpenseService.expenses(user_id: context[:current_user].id)
    end

    def total_expenses
      ::ExpenseService.total_expenses(user_id: context[:current_user].id)
    end

    def recent_transactions
      ::TransactionService.recent_transactions(user_id: context[:current_user].id)
    end
  end
end
