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

  def self.update_account(account_id:, name: nil, balance: nil, account_type: nil, user_id: nil)
    account = Account.find(account_id)
    account.update!(
      name: name || account.name,
      balance: balance || account.balance,
      account_type: account_type || account.account_type,
      user_id: user_id || account.user_id
    )
  rescue ActiveRecord::RecordNotFound
    raise GraphQL::ExecutionError, 'Account not found!'
  rescue ActiveRecord::RecordInvalid => error
    raise GraphQL::ExecutionError, error.message
  end

  def self.remove_account(account_id:)
    Account.destroy(account_id)
  end
end
