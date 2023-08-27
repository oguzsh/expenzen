# frozen_string_literal: true

module Mutations
  module Transactions
    class CreateTransaction < Mutations::BaseMutation
      argument :account_id, ID, required: true
      argument :amount, Float, required: true
      argument :category_id, ID, required: true
      argument :note, String, required: false
      argument :transaction_date, GraphQL::Types::ISO8601Date, required: true
      argument :transaction_type, Types::TransactionTypeEnum, required: true

      type Types::TransactionType

      def resolve(attributes)
        ::TransactionService.create_transaction(attributes)
      end
    end
  end
end
