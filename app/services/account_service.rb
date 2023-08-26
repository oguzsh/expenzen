# frozen_string_literal: true

class AccountService
  def self.accounts(user_id:)
    Account.where(user_id: user_id) # TODO: Add pagination
  end

  def self.create_account(name:, balance:, account_type:, user_id:)
    Account.find_or_create_by!(name: name, balance: balance, account_type: account_type, user_id: user_id)
  rescue ActiveRecord::RecordInvalid => error
    raise GraphQL::ExecutionError, error.message
  end

  def self.update_account(attributes)
    Account.find(attributes[:id]).tap do |account|
      account.update!(attributes)
    end
  rescue ActiveRecord::RecordNotFound
    raise GraphQL::ExecutionError, 'Account not found!'
  rescue ActiveRecord::RecordInvalid => error
    raise GraphQL::ExecutionError, error.message
  end

  def self.delete_account(account_id:)
    Account.find(account_id).destroy
  rescue ActiveRecord::RecordNotFound
    raise GraphQL::ExecutionError, 'Account not found!'
  end
end
