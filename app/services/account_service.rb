# frozen_string_literal: true

class AccountService < BaseService
  def self.accounts(user_id:)
    Account.where(user_id: user_id) # TODO: Add pagination
  end

  def self.total_balance(user_id:)
    Account.where(user_id: user_id).total_balance
  end

  def self.create_account(params)
    Account.find_or_create_by!(params)
  rescue ActiveRecord::RecordInvalid => error
    raise_error(message: error.message)
  end

  def self.update_account(attributes)
    account = find_record(model: Account, id: attributes[:id])
    account.update!(attributes)
    account
  rescue ActiveRecord::RecordInvalid => error
    raise_error(message: error.message)
  end

  def self.delete_account(account_id:)
    account = find_record(model: Account, id: account_id)
    account.destroy
  end
end
