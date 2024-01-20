class AddCategoryIdToIncomes < ActiveRecord::Migration[7.0]
  def change
    add_reference :incomes, :category, null: false, foreign_key: true
  end
end
