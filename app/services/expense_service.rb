# frozen_string_literal: true

class ExpenseService < BaseService
  def self.expenses(user_id:)
    User.find_by(id: user_id).expenses.includes(:transactions) # TODO: Add pagination
  end

  def self.total_expenses(user_id:)
    User.find_by(id: user_id).expenses.sum(&:total)
  end

  def self.create_expense(params)
    Expense.find_or_create_by!(params)
  rescue ActiveRecord::RecordInvalid => error
    raise_error(message: error.message)
  end

  def self.update_expense(attributes)
    expense = find_record(model: Expense, id: attributes[:id])
    expense.update!(attributes)
    expense
  rescue ActiveRecord::RecordInvalid => error
    raise_error(message: error.message)
  end

  def self.delete_expense(income_id:)
    expense = find_record(model: Expense, id: income_id)
    expense.destroy
  end
end
