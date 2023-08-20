# frozen_string_literal: true

module Mutations
  module Accounts
    class CreateAccount < Mutations::BaseMutation
      argument :account_type, String, required: true
      argument :balance, Float, required: true
      argument :name, String, required: true

      field :account, Types::AccountType, null: false

      def resolve(name:, balance:, account_type:)
        account = ::AccountService.create_account(name: name,
                                                  balance: balance,
                                                  account_type: account_type,
                                                  user_id: context[:current_user].id)
        {
          account: account
        }
      end
    end
  end
end
