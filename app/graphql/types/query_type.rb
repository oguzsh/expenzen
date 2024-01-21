# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    field :accounts, [Types::AccountType], 'All financial accounts', null: false
    field :expenses, [Types::ExpenseType], 'All expenses', null: false
    field :incomes, [Types::IncomeType], 'All incomes', null: false
    field :user, Types::UserType, 'All user details', null: false

    field :recent_transactions, [Types::TransactionType], 'Recent transactions data', null: true

    field :financial_summary, Types::FinancialSummaryType, "Summary of user's financial data like total income"

    def user
      current_user
    end

    def accounts
      ::AccountService.accounts(user_id: context[:current_user].id)
    end

    def incomes
      ::IncomeService.incomes(user_id: context[:current_user].id)
    end

    def expenses
      ::ExpenseService.expenses(user_id: context[:current_user].id)
    end

    def recent_transactions
      ::TransactionService.recent_transactions(user_id: context[:current_user].id)
    end

    def financial_summary
      context[:current_user]
    end
  end
end
