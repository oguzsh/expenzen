# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_account, mutation: Mutations::Accounts::CreateAccount, description: 'Create a new account'
    field :delete_account, mutation: Mutations::Accounts::DeleteAccount, description: 'Delete related account'
    field :update_account, mutation: Mutations::Accounts::UpdateAccount, description: 'Update the related account'

    field :create_transaction, mutation: Mutations::Transactions::CreateTransaction, description: 'Create a new transaction'
    field :update_transaction, mutation: Mutations::Transactions::UpdateTransaction, description: 'Update the related transaction'
    field :delete_transaction, mutation: Mutations::Transactions::DeleteTransaction, description: 'Delete the related transaction'
  end
end
