# frozen_string_literal: true

module Types
  class TransactableType < Types::BaseUnion
    description 'Properties of Transaction'

    possible_types Types::IncomeType,
                   Types::ExpenseType

    def self.resolve_type(object, _context)
      if object.is_a?(Income)
        Types::IncomeType
      elsif object.is_a?(Expense)
        Types::ExpenseType
      end
    end
  end
end
