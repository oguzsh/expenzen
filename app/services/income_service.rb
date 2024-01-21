# frozen_string_literal: true

class IncomeService < BaseService
  def self.incomes(user_id:)
    User.find_by(id: user_id).incomes.includes(:transactions) # TODO: Add pagination
  end

  def self.total_incomes(user_id:)
    User.find_by(id: user_id).incomes.sum(&:total)
  end

  def self.create_income(params)
    Income.find_or_create_by!(params)
  rescue ActiveRecord::RecordInvalid => error
    raise_error(message: error.message)
  end

  def self.update_income(attributes)
    income = find_record(model: Income, id: attributes[:id])
    income.update!(attributes)
    income
  rescue ActiveRecord::RecordInvalid => error
    raise_error(message: error.message)
  end

  def self.delete_income(income_id:)
    income = find_record(model: Income, id: income_id)
    income.destroy
  end
end
