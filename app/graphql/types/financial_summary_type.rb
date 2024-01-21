module Types
  class FinancialSummaryType < Types::BaseObject
    field :user_id, Integer, null: false
    field :total_balance, Float, 'Total balance of accounts', null: false
    field :total_expenses, Float, 'Total of expenses', null: false
    field :total_incomes, Float, 'Total of incomes', null: false
    field :total_savings, Float, 'Total of savings', null: false
    field :total_savings_by_current_month, Float, 'Total savings of current month', null: false

    def total_balance
      ::AccountService.total_balance(user_id: object.id)
    end

    def total_expenses
      ::ExpenseService.total_expenses(user_id: object.id)
    end

    def total_incomes
      ::IncomeService.total_incomes(user_id: object.id)
    end

    def total_savings
      total_incomes - total_expenses
    end

    def total_savings_by_current_month
      incomes_total_by_month = ::IncomeService.by_month_total(user_id: object.id, month: Time.zone.now.month)
      expenses_total_by_month = ::ExpenseService.by_month_total(user_id: object.id, month: Time.zone.now.month)

      incomes_total_by_month - expenses_total_by_month
    end
  end
end
