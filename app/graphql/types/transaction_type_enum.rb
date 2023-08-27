module Types
  class TransactionTypeEnum < BaseEnum
    value 'INCOME', 'Income transaction', value: 'income'
    value 'EXPENSE', 'Expense transaction', value: 'expense'
  end
end
