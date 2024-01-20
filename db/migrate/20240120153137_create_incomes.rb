class CreateIncomes < ActiveRecord::Migration[7.0]
  def change
    create_table :incomes do |t|
      t.references :account, null: false, foreign_key: true
      t.boolean :is_recurring, default: false
      t.integer :recurring_period, default: 0
      t.datetime :income_date, null: false

      t.timestamps
    end
  end
end
