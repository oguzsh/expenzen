# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_account, mutation: Mutations::Accounts::CreateAccount, description: 'Create a new account'
  end
end
