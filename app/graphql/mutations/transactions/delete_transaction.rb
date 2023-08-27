module Mutations
  module Transactions
    class DeleteTransaction < BaseMutation
      argument :id, ID, required: true

      field :errors, [String], null: true
      field :success, Boolean, null: false

      def resolve(id:)
        ::TransactionService.delete_transaction(id: id)
        { success: true }
      rescue StandardError => e
        { success: false, errors: [e.message] }
      end
    end
  end
end
