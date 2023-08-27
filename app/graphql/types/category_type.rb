module Types
  class CategoryType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :transactions, [Types::TransactionType], null: true, description: 'List of transactions associated with this category'
  end
end
