# frozen_string_literal: true

module Mutations
  module Accounts
    class UpdateAccount < Mutations::BaseMutation
      argument :account_type, String, required: false
      argument :balance, Float, required: false
      argument :id, Integer, required: true
      argument :name, String, required: false

      type Types::AccountType

      def resolve(attributes)
        ::AccountService.update_account(attributes)
      end
    end
  end
end
