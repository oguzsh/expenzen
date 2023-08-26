# frozen_string_literal: true

module Mutations
  module Accounts
    class DeleteAccount < Mutations::BaseMutation
      argument :id, Integer, required: true

      type Types::AccountType

      def resolve(id:)
        ::AccountService.delete_account(account_id: id)
      end
    end
  end
end
