class TransactionService < BaseService
  def self.transactions_by_user(user_id:)
    Transaction.where(user_id: user_id) # TODO: Add pagination
  end

  def self.recent_transactions(user_id:)
    Transaction.where(user_id: user_id).recent_transactions
  end

  def self.create_transaction(params)
    Transaction.find_or_create_by!(params)
  rescue ActiveRecord::RecordInvalid => error
    raise_error(message: error.message)
  end

  def self.update_transaction(attributes)
    transaction = find_record(model: Transaction, id: attributes[:id])
    transaction.update!(attributes)
    transaction
  rescue ActiveRecord::RecordInvalid => error
    raise_error(message: error.message)
  end

  def self.delete_transaction(id:)
    transaction = find_record(model: Transaction, id: id)
    transaction.destroy
  end
end
