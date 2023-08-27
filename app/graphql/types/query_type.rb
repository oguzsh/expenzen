# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :accounts, [Types::AccountType], 'All financial accounts', null: false

    field :transactions, [Types::TransactionType], 'All transaction data', null: false

    def accounts
      ::AccountService.accounts(user_id: context[:current_user].id)
    end

    def transactions
      ::TransactionService.transactions_by_user(user_id: context[:current_user].id)
    end
  end
end
