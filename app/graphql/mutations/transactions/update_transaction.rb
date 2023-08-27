# frozen_string_literal: true

module Mutations
  module Transactions
    class UpdateTransaction < Mutations::BaseMutation
      argument :account_id, ID, required: false
      argument :amount, Float, required: false
      argument :category_id, ID, required: false
      argument :id, ID, required: true
      argument :note, String, required: false
      argument :transaction_date, GraphQL::Types::ISO8601Date, required: false
      argument :transaction_type, Types::TransactionTypeEnum, required: false

      type Types::TransactionType

      def resolve(attributes)
        ::TransactionService.update_transaction(attributes)
      end
    end
  end
end
