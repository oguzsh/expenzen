# frozen_string_literal: true

module Mutations
  module Accounts
    class DeleteAccount < Mutations::BaseMutation
      argument :id, Integer, required: true

      field :errors, [String], null: true
      field :success, Boolean, null: false

      def resolve(id:)
        ::AccountService.delete_account(account_id: id)
        { success: true }
      rescue StandardError => e
        { success: false, errors: [e.message] }
      end
    end
  end
end
